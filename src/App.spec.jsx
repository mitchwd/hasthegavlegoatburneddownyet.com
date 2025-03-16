import { expect, test } from '@playwright/experimental-ct-react';
import App from './App';

test('should mount', async ({ mount }) => {
  const component = await mount(<App />);
  await expect(component).toContainText('Has the Gävle Goat burned down yet?');
});
