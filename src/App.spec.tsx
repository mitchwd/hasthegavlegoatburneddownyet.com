import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';
import { page } from 'vitest/browser';

import App from './App';

test('should mount', async () => {
  render(<App />);

  await expect
    .element(page.getByText('Has the Gävle goat burned down yet?'))
    .toBeInTheDocument();
});
