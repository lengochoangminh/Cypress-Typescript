import { IApplitoolsUtil, MatchLevel } from "../types/IApplitoolsUtil";
import * as Cypress from "@applitools/eyes-cypress";

declare const global: { enableApplitools: boolean; eyesOpen: string; appName: string; testName: string };

export class ApplitoolsUtil implements IApplitoolsUtil {

    public open(): void {
        global.eyesOpen = 'false';
        if (global.enableApplitools === true) {
            try {
                cy.eyesOpen({
                    waitBeforeCapture: 1000,
                    appName: 'Research Bank',
                    testName: `${global.testName}`
                });
                global.eyesOpen = 'true';
            } catch (e) {
                throw new Error(`Applitools Util eyesOpen Failed: ${e.toString()}`)
            }
        }
    }

    public check(checkpointName: string, matchLevel?: MatchLevel): void {
        if (global.enableApplitools === true) {
            if (global.eyesOpen !== 'true') this.open();
            try {
                cy.eyesCheckWindow({
                    matchLevel: (matchLevel || 'Layout'),
                    tag: checkpointName,
                    target: "window",
                    fully: true,
                    sendDom: true
                });

            } catch (e) {
                throw new Error(`Applitools Util check for window Failed: ${e.toString()}`)
            }
        }
    }

    public checkRegion(checkpointName: string, selector?: string, selectorType?: "css" | "xpath", matchLevel?: MatchLevel): void {
        if (global.enableApplitools === true) {
            if (global.eyesOpen !== 'true') this.open();
            try {
                cy.eyesCheckWindow({
                    matchLevel: (matchLevel || 'Layout'),
                    tag: checkpointName,
                    target: "region",
                    selector: { type: selectorType, selector: selector },
                    fully: true,
                    sendDom: true
                });
            } catch (e) {
                throw new Error(`Applitools Util check for region Failed: ${e.toString()}`)
            }
        }
    }

    public close(): void {
        if (global.eyesOpen === 'true') {
            try {
                cy.eyesClose();
            } catch (e) {
                throw new Error(`Applitools Util close eyes Failed: ${e.toString()}`)
            }
        }
    }
}