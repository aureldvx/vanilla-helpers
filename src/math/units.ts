/** Convert px to rem */
export function pxToRem (dimension: number): string {
  const bodySize: number = parseFloat(document.body.style.fontSize);
  return `${dimension / bodySize}rem`;
}

/** Convert px to percentage */
export function pxToPercent (
  dimension: number,
  parent: boolean = true,
  element?: HTMLElement,
  vertical: boolean = false
): string {
  const rect = element?.parentElement?.getBoundingClientRect();

  if (parent && rect) {
    if (vertical) {
      return `${(dimension * 100) / rect.height}%`;
    } else {
      return `${(dimension * 100) / rect.width}%`;
    }
  } else if (parent && !rect) {
    return '100%';
  } else {
    if (vertical) {
      return `${(dimension * 100) / window.innerHeight}%`;
    } else {
      return `${(dimension * 100) / window.innerWidth}%`;
    }
  }
}
