import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

function projectState({
  id = 'project-alpha',
  name = 'Alpha Site',
  currentStep = 0,
  view = 'home',
  note = ''
} = {}) {
  const perStep = Object.fromEntries(
    Array.from({ length: 11 }, (_, step) => [
      step,
      { tasks: {}, gates: {}, done: false, note: step === currentStep ? note : '' }
    ])
  );

  return {
    schemaVersion: 2,
    defaults: {
      defaultModel: 'sonnet',
      tools: { kimi: true, coderabbit: false, codex: true },
      hosting: 'Cloudflare Pages',
      track: 'practice',
      frontierCredits: 2
    },
    projects: [
      {
        id,
        name,
        setupDone: true,
        vars: {
          idea: 'a precise editorial research catalog',
          audience: 'laboratory procurement teams',
          feeling: 'calm confidence',
          sections: 'hero, catalog, standards, contact'
        },
        settings: {
          defaultModel: 'sonnet',
          tools: { kimi: true, coderabbit: false, codex: true },
          hosting: 'Cloudflare Pages',
          track: 'practice',
          frontierCredits: 2
        },
        currentStep,
        view,
        perStep,
        frontier: { total: 2, remaining: 2, active: null, history: [] },
        finished: false,
        liveUrl: ''
      }
    ],
    activeProjectId: id
  };
}

async function seedV2(page, options) {
  const state = projectState(options);
  await page.addInitScript(value => {
    if (!sessionStorage.getItem('walkthrough-test-seeded')) {
      localStorage.setItem('walkthrough-v2', JSON.stringify(value));
      sessionStorage.setItem('walkthrough-test-seeded', 'true');
    }
  }, state);
  return state;
}

async function completeFirstRun(page) {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Start the walkthrough' })).toBeVisible();
  await expect(page.locator('#setup-name')).toBeFocused();
  await page.locator('#setup-name').fill('First Project');
  await page.locator('#setup-idea').fill('a premium editorial catalog');
  await page.locator('#setup-audience').fill('creative teams');
  await page.locator('#setup-feeling').fill('quiet confidence');
  await page.locator('#setup-sections').fill('home, work, about, contact');
  await page.getByRole('button', { name: 'CREATE PROJECT' }).click();
  await expect(page.getByRole('heading', { name: 'First Project' })).toBeVisible();
}

