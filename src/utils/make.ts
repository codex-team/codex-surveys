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
  attributes: Record<string, string | number | boolean> = {}
): HTMLElement {
  const el = document.createElement(tagName);

  if (Array.isArray(classNames)) {
    el.classList.add(...classNames);
  } else if (classNames) {
    el.classList.add(classNames);
  }

  Object.keys(attributes).forEach((prop) => {
    const attrName = prop as keyof HTMLElement;

    // @ts-expect-error read-only property assignment is possible, ts disalows it
    el[attrName] = attributes[attrName];
  });

  return el;
}
