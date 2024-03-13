/// <reference types="cypress" />

import * as axe from "cypress-axe";
import type { IA11yUtil } from "../types";
import { Result } from "axe-core";

declare const global: { enableA11y: boolean; };

const nabStandardsConfig = './a11y.config';

export class A11yUtil implements IA11yUtil {

    /**
     * Initialise the AXE library with the assumption that a brower is leaded and on the URL
     */
    public initAxe(url?: string): void {
        if (global.enableA11y === true) return;
        try {
            // visit URL should occur prior the injectAxe()
            if (url !== undefined) {
                console.log('Setting browser to url: ', url);
                cy.visit(url);
            }
            axe.injectAxe();                            // Make sure axe is available on the page
            axe.configureAxe(nabStandardsConfig);       // Accessibility approved rules
        } catch (err) {
            throw new Error('initAxe error: ' + err);
        }
    }

    public check(knownBug?: boolean | string): void {
        if (global.enableA11y === true) return;
        cy.wait(300);       // Allow a delay before running the test

        if (knownBug === undefined) {
            cy.checkA11y(null, null, terminalLog);      // Fail for a11y violations
        } else {
            if (typeof knownBug === 'string') {
                cy.log(`A11Y FAILED | Known defect: Rally defect: <b>${knownBug}</b>`);
            } else {
                cy.log(`A11Y FAILED | Known bug but not captured in Rally yet`);
            }
            cy.checkA11y(null, null, terminalLog, true);  // Log violations even if issue is known
        }
    }
}

function terminalLog(violations: Result[]): void {
    cy.task(
        'log',
        `${violations.length} accessibility violation${violations.length === 1 ? '' : 's'
        } ${violations.length === 1 ? 'was' : 'were'} detected`
    );

    const violationData = violations.map(
        ({ id, impact, description, helpUrl, nodes }) => ({
            id, impact, nodes: nodes.length, description, helpUrl
        })
    );
    cy.task('table', violationData);
}