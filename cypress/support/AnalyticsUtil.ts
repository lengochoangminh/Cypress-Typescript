import { IAnalyticsUtil, DigitalDataEvent, Params } from "../types"

export class AnalyticsUtil implements IAnalyticsUtil {

    /**
     * custom command to replace object's placeholder with given paremeters
     * @param expObject is a DigitalDataEvent object. Some properties are defined with related placeholder
     * @param expParams is a Params object
     * @returns expResult is a DigitalDataEvent object with replaced values
     */
    public updateExpResult(expObject: DigitalDataEvent, expParams: Params): DigitalDataEvent {
        const expResult: DigitalDataEvent = Object.assign({}, expObject);
        //update expObject if valid exparams
        if (expParams) {
            Object.keys(expParams).forEach((k: string) => {
                if (Object.keys(expObject.data).includes(k)) expResult.data[k] = expParams[k];
            });
        }
        return expResult;
    }

    /**
     * custom command to compare the actual event with the expected event
     * @param {object} actObject is a DigitalDataEvent object
     * @param (object} expObject is a DigitalDataEvent object 
     * @param (boolean} isEqual is optional. If false, do to.deep.include assertion.
     * By default, do to. deep. equal assertion.
     */
    public checkEvent(actObject: DigitalDataEvent, expObject: DigitalDataEvent, isEqual?: boolean) {
        //remove unnecessary property 
        delete actObject.data.appMetaData;

        // do to.deep.include assertion if isEqual is false, else use to.deep.equal assertion
        if (isEqual === false) {
            expect(actObject.eventType).equal(expObject.eventType);
            expect(actObject.data).to.deep.include(expObject.data);
        } else {
            expect(actObject).to.deep.equal(expObject);
        }
    }

}