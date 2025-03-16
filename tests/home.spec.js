import { expect, test } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/Has the Gävle Goat burned down yet?/);
});

test("shows prompt", async ({ page }) => {
  await page.goto("/");

  const promptText = await page.getByRole('heading', { name: 'Has the Gävle Goat burned' })
  const answerText = await page.getByRole('heading', { name: 'It\'s not Christmas time yet!' }) // @TODO: This will be flaky, depending on time of year.

  await expect(promptText).toBeVisible();
  await expect(answerText).toBeVisible();
});

test("has Find Out More link", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Find out more" }).click()
  await expect(page).toHaveURL('https://www.visitgavle.se/en/gavle-goat')
});

test('has resource links', async ({ page }) => { 
  await page.goto('/');
  
  const instagramLink = await page.getByRole('link', { name: /Instagram/i });
  const wikipediaLink = await page.getByRole('link', { name: /Wikipedia/i });
  const youtubeLink = await page.getByRole('link', { name: /Youtube/i });

  await expect(instagramLink).toBeVisible();
  await expect(wikipediaLink).toBeVisible();
  await expect(youtubeLink).toBeVisible();
});

test('shows an image credit', async ({ page }) => {
  await page.goto('/');
  
  const imageCredit = await page.getByRole('link', { name: /Image from @bernstal/i });

  await expect(imageCredit).toBeVisible();
});

test('shows a dev credit', async ({ page }) => {
  await page.goto('/');
  
  const devCredit = await page.getByRole('link', { name: /Made by @mitchwd/i });

  await expect(devCredit).toBeVisible();
});