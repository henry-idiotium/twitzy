'use client';

import baseWretch from 'wretch';

const PREFIX = 'api/';
const BASE_URL = `${location.origin}/${PREFIX}`;

export const wretch = (path?: string) => baseWretch(new URL(BASE_URL + path).href);
