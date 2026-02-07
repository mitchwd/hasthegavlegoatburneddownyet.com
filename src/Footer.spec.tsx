import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';
import { page } from 'vitest/browser';

import Footer from './Footer';

test('shows a link to the developer', async () => {
  render(<Footer />);

  const link = page.getByRole('link', { name: /Made by @mitchwd/i });

  // Assert link is visible and clickable
  await expect.element(link).toBeInTheDocument();
  await expect.element(link).toHaveAttribute('href', 'https://www.mitchwd.com');
});

test('shows a link to the image credit', async () => {
  render(<Footer />);

  const link = page.getByRole('link', { name: /Image from @bernstal/i });

  // Assert link is visible and clickable
  await expect.element(link).toBeInTheDocument();
  await expect
    .element(link)
    .toHaveAttribute('href', 'https://www.instagram.com/bernstal/?hl=en');
});

test('shows exactly 2 links', async () => {
  render(<Footer />);

  // Wait for at least one link to be present before counting
  await expect.element(page.getByRole('link').first()).toBeInTheDocument();

  const links = await page.getByRole('link').all();
  expect(links).toHaveLength(2);
});