test.describe('desktop walkthrough behavior', () => {
  test.skip(({ isMobile }) => isMobile, 'Desktop behavior is covered once.');

  test('first-run setup is focused, persists variables, and passes a critical axe scan', async ({ page }) => {
    const browserErrors = [];
    page.on('console', message => {
      if (message.type() === 'error') browserErrors.push(message.text());
    });
    page.on('pageerror', error => browserErrors.push(error.message));

    await completeFirstRun(page);

    await page.getByRole('button', { name: 'I’M STUCK' }).click();
    await expect(page.getByRole('status')).toContainText('Diagnosis prompt copied');

    const imageResults = await page.evaluate(async () => {
      const paths = Array.from(
        { length: 11 },
        (_, step) => `assets/example/forma-9-step-${String(step).padStart(2, '0')}.jpg`
      );
      return Promise.all(
        paths.map(
          src =>
            new Promise(resolve => {
              const image = new Image();
              image.onload = () => resolve({ src, width: image.naturalWidth, height: image.naturalHeight });
              image.onerror = () => resolve({ src, width: 0, height: 0 });
              image.src = src;
            })
        )
      );
    });
    expect(imageResults.every(image => image.width === 1400 && image.height >= 500)).toBe(true);

    await page.getByRole('button', { name: 'SETTINGS' }).click();
    await expect(page.locator('#project-idea')).toHaveValue('a premium editorial catalog');
    await page.reload();
    await expect(page.getByRole('heading', { name: 'Settings' })).toBeVisible();
    await expect(page.locator('#project-feeling')).toHaveValue('quiet confidence');

    const results = await new AxeBuilder({ page }).analyze();
    const serious = results.violations.filter(
      violation => violation.impact === 'critical' || violation.impact === 'serious'
    );
    expect(serious, JSON.stringify(serious, null, 2)).toEqual([]);
    expect(browserErrors).toEqual([]);
  });

  test('future steps open as previews, full details stay locked, and focus returns', async ({ page }) => {
    await seedV2(page);
    await page.goto('/');
    await page.getByRole('button', { name: 'THE MAP' }).click();

    const trigger = page.locator('[data-action="open-step"][data-step="4"]');
    await trigger.focus();
    await trigger.press('Enter');
    await expect(page.getByText('Friendly preview · app-authored')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Close' })).toBeFocused();
    await expect(page.getByText('Looking ahead does not start this step')).toBeVisible();

    await page.getByRole('button', { name: 'SHOW FULL DETAIL' }).click();
    await expect(page.getByText('Canonical playbook · verbatim Step 4')).toBeVisible();
    await expect(
      page.getByRole('heading', { name: 'Step 4 — Build and approve a representative vertical slice' })
    ).toBeVisible();
    await expect(page.locator('[data-action="sheet-task"]')).toHaveCount(0);
    await expect(page.locator('.sheet .check-row[disabled]').first()).toBeDisabled();

    await page.keyboard.press('Escape');
    await expect(trigger).toBeFocused();
    await page.getByRole('button', { name: 'YOU ARE HERE', exact: true }).click();
    await expect(page.getByText('STEP 0 OF 11')).toBeVisible();
  });

  test('gates prevent premature completion and progress survives reload', async ({ page }) => {
    await seedV2(page);
    await page.goto('/');

    for (let task = 0; task < 3; task += 1) {
      await page.getByRole('button', { name: 'DONE → NEXT' }).click();
    }

    const complete = page.getByRole('button', { name: 'COMPLETE STEP →' });
    await expect(complete).toBeDisabled();
    await page.locator('[data-action="toggle-gate"]').click();
    await expect(complete).toBeEnabled();
    await complete.click();
    await expect(page.getByText('STEP 1 OF 11')).toBeVisible();

    await page.reload();
    await expect(page.getByText('STEP 1 OF 11')).toBeVisible();
    await expect(page.getByText('10%')).toBeVisible();
  });

  test('prompts, model defaults, notes, credits, and projects adapt independently', async ({ page }) => {
    await seedV2(page, { currentStep: 1, note: 'Initial decision' });
    await page.goto('/');

    await expect(page.locator('[data-note-step="1"]')).toHaveValue('Initial decision');
    await page.locator('[data-note-step="1"]').fill('Approved scope and exclusions');
    await page.reload();
    await expect(page.locator('[data-note-step="1"]')).toHaveValue('Approved scope and exclusions');

    page.once('dialog', dialog => dialog.accept());
    await page.getByRole('button', { name: 'SPEND 1 CREDIT & START' }).click();
    await expect(page.getByText('1/2')).toBeVisible();
    await page.getByRole('button', { name: 'PAUSE' }).click();
    await page.reload();
    await expect(page.getByRole('button', { name: 'RESUME' })).toBeVisible();
    await expect(page.getByText('1/2')).toBeVisible();

    await page.getByRole('button', { name: 'SETTINGS' }).click();
    await page.locator('#setting-default-model').selectOption('opus');
    await page.getByRole('button', { name: 'THE MAP' }).click();
    await expect(page.locator('[data-action="open-step"][data-step="5"]')).toContainText('Opus 4.8');

    await page.locator('[data-action="open-step"][data-step="1"]').click();
    await expect(page.locator('.sheet .prompt-block pre')).toContainText(
      'a precise editorial research catalog'
    );
    await expect(page.locator('.sheet .prompt-block pre')).toContainText('laboratory procurement teams');
    await page.keyboard.press('Escape');

    await page.getByRole('button', { name: 'PROJECTS' }).click();
    await page.getByRole('button', { name: 'CREATE PROJECT' }).click();
    await page.locator('#setup-name').fill('Beta Site');
    await page.locator('#setup-idea').fill('a focused portfolio');
    await page.locator('#setup-audience').fill('studio clients');
    await page.locator('#setup-feeling').fill('bold clarity');
    await page.locator('#setup-sections').fill('home, projects, contact');
    await page.getByRole('button', { name: 'CREATE PROJECT' }).click();
    await expect(page.getByRole('heading', { name: 'Beta Site' })).toBeVisible();
    await expect(page.locator('[data-note-step="0"]')).toHaveValue('');
    await expect(page.getByText('2/2')).toBeVisible();

    await page.getByRole('button', { name: 'PROJECTS' }).click();
    const alphaCard = page.locator('.project-card').filter({ hasText: 'Alpha Site' });
    await alphaCard.getByRole('button', { name: 'OPEN' }).click();
    await expect(page.locator('[data-note-step="1"]')).toHaveValue('Approved scope and exclusions');
    await expect(page.getByText('1/2')).toBeVisible();
  });

  test('v1 state migrates without deleting the original key', async ({ page }) => {
    await page.addInitScript(() => {
      if (!sessionStorage.getItem('walkthrough-test-seeded')) {
        localStorage.setItem(
          'walkthrough-v1',
          JSON.stringify({
            setupDone: true,
            currentStep: 3,
            vars: {
              name: 'Legacy Project',
              idea: 'legacy idea',
              audience: 'legacy audience',
              feeling: 'steady',
              sections: 'home, contact'
            },
            perStep: { 0: { done: true }, 1: { done: true }, 2: { done: true } },
            coins: 1
          })
        );
        sessionStorage.setItem('walkthrough-test-seeded', 'true');
      }
    });
    await page.goto('/');

    await expect(page.getByRole('heading', { name: 'Legacy Project' })).toBeVisible();
    await expect(page.getByText('STEP 3 OF 11')).toBeVisible();
    const keys = await page.evaluate(() => ({
      v1: Boolean(localStorage.getItem('walkthrough-v1')),
      v2: Boolean(localStorage.getItem('walkthrough-v2'))
    }));
    expect(keys).toEqual({ v1: true, v2: false });

    await page.locator('[data-note-step="3"]').fill('Migration confirmed');
    await expect.poll(() => page.evaluate(() => Boolean(localStorage.getItem('walkthrough-v2')))).toBe(true);
    expect(await page.evaluate(() => Boolean(localStorage.getItem('walkthrough-v1')))).toBe(true);
  });

  test('reference exposes the canonical source and the badge legend is keyboard-safe', async ({ page }) => {
    await seedV2(page);
    await page.goto('/');
    await page.getByRole('button', { name: 'REFERENCE' }).click();
    await page.getByRole('button', { name: 'Part B — Operating rules' }).click();
    await expect(page.getByRole('heading', { name: 'B.1 Model selection: defaults, not mythology' })).toBeVisible();

    const legendTrigger = page.getByRole('button', { name: /RULE LEGEND/ }).first();
    await legendTrigger.focus();
    await legendTrigger.press('Enter');
    await expect(page.getByRole('dialog')).toHaveAttribute('aria-label', 'Rule badge legend');
    await page.keyboard.press('Shift+Tab');
    await expect(page.locator('.sheet button').last()).toBeFocused();
    await page.keyboard.press('Escape');
    await expect(legendTrigger).toBeFocused();
  });
});

test.describe('phone and reduced-motion behavior', () => {
  test.skip(({ isMobile }) => !isMobile, 'Phone behavior is covered once.');

  test('uses one full-width column with no horizontal overflow', async ({ page }) => {
    await seedV2(page, { view: 'map' });
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/');

    const dimensions = await page.evaluate(() => ({
      viewport: window.innerWidth,
      documentWidth: document.documentElement.scrollWidth,
      mainWidth: document.querySelector('main').getBoundingClientRect().width,
      cardWidth: document.querySelector('.journey-card').getBoundingClientRect().width
    }));

    expect(dimensions.documentWidth).toBe(dimensions.viewport);
    expect(dimensions.mainWidth).toBe(dimensions.viewport);
    expect(dimensions.cardWidth).toBeGreaterThan(dimensions.viewport - 40);
    expect(
      await page.locator('.journey-card').first().evaluate(element => getComputedStyle(element).transitionDuration)
    ).toBe('0s');
    await expect(page.locator('.bottomnav')).toBeVisible();
    await expect(page.locator('.sidebar')).toBeHidden();
    await expect(page.locator('.molecule .core')).toHaveCount(0);
  });
});
