import { Page } from "@playwright/test";

import { Account } from "@common/data/interfaces/accounts";

import HelloWorkPageLocators from "@keywords/locators/helloWork/helloWork_pagesLocator";

export class HelloWorkPages {
  page: Page;
  helloWorkPageLocators: HelloWorkPageLocators;
  constructor(page: Page) {
    this.page = page;
    this.helloWorkPageLocators = new HelloWorkPageLocators(page);
  }

  async refuseCookies(): Promise<void> {
    await this.helloWorkPageLocators.button_rejectCookies().click();
  }
  async goToHelloWork(): Promise<void> {
    await this.page.goto("https://www.hellowork.com/fr-fr/");
  }

  async goToLogin(): Promise<void> {
    await this.helloWorkPageLocators
      .button_clickOnLogin()
      .waitFor({ state: "visible" });
    await this.helloWorkPageLocators.button_clickOnLogin().click();
    await this.helloWorkPageLocators.button_clickLogin().click();
  }
  async completeFormConnect(account: Account): Promise<void> {
    await this.helloWorkPageLocators
      .input_email()
      .waitFor({ state: "visible" });
    await this.helloWorkPageLocators.input_email().fill(account.email);
    await this.helloWorkPageLocators.input_password().fill(account.password);
  }

  async searchJob(): Promise<void> {}
}
