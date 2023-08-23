'use-client';

import { useUpdateEffect } from 'react-use';
import { useState } from 'react';
import { ReadonlyURLSearchParams, usePathname, useRouter, useSearchParams } from 'next/navigation';

export function useFrom(): [string, () => void] {
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const [from, setFrom] = useState(getFrom(searchParams));

  useUpdateEffect(() => setFrom(searchParams.get('from') ?? '/'), [pathname]);

  const goToFrom = () => push(from);

  return [from, goToFrom];
}

function getFrom(searchParams: ReadonlyURLSearchParams) {
  return searchParams.get('from') ?? '/';
}
