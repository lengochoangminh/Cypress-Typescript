/// <reference types="cypress" />

import { IUIUtil } from "../types"

const kin = {
    parent: 0,
    siblingOne: 1,
    siblingTwo: 2,
    siblingThree: 3,
};

export class UIUtil implements IUIUtil {

    public clickLink(label: string): void {
        cy.get("a").contains(label).click({ force: true });
    }

    public clickButton(label: string): void {
        cy.get("button").contains(label).scrollIntoView().click({ force: true });
    }

    /**
     * Click the first label match in UI that match the lable
     * @param label
     */
    public clickLabel(label: string): void {
        cy.get("label").contains(label).click({ force: true });
    }

    public checkRadio(label: string): void {
        cy.get("label")
            .contains(label)
            .parent()
            .within(() => {
                cy.get(`input[type='radio']`).check({ force: true });
            });
    }

    public unCheckRadio(label: string): void {
        cy.get("label")
            .contains(label)
            .parent()
            .within(() => {
                cy.get(`input[type='radio']`).uncheck({ force: true });
            });
    }

    public checkCheckbox(label: string): void {
        cy.get("label")
            .contains(label)
            .parent()
            .within(() => {
                cy.get(`input[type='checkbox']`).check({ force: true });
            });
    }

    public unCheckCheckbox(label: string): void {
        cy.get("label")
            .contains(label)
            .parent()
            .within(() => {
                cy.get(`input[type='checkbox']`).uncheck({ force: true });
            });
    }

    public inputText(label: string, text: string, family?: number): void {
        if (family === undefined) family = 0;
        switch (family) {
            case kin.parent:
                cy.get("label")
                    .contains(label)
                    .parent()
                    .within(() => {
                        cy.get(`input[type='text']`).type(text, { force: true })
                    });
                break;
            case kin.siblingOne:
                cy.get("label")
                    .contains(label)
                    .parent()
                    .next()
                    .within(() => {
                        cy.get(`input[type='text']`).type(text, { force: true })
                    });
                break;
            case kin.siblingTwo:
                cy.get("label")
                    .contains(label)
                    .parent()
                    .next()
                    .next()
                    .within(() => {
                        cy.get(`input[type='text']`).type(text, { force: true })
                    });
                break;
            case kin.siblingThree:
                break;
        }
    }

    public inputTextDynamic(label: string, obj: string, text: string): void {
        cy.get("label")
            .contains(label)
            .parent()
            .within(() => {
                cy.get(`input[type='` + obj + `']`).type(text, { force: true })
            });
    }

    public inputTextArea(label: string, text: string): void {
        cy.get("label")
            .contains(label)
            .parent()
            .next()
            .within(() => {
                cy.get('textarea').type(text, { force: true })
            });
    }

    public inputDate(label: string, text: string): void {
        cy.get("label")
            .contains(label)
            .parent()
            .next()
            .next()
            .within(() => {
                cy.get(`input[type='text']`)
                    .scrollIntoView()
                    .clear({ force: true })
                    .type(text, { force: true })
            });
    }

    public clickInputButton(label: string): void {
        cy.get(`input[value='` + label + `']`).click({ force: true })

    }

    public selectByValue(label: string, option: string, family?: number): void {
        if (family === undefined) family = 0;
        switch (family) {
            case kin.parent:
                cy.get("label")
                    .contains(label)
                    .parent()
                    .within(() => {
                        cy.get(`select`).select(option, { force: true });
                    });
                break;
            case kin.siblingOne:
                cy.get("label")
                    .contains(label)
                    .parent()
                    .next()
                    .within(() => {
                        cy.get(`select`).select(option, { force: true });
                    });
                break;
            case kin.siblingTwo:
                break;
            case kin.siblingThree:
                break;
        }
    }

    public clickInputBox(label: string): void {
        cy.get("label")
            .contains(label)
            .scrollIntoView()
            .parent()
            .within(() => {
                cy.get(`input[type='text']`).click({ force: true })
            });
    }

    public clickListItem(value: string): void {
        cy.get(`li[role='option']`)
            .contains(value)
            .click({ force: true })
    }

    public verifyListItem(value: string): void {
        cy.get(`li[role='option']`)
            .contains(value)
            .should("be.visible");
    }

    public verifyHeaderExists(text: string): void {
        cy.contains("h1", text).scrollIntoView().should("be.visible");
    }

    public verifySubHeaderExists(text: string): void {
        cy.contains("h2", text).scrollIntoView().should("be.visible");
    }

    public verifyParagraphTextExists(text: string): void {
        cy.get('p').contains(text).scrollIntoView().should("be.visible");
    }

    public verifyParagraphTextNotExists(text: string): void {
        cy.get('p').contains(text).should("not.exist");
    }

    public verifyCaptionStyleTextExists(text: string): void {
        cy.get('span').contains(text).scrollIntoView().should("be.visible");
    }

