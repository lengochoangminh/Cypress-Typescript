export type DigitalDataEvent = {
    eventType: string,
    data: { [key: string]: string | object },
};

export type Params = {
    [key: string]: any;
};

export interface IAnalyticsUtil {
    checkEvent: (actObject: DigitalDataEvent, expObject: DigitalDataEvent, isEqual?: boolean) => void;
    updateExpResult: (expObject: DigitalDataEvent, Params?: object) => DigitalDataEvent;
}