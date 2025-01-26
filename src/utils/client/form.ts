import { ChangeEvent } from 'react';

export function debounce<T extends (...args: any[]) => void>(
  func: T,
  timeout = 300,
) {
  let timer: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(args);
    }, timeout);
  };
}

export function throttle<
  T extends (event: React.ChangeEvent<HTMLInputElement>) => void,
>(callbackFn: T, timer = 300) {
  let waiting = false;
  return (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!waiting) {
      callbackFn(event);
      waiting = true;
      setTimeout(() => (waiting = false), timer);
    }
  };
}
