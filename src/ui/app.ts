import uiElement from "./element.js";
import uiPanel from "./panel.js";
import uiDropdown from "./dropdown.js";
import uiButton from "./button.js";

export class uiApp extends uiElement {

    protected readonly _containerDomElement: HTMLElement;

    public constructor() {
        super(document.createElement("div"), "App");

        const container = new uiPanel("AppContainer");
        this._containerDomElement = container.dom;

        const dom = this.dom;
        const add = function (e: uiElement) {
            dom.appendChild(e.dom);
        }

        add(uiApp.initTopBar("AppTopBar"));
        add(container);
    }

    public get containerDomElement(): HTMLElement {
        return this._containerDomElement;
    }

    private static initTopBar(_class: string): uiPanel {
        const topBarPanel = new uiPanel(_class);

        const dropdownFile = new uiDropdown("File");
        dropdownFile.add(new uiButton("Test", () => {
            console.log("Test successful :)");
        }))

        topBarPanel.add(dropdownFile);

        return topBarPanel;
    }
}

export default uiApp;