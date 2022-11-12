import { createSpan } from './helpers/factory'
import { addCssToElement } from './helpers/css'
import classes from './styles/collapsed.module.css'

function createWidget (): void {
  const container = document.createElement('div')

  addCssToElement(container, classes.container)

  const titleContainer = createSpan(
    'hide__container-title',
    'Using Editor.js?',
    classes.title
  )
  const descriptionContainer = createSpan(
    'hide__container-description',
    'Take a 2-minutes survey🙏',
    classes.description
  )

  container.appendChild(titleContainer)
  container.appendChild(descriptionContainer)

  document.body.appendChild(container)
}

createWidget()
