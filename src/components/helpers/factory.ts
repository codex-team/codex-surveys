import { addCssToElement } from "./css"

export const createSpan = (className: string, title: string, styleName: string): Element => {
  const titleContainer = document.createElement("span")

  titleContainer.classList.add(className)

  const titleValue = document.createTextNode(title)

  addCssToElement(titleContainer, styleName)

  titleContainer.appendChild(titleValue)

  return titleContainer
};
