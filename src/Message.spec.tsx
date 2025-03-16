import { page } from '@vitest/browser/context';
import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';
import Message from './Message';

test('shows the question', async () => {
  render(<Message />);

  await expect
    .element(page.getByText(/Has the Gävle goat burned down yet?/i))
    .toBeVisible();
});

// FYI: We just test for the visibility and content of the message and subMessage,
// rather than the actual strings (which change in/out of Advent season)
test('shows the answer', async () => {
  render(<Message />);

  const messageElement = page.getByTestId('message');
  const subMessageElement = page.getByTestId('subMessage');

  await expect.element(messageElement).toBeVisible();
  await expect.element(messageElement).not.toBeEmptyDOMElement();

  await expect.element(subMessageElement).toBeVisible();
  await expect.element(subMessageElement).not.toBeEmptyDOMElement();
});
