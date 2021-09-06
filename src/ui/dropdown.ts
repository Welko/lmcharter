import uiPanel from "./panel.js";
import uiElement from "./element.js";

export class uiDropdown extends uiPanel {

    private readonly contentPanel: uiPanel;

    public constructor(text: string) {
        super("Dropdown");
        this._dom.textContent = text;

        super.add(this.contentPanel = new uiPanel("DropdownContent"));
        this.contentPanel.setVisible(false);

        const scope = this;
        this.addCallback("mouseenter", () => scope.setContentVisibile(true));
        this.addCallback("mouseleave", () => scope.setContentVisibile(false));
    }

    public add(element: uiElement) {
        this.contentPanel.add(element);
    }

    private setContentVisibile(contentVisible: boolean) {
        this.contentPanel.setVisible(contentVisible);
    }
}

export default uiDropdown;