'use client';

import { createElement } from 'react';
import { Provider } from 'jotai';

export function JotaiProvider(...[props]: Parameters<typeof Provider>) {
  return createElement(Provider, props);
}