    public verifyCaptionStyleTextNotExists(text: string): void {
        cy.get('span').contains(text).should("not.exist");
    }

    public verifyNotificationTextExists(text: string): void {
        cy.contains(`div[data-component-id = 'Notification']`, text)
            .scrollIntoView()
            .should("be.visible");
    }

    public verifyNotificationNotExists(text: string): void {
        cy.contains(`div[data-component-id = 'Notification']`, text)
            .should("not.exist");
    }

    public verifyInfoNotification(text: string): void {
        cy.contains(`div[data-component-id = 'Notification']div[data-type='info']`, text)
            .scrollIntoView()
            .should("be.visible");
    }

    public verifyErrorNotification(text: string): void {
        cy.contains(`div[data-component-id = 'Notification']div[data-type='error']`, text)
            .scrollIntoView()
            .should("be.visible");
    }

    public verifyInputBoxExists(label: string): void {
        cy.get("*")
            .contains(label)
            .scrollIntoView()
            .parent()
            .within(() => {
                cy.get(`input[type = 'text']`).should("be.visible");
            })
    }

    public verifyInputBoxNotExists(label: string): void {
        cy.get("label").contains(label).should("not.exist");
    }

    public verifyDropdownExists(label: string): void {
        cy.get("label")
            .contains(label)
            .parent()
            .within(() => {
                cy.get('select').scrollIntoView().should('be.visible');
            });
    }

    public clickRadioOption(label: string): void {
        cy.get(`input[value='` + label + `'][type='radio']`).click({ force: true });
    }

    public clickDropdownAndSelectOption(text: string, option: string): void {
        cy.get(`label`)
            .contains(text)
            .parent(`div[data-component-id='Select']`)
            .within(() => {
                cy.get(`select`).select(option, { force: true });
            })
    }

    public verifyTableHeader(headerList: string): void {
        cy.get(`table>thread>tr>th`).each(($el, index) => {
            cy.wrap($el).contains(headerList[index])
        });
    }

    public verifyInputBoxText(label: string, text: string): void {
        cy.get(`label`)
            .contains(label)
            .parent()
            .within(() => {
                cy.get(`input[type='text']`).should("contain.value", text);
            });
    }

    public clickBreadCrumLink(text: string): void {
        cy.get(`a[data-component-id='Link']`).contains(text).click({ force: true });
    }

    public verifyLinkExists(text: string): void {
        cy.get(`a[data-component-id='Link']`)
            .contains(text)
            .scrollIntoView()
            .should("be.visible");
    }

    public verifyLeavePagePopupNotPresent(): void {
        cy.get(`#leaveOrderBagsModal`).should("not.exist");
    }

    public verifyThirdHeading(text: string): void {
        cy.get(`h3`).contains(text).should("be.visible");
    }

    public verifyFilterComponents(text: string): void {
        cy.get(`[data-component-id= "FiedWrapper"]`)
            .contains(text)
            .should("be.visible");
    }

    public verifyFieldInLineError(label: string, error: any): void {
        cy.get("label")
            .contains(label)
            .parent()
            .within(() => {
                cy.get(`div[class='invalid-feedback']`).should("include.text", error);
            });
    }

    public verifyFieldInLineMessage(label: string, error: any): void {
        cy.get("label")
            .contains(label)
            .parent()
            .within(() => {
                cy.get(`p[id*='-description']`).should("have.text", error);
            });
    }

    public verifyPageErrors(...errors: any): void {
        cy.get(`div[data-component-id='FormMessage'] div p span`).should("have.text", "errorThere are errors on this page");

        cy.get(`div[data-component-id='FormMessage'] div div div`).should("have.text", "Check all erros below and correct them before continuing");

        for (let i = 0; i < errors.length; i++) {
            cy.get(`ul[data-component-id='FormMessage']`)
                .children()
                .eq(i)
                .find(`a[data-component-id= 'Link']`)
                .should("have.text", errors[i]);
        }
    }

    public verifyDropdownValue(label: string, text: string): void {
        cy.get("label")
            .contains(label)
            .parent()
            .within(() => {
                cy.get(`select`).invoke("val").should("eq", text);
            });
    }

    public verifyDropdownValueTypeButton(label: string, text: string): void {
        cy.get("label")
            .contains(label)
            .parent()
            .within(() => {
                cy.get(`div[data-component-id= 'Dropdown'] button[type=button] div div span`)
                    .should("have.text", text);
            });
    }

    public clearInputField(label: string): void {
        cy.get("label")
            .contains(label)
            .parent()
            .within(() => {
                cy.get(`input[type='text']`).scrollIntoView().clear({ force: true });
            });
    }

    public verifyLabelText(labelName: string): void {
        cy.get(`label`)
            .contains(labelName)
            .scrollIntoView()
            .should("be.visible");
    }

    public verifySuccessNotification(): void {
        cy.get(`div[data-component-id='Notification']div[data-component-id='success']`)
            .scrollIntoView()
            .should("be.visible");
    }
}