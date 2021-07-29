/** Get window's height */
export function getWindowHeight(): number {
  return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
}

/** Get window's width */
export function getWindowWidth(): number {
  return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
}

/** Find element offset position recursively by its parents */
export function getOffsetTop(element: HTMLElement, parent: HTMLElement | null = null) {
  let top: number = element.offsetTop;
  while (element === element.offsetParent) {
    if (parent === element) {
      return top;
    }
    top += element.offsetTop;
  }
  return top;
}
