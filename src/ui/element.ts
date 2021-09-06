export class uiElement {
    protected readonly _dom: HTMLElement;

    public constructor(dom: HTMLElement, _class?: string) {
        this._dom = dom;
        if (_class) this.addClass(_class);
    }

    public get dom(): HTMLElement {
        return this._dom;
    }

    public addClass(c: string): uiElement {
        this.dom.classList.add(c);
        return this;
    }

    public addCallback(types: string | string[], callback: (type: string) => void): uiElement {
        if (!Array.isArray(types)) {
            types = [types];
        }
        for (let type of types) {
            this.dom.addEventListener(type, () => callback(type));
        }
        return this;
    }

    public setVisible(visible: boolean) {
        const list = this.dom.classList;
        if (!visible) {
            if (!list.contains("invisible")) {
                list.add("invisible");
            }
        } else {
            list.remove("invisible");
        }
    }
}

export default uiElement;