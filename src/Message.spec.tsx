import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import { render } from 'vitest-browser-react';
import { page } from 'vitest/browser';
import Message from './Message';

test('shows the prompt and answer', async () => {
  render(<Message />);

  await expect
    .element(page.getByText(/Has the Gävle goat burned down yet?/i))
    .toBeVisible();

  const messageElement = page.getByTestId('message');
  const subMessageElement = page.getByTestId('subMessage');

  await expect.element(messageElement).toBeVisible();
  await expect.element(messageElement).not.toBeEmptyDOMElement();

  await expect.element(subMessageElement).toBeVisible();
  await expect.element(subMessageElement).not.toBeEmptyDOMElement();
});

describe('before season', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2025-05-01T00:00:00.000Z'));
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  test('shows an out of season message with no fallen date set', async () => {
    render(<Message />);

    // Assert out of season message and date
    await expect
      .element(
        page.getByText(
          /It's not Christmas time yet! \nCheck back on November 30th, 2025/i
        )
      )
      .toBeVisible();
  });

  test('shows an out of season message with past fallen date set', async () => {
    // Set fallenString to last season
    render(<Message fallenString='2024-12-25T00:00:00.000Z' />);

    // Assert out of season message and date
    await expect
      .element(
        page.getByText(
          /It's not Christmas time yet! \nCheck back on November 30th, 2025/i
        )
      )
      .toBeVisible();
  });
});

describe('during season', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2025-12-25T00:00:00.000Z'));
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  test('shows a standing message when no fallen date', async () => {
    render(<Message />);

    // Assert standing message and date
    await expect
      .element(page.getByText(/Gävlebocken is standing tall!/i))
      .toBeVisible();
    await expect
      .element(
        page.getByText(/The goat has been standing since November 30th, 2025./i)
      )
      .toBeVisible();
  });

  test('shows a standing message when fallen date is last season', async () => {
    // Set fallenString to last season
    render(<Message fallenString='2024-12-25T00:00:00.000Z' />);

    // Assert standing message and date
    await expect
      .element(page.getByText(/Gävlebocken is standing tall!/i))
      .toBeVisible();
    await expect
      .element(
        page.getByText(/The goat has been standing since November 30th, 2025./i)
      )
      .toBeVisible();
  });

  test('shows a fallen message when fallen date is within season', async () => {
    // Set fallenString to current season (yesterday)
    render(<Message fallenString='2025-12-24T00:00:00.000Z' />);

    // Assert fallen message and date
    await expect
      .element(page.getByText(/Yes. RIP Gävlebocken./i))
      .toBeVisible();
    await expect
      .element(page.getByText(/November 30th - December 24th, 2025/i))
      .toBeVisible();
  });
});
