/**
 * @param fn
 * @param wait
 * @returns
 */
export const debounce = (fn: Function, wait: number) => {
  let timer: any = null;
  return function () {
    if (timer !== null) {
      clearTimeout(timer);
    }
    timer = setTimeout(fn, wait);
  };
}
