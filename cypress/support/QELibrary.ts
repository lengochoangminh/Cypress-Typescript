import { IQELibrary } from "../types";
import { UIUtil } from "./UIUtil";

export class QELibrary implements IQELibrary {
    constructor() {
        return {
            ui: new UIUtil(),
        };
    }
}