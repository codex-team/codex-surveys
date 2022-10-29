import { addCssToElement } from "./css"

export const createSpan = (className: string, title: string, styles: Partial<CSSStyleDeclaration>): Element => {
  const titleContainer = document.createElement("span");

  titleContainer.classList.add(className);

  const titleValue = document.createTextNode(title);

  addCssToElement(titleContainer, styles)

  titleContainer.appendChild(titleValue);

  return titleContainer;
};
