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
  popin_loginInGoogle = () => this.page.locator("//div[@class='tw-p-4']");
  button_closePopinGoogle = () =>
    this.page.locator("//button[@aria-label='Fermer la fenêtre']");
  button_submitForm = () =>
    this.page.locator("(//button[@class='profile-button'])[2]");
  input_searchJob = () => this.page.locator("(//input[@type='text'])[2]");
  input_searchTown = () => this.page.locator("(//input[@type='text'])[5]");
  button_submitSearch = () =>
    this.page.locator("(//button[@type='submit'])[1]");
  list_selectAlternance = () =>
    this.page.locator("//li[@data-value='Alternance']");
  list_clickInCompanyType = () =>
    this.page.locator('//div[contains(text(), "Type d\'entreprise")]');
  list_clickFilterCompany = () =>
    this.page.locator("//li[@data-value='Entreprises']");
  span_countOffer = () => this.page.locator("(//span[@data-cy='seeOffer'])");
  span_clickOnOffer = (number: number) =>
    this.page.locator(`(//span[@data-cy='seeOffer'])[${number}]`);
  span_candidateInRecruiterSite = () =>
    this.page.locator(
      '(//span[contains(text(), "Postuler sur le site du recruteur")])[1]',
    );
  link_clickOnCandidate = () =>
    this.page.locator('//div[contains(text(), "Postuler")]');
  span_getOfferTitle = () => this.page.locator("//span[@data-cy='jobTitle']");
  span_getCompany = () =>
    this.page.locator("//h1[@class='tw-inline']//span[2]");
}
