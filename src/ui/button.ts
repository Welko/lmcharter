import uiElement from "./element.js";

export class uiButton extends uiElement {
    public constructor(text: string, onClickCallback?: () => void) {
        super(document.createElement("button"));

        this.dom.textContent = text;

        if (onClickCallback) this.addCallback("click", onClickCallback);
    }
}

export default uiButton;