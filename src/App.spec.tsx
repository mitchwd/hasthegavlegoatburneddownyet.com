import { page } from '@vitest/browser/context';
import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import App from './App';

test('should mount', async () => {
  render(<App />);

  await expect
    .element(page.getByText('Has the Gävle goat burned down yet?'))
    .toBeInTheDocument();
});
