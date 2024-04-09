import { Page } from "@playwright/test";

export default class HelloWorkPageLocators {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  button_clickOnLogin = () =>
    this.page.locator("//li[@class='tw-max-w-[250px]']");
  button_clickLogin = () =>
    this.page.locator('//span[contains(text(), "Se connecter")]');
  input_email = () => this.page.locator("//input[@name='email2']");
  input_password = () => this.page.locator("//input[@name='password2']");
  button_rejectCookies = () =>
    this.page.locator('//button[contains(text(), "Continuer sans accepter")]');
}
