/**
 * Helper for making Elements with classname and attributes
 *
 * @param  {string} tagName - new Element tag name
 * @param  {string[]|string} [classNames] - list or name of CSS classname(s)
 * @param  {object} [attributes] - any attributes
 * @returns {HTMLElement}
 */
export function make(
  tagName: string,
  classNames: string | string[] = '',
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
