/**
 * Helper for making Elements with classname and attributes
 *
 * @param  {string} tagName - new Element tag name
 * @param  {string[]|string} [classNames] - list or name of CSS classname(s)
 * @param  {object} [attributes] - any attributes
 * @returns {HTMLElement}
 */
function make(
  tagName: string,
  classNames: string | string[] = null,
  attributes: object = {}
): HTMLElement {
  const el = document.createElement(tagName);

  if (Array.isArray(classNames)) {
    el.classList.add(...classNames);
  } else if (classNames) {
    el.classList.add(classNames);
  }

  for (const attrName in attributes) {
    if (Object.prototype.hasOwnProperty.call(attributes, attrName)) {
      el[attrName] = attributes[attrName];
    }
  }

  return el;
}

/**
 * Helper for making Span Element with title
 *
 * @param  {string} title - title for span
 * @param  {string[]|string} [classNames] - list or name of CSS classname(s)
 * @returns {HTMLSpanElement}
 */
export const createSpan = (
  title: string,
  classNames: string | string[]
): HTMLSpanElement => {
  const spanContainer = make('span', classNames);
  const titleValue = document.createTextNode(title);

  spanContainer.appendChild(titleValue);

  return spanContainer;
};

/**
 * Helper for making Div Element
 *
 * @param  {string[]|string} [classNames] - list or name of CSS classname(s)
 * @returns {HTMLDivElement}
 */
export const createDiv = (classNames: string | string[]): HTMLDivElement => {
  return make('div', classNames) as HTMLDivElement;
};
