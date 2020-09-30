import { MutableRefObject, useCallback, useEffect } from 'react';

interface Params<T> {
  elementRef: MutableRefObject<HTMLDivElement>;
  onReady: (element: this['elementRef']) => void;
  model: HTMLElement;
}

export default function useWindowPosition<T>({
  onReady,
  elementRef,
  model,
}: Params<T>): void {
  const ready = useCallback(onReady, []);

  useEffect(() => {
    if (elementRef.current?.offsetTop > model?.offsetTop) {
      ready(elementRef);
    }
  }, [elementRef, model, ready]);
}
