export const createSpan = (className: string, title: string): Element => {
    const titleContainer = document.createElement("span")
    
    titleContainer.classList.add(className)

    const titleValue = document.createTextNode(title)

    titleContainer.appendChild(titleValue)

    return titleContainer
}

