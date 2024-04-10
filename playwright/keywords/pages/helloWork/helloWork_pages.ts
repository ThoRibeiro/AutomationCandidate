import { Page } from "@playwright/test";

import { Account } from "@common/data/interfaces/accounts";

import HelloWorkPageLocators from "@keywords/locators/helloWork/helloWork_pagesLocator";
import { TableGoogleSheet } from "@common/data/interfaces/googleSheet";

export class HelloWorkPages {
  page: Page;
  helloWorkPageLocators: HelloWorkPageLocators;

  constructor(page: Page) {
    this.page = page;
    this.helloWorkPageLocators = new HelloWorkPageLocators(page);
  }

  async goToHelloWork(): Promise<void> {
    await this.page.goto("https://www.hellowork.com/fr-fr/");
  }

  async refuseCookies(): Promise<void> {
    await this.helloWorkPageLocators.button_rejectCookies().click();
  }

  async goToLogin(): Promise<void> {
    await this.page.waitForTimeout(4000);
    if (await this.helloWorkPageLocators.popin_loginInGoogle().isVisible()) {
      await this.helloWorkPageLocators.button_closePopinGoogle().click();
    }
    await this.helloWorkPageLocators.button_clickOnLogin().click();
    await this.helloWorkPageLocators.button_clickLogin().click();
  }
  async completeFormConnect(account: Account): Promise<void> {
    await this.helloWorkPageLocators
      .input_email()
      .waitFor({ state: "visible" });
    await this.helloWorkPageLocators.input_email().fill(account.email);
    await this.helloWorkPageLocators.input_password().fill(account.password);
    await this.helloWorkPageLocators.button_submitForm().click();
  }

  async searchJob(): Promise<void> {
    await this.helloWorkPageLocators
      .input_searchJob()
      .fill("Administrateur réseaux et systèmes");
    await this.helloWorkPageLocators.input_searchTown().fill("Lille 59000");
    await this.helloWorkPageLocators.button_submitSearch().click();
  }

  async filterSelect(): Promise<void> {
    await this.helloWorkPageLocators.list_selectAlternance().click();
    await this.helloWorkPageLocators.list_clickInCompanyType().click();
    await this.helloWorkPageLocators.list_clickFilterCompany().click();
  }

  async selectOffer(): Promise<Array<TableGoogleSheet>> {
    let tab: Array<TableGoogleSheet> = [];
    let countOfOffers: number;
    let getOfferTitle: string;
    let getCompany: string;
    let i = 0;

    countOfOffers = await this.helloWorkPageLocators.span_countOffer().count();

    do {
      await this.helloWorkPageLocators
        .span_clickOnOffer(i)
        .waitFor({ state: "visible" });
      await this.helloWorkPageLocators.span_clickOnOffer(i).click();
      if (
        await this.helloWorkPageLocators
          .span_candidateInRecruiterSite()
          .isVisible()
      ) {
        await this.page.goBack();
      } else {
        // await this.helloWorkPageLocators.link_clickOnCandidate().click();
        getOfferTitle = await this.helloWorkPageLocators
          .span_getOfferTitle()
          .innerText();
        getCompany = await this.helloWorkPageLocators
          .span_getCompany()
          .innerText();
        console.log(`${getOfferTitle}, ${getCompany}`);
        // tab.push({index: i, date: Date.now(), offerTitle: getOfferTitle, company: getCompany});
      }
      // part google sheet call

      i++;
    } while (i != countOfOffers);

    return tab;
  }
}
