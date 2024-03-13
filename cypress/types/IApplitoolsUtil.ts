export type MatchLevel = 'None' | 'Layout' | 'Content' | 'IgnoreColors' | 'Strict' | 'Exact';

export interface IApplitoolsUtil {
    open: () => void;
    close: () => void;
    check: (checkpointName: string, matchLevel?: MatchLevel) => void;
    checkRegion: (checkpointName: string, selector?: string, selectorType?: 'css' | 'xpath', matchLevel?: MatchLevel) => void;
}