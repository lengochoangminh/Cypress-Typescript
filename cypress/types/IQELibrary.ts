import { IUIUtil, IApplitoolsUtil, IA11yUtil } from "./index"

export interface IQELibrary {
    ui?: IUIUtil;
    a11y?: IA11yUtil;
    visual?: IApplitoolsUtil;
}