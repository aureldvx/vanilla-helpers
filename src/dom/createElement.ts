import { HTMLAttribute, HTMLChild } from '@typing/dom/HTMLElements';

/** Create a new HTML element */
export function createElement(
  tagName: string | Function,
  attributes: HTMLAttribute = {},
  children?: Array<HTMLChild>
) {
  if (typeof tagName === 'function') {
    return tagName(attributes);
  }

  const svgTags = ['svg', 'use', 'path', 'textPath', 'circle', 'g', 'symbol'];
  // On construit l'élément
  const e = !svgTags.includes(tagName)
    ? document.createElement(tagName)
    : document.createElementNS('http://www.w3.org/2000/svg', tagName);

  // On lui associe les bons attributs
  for (const key in attributes) {
    if (attributes.hasOwnProperty(key)) {
      e.setAttribute(key, attributes[key]);
    }
  }

  if (children) {
    // On aplatit les enfants
    const flatChildren = children.reduce((acc: Array<HTMLChild>, child: HTMLChild) => Array.isArray(child) ? [...acc, ...child] : [...acc, child], []);

    // On ajoute les enfants à l'élément
    for (const child of flatChildren) {
      if (typeof child === 'string' || typeof child === 'number') {
        e.appendChild(document.createTextNode(child.toString()));
      } else if (child instanceof HTMLElement || child instanceof SVGElement) {
        e.appendChild(child);
      } else {
        console.error("Impossible d'ajouter l'élément", child, typeof child);
      }
    }
  }

  return e;
}
