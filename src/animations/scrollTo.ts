import { getOffsetTop, getWindowHeight } from '@core/utils';

/** Scroll to a HTML element centered in view */
export function scrollTo(element: HTMLElement): void {
  if (element === null) {
    return;
  }

  const elementOffset: number = getOffsetTop(element);
  const elementHeight: number = element.getBoundingClientRect().height;
  const viewHeight: number = getWindowHeight();
  const viewDelta: number = 100;

  let top: number = elementOffset - viewDelta;

  if (elementHeight <= viewHeight) {
    top = elementOffset - (viewHeight - elementHeight) / 2;
  }

  window.scrollTo({
    top,
    left: 0,
    behavior: 'smooth'
  });
}
