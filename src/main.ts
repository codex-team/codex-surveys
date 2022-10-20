import "./style.css";

;(function (document) {
    const iframe = document.createElement("iframe")

    const frameAttrs = [
        ["id", "feedback"],
        ["width", "100"],
        ["height", "40"],
        ["frameborder", "no"],
        ["style", ""]
    ]

    frameAttrs.forEach((arg) => {
        iframe.setAttribute(arg[0], arg[1])
    })

    iframe.onload = () => {
        const chatScript = document.createElement("script")

        chatScript.src = "./components/app.ts"

        iframe?.contentDocument?.body.appendChild(chatScript)
    }

    document.body.append(iframe)
})(document)
