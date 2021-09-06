import uiElement from "./element.js";

export class uiPanel extends uiElement {
    public constructor(_class?: string) {
        super(document.createElement("div"), _class ? _class : "Panel");
    }

    public add(element: uiElement) {
        this._dom.appendChild(element.dom);
    }
}

export default uiPanel;