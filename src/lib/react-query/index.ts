import React from 'react';
import { QueryClient } from '@tanstack/react-query';

const getQueryClient = React.cache(() => new QueryClient());
export { getQueryClient };
