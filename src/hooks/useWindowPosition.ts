import { MutableRefObject, useCallback, useEffect } from 'react';

interface Params {
  elementRef: MutableRefObject<HTMLDivElement>;
}

interface HookReturn {
  offsetEnd: number;
}

export default function useWindowPosition({ elementRef }: Params): HookReturn {
  const rect = elementRef.current?.getBoundingClientRect();
  const scrollTop = window?.pageYOffset || document.documentElement?.scrollTop;

  const offsetEnd = rect.top + scrollTop;

  return { offsetEnd };
}
