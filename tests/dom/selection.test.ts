import { getFirstChild, getLastChild, getNextElement, getPreviousElement, select, selectAll } from '@core/dom/selection';

describe('DOM selection', () => {
  document.body.innerHTML = `
    <ul class="items">
      <!-- Useless comment 1 -->
      <li class="list-item1">list item 1</li>
      <!-- Useless comment 2 -->
      <li class="list-item2">list item 2</li>
      <li class="list-item3">list item 3</li>
      <li class="list-item4">list item 4</li>
      <li class="list-item5">list item 5</li>
      <!-- Useless comment 3 -->
    </ul>
  `;

  it('it should find an element with the "list-item" class in the DOM tree', () => {
    const selection = select('.list-item1');
    expect(selection).toBeInstanceOf(HTMLLIElement);
    expect(selection?.textContent).toBe('list item 1');
  });

  it('it should find an element with the "list-item" in a given element', () => {
    const selection = select('.list-item2', select('.items'));
    expect(selection).toBeInstanceOf(HTMLLIElement);
    expect(selection?.textContent).toBe('list item 2');
  });

  it('it should find all elements with the <li> tag in the DOM tree', () => {
    const selection = selectAll('li');
    expect(selection).toBeInstanceOf(NodeList);
    expect(selection).toHaveLength(5);
  });

  it('it should find all elements with the <li> tag in a given element', () => {
    const selection = selectAll('li', select('.items'));
    expect(selection).toBeInstanceOf(NodeList);
    expect(selection).toHaveLength(5);
  });

  it('it should find the next node of a given element, comments NOT included', () => {
    const selection = getNextElement(document.querySelector('.list-item2'));
    expect(selection).toBeInstanceOf(HTMLLIElement);
    expect(selection?.textContent).toBe('list item 3');
  });

  it('it should find the next node of a given element, comments included', () => {
    const selection = getNextElement(document.querySelector('.list-item1'), false);
    expect(selection).toBeInstanceOf(Text);
  });

  it('it should find the previous node of a given element, comments NOT included', () => {
    const selection = getPreviousElement(document.querySelector('.list-item4'));
    expect(selection).toBeInstanceOf(HTMLLIElement);
    expect(selection?.textContent).toBe('list item 3');
  });

  it('it should find the previous node of a given element, comments included', () => {
    const selection = getPreviousElement(document.querySelector('.list-item5'), false);
    expect(selection).toBeInstanceOf(Text);
  });

  it('it should find the first child of a given element, comments NOT included', () => {
    const selection = getFirstChild(document.querySelector('.items'));
    expect(selection).toBeInstanceOf(HTMLLIElement);
    expect(selection?.textContent).toBe('list item 1');
  });

  it('it should find the first child of a given element, comments included', () => {
    const selection = getFirstChild(document.querySelector('.items'), false);
    expect(selection).toBeInstanceOf(Text);
  });

  it('it should find the last child of a given element, comments NOT included', () => {
    const selection = getLastChild(document.querySelector('.items'));
    expect(selection).toBeInstanceOf(HTMLLIElement);
    expect(selection?.textContent).toBe('list item 5');
  });

  it('it should find the last child of a given element, comments included', () => {
    const selection = getLastChild(document.querySelector('.items'), false);
    expect(selection).toBeInstanceOf(Text);
  });
});
