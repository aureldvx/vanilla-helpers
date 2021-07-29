import { getFirstChild } from '@core/dom';
import { createElement } from '@core/dom/createElement';

describe('createElement', () => {
  it('it should create an empty element with only the tag name specified', () => {
    const newElement = createElement('span');
    expect(newElement).toBeInstanceOf(HTMLSpanElement);
    expect(newElement.textContent).toBe('');
  });

  it('it should create an empty element with the attributes specified', () => {
    const newElement = createElement('span', {
      id: 'test-id',
      'data-selector': 'test-selector'
    });
    expect(newElement).toBeInstanceOf(HTMLSpanElement);
    expect(newElement.getAttribute('id')).toBe('test-id');
    expect(newElement.getAttribute('data-selector')).toBe('test-selector');
    expect(newElement.textContent).toBe('');
  });

  it('it should create an element with the attributes and string children specified', () => {
    const newElement = createElement(
      'span',
      {},
      ['mon super contenu']
    );
    expect(newElement).toBeInstanceOf(HTMLSpanElement);
    expect(newElement.textContent).toBe('mon super contenu');
  });

  it('it should create an element with the attributes and HTML children specified', () => {
    const p = document.createElement('p').textContent = 'my paragraph';
    const newElement = createElement(
      'div',
      {},
      [p]
    );
    expect(newElement).toBeInstanceOf(HTMLDivElement);
    expect(newElement.children[0]).toBeInstanceOf(HTMLParagraphElement);
    expect(newElement.textContent).toBe('my paragraph');
  });
});
