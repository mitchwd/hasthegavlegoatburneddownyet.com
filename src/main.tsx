import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';

// oxlint-disable-next-line import/no-unassigned-import
import './index.css';

// oxlint-disable-next-line typescript/no-non-null-assertion
createRoot(document.querySelector('#root')!).render(
  <StrictMode>
    <App />
    <SpeedInsights />
    <Analytics />
  </StrictMode>,
);
