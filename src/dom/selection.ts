import { HTMLSelectionReturnType } from '@typing/dom/HTMLElements';

/**
 * Select a HTML element
 * If `el` is not passed, it find in the document scope
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
 */
export function select(selector: string, el?: HTMLElement|null): HTMLElement | null {
  if (el) {
    return el.querySelector(selector);
  }
  return document.querySelector(selector);
}


/**
 * Select a HTML collection
 * If `el` is not passed, it find in the document scope
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
 */
export function selectAll(selector: string, el?: HTMLElement|null): NodeListOf<Element> {
  if (el) {
    return el.querySelectorAll(selector);
  }
  return document.querySelectorAll(selector);
}


/**
 * Retrieve next sibling element
 * If strict is passed, it will not return next sibling comments
 */
export function getNextElement(el: HTMLElement|null, strict: boolean = true): HTMLSelectionReturnType {
  if (!el) {
    return null;
  }
  return strict ? el.nextElementSibling : el.nextSibling;
}


/**
 * Retrieve previous sibling element
 * If strict is passed, it will not return previous sibling comments
 */
export function getPreviousElement(el: HTMLElement|null, strict: boolean = true): HTMLSelectionReturnType {
  if (!el) {
    return null;
  }
  return strict ? el.previousElementSibling : el.previousSibling;
}


/**
 * Retrieve first child of an element
 * If strict is passed, it will not return first sibling comments
 */
export function getFirstChild(el: HTMLElement|null, strict: boolean = true): HTMLSelectionReturnType {
  if (!el) {
    return null;
  }
  return strict ? el.firstElementChild : el.firstChild;
}


/**
 * Retrieve last child of an element
 * If strict is passed, it will not return first sibling comments
 */
export function getLastChild(el: HTMLElement|null, strict: boolean = true): HTMLSelectionReturnType {
  if (!el) {
    return null;
  }
  return strict ? el.lastElementChild : el.lastChild;
}
