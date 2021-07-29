export interface HTMLAttribute {
  [key: string]: string;
}

export type HTMLChild = string | number | HTMLElement | SVGElement;

export type HTMLSelectionReturnType = Element|ChildNode|null;
