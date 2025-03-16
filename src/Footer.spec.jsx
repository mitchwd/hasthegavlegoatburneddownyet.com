import { expect, test } from '@playwright/experimental-ct-react';
import Footer from './Footer';

test.describe('Footer', () => {
  test('shows a link to the developer', async ({ mount, page }) => {
    await mount(<Footer />);
    const devCredit = await page.getByRole('link', {
      name: /Made by @mitchwd/i,
    });

    // Assert link is visible and clickable
    await expect(devCredit).toBeVisible();
    await expect(devCredit).toHaveAttribute('href', 'https://www.mitchwd.com');
  });

  test('shows a link to the image credit', async ({ mount, page }) => {
    await mount(<Footer />);
    const imageCredit = await page.getByRole('link', {
      name: /Image from @bernstal/i,
    });

    // Assert link is visible and clickable
    await expect(imageCredit).toBeVisible();
    await expect(imageCredit).toHaveAttribute(
      'href',
      'https://www.instagram.com/bernstal/?hl=en'
    );
  });

  test('shows exactly 2 links', async ({ mount, page }) => {
    await mount(<Footer />);
    const links = page.getByRole('link');
    await expect(links).toHaveCount(2);
  });
});
