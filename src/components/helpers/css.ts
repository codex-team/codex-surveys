export const addCssToElement = (element: HTMLElement, style: Partial<CSSStyleDeclaration>): void => {
  for (const property in style)
    // @ts-ignore:next-line
    element.style[property] = style[property]
}