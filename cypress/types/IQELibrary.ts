import { IUIUtil, IApplitoolsUtil, IA11yUtil, IAnalyticsUtil } from "./index"

export interface IQELibrary {
    ui?: IUIUtil;
    a11y?: IA11yUtil;
    visual?: IApplitoolsUtil;
    analytics?: IAnalyticsUtil;
}