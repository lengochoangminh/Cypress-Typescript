import { IQELibrary } from "../types";
import { A11yUtil } from "./A11yUtil";
import { UIUtil } from "./UIUtil";

export class QELibrary implements IQELibrary {
    constructor() {
        return {
            ui: new UIUtil(),
            a11y: new A11yUtil(),
        };
    }
}