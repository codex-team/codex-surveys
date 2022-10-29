import { createSpan } from './helpers/factory'
import * as styles from "./styles/collapsed"
import { addCssToElement } from "./helpers/css"

function createWidget (): void {
  const container = document.createElement('div')

  container.classList.add('container')

  addCssToElement(container, styles.container)
  const titleContainer = createSpan('hide__container-title', 'Using Editor.js?', styles.title)
  const descriptionContainer = createSpan('hide__container-description', 'Take a 2-minutes survey🙏', styles.description)

  container.appendChild(titleContainer)
  container.appendChild(descriptionContainer)

  document.body.appendChild(container)
}

createWidget()
