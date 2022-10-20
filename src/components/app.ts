import { createSpan } from "./small/factory"

import "./app.css"

function createWidget() {
    const container = document.createElement("div")

    container.classList.add("container")

    const titleContainer = createSpan("hide__container-title", "Using Editor.js?")
    const descriptionContainer = createSpan("hide__container-description", "Take a 2-minutes survey🙏")

    container.appendChild(titleContainer)
    container.appendChild(descriptionContainer)

    document.body.appendChild(container)
}

createWidget()