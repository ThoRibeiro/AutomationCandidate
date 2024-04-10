import { test } from "@playwright/test";
import { HelloWorkPages } from "@keywords/pages/helloWork/helloWork_pages";
import { accountsInHelloWork } from "@common/data/accounts";
import { config } from "dotenv";
import { writeToGoogleSheet } from "@keywords/pages/googleSheet/googleSheet_Page";

// Appel à la méthode config() de dotenv pour charger les variables d'environnement
config();

// Déclaration des tests
test.describe
  .serial("Candidate in hello work and report in google sheet spreadsheet", () => {
  test("Candidate in offer", async ({ page }) => {
    const helloWorkPages = new HelloWorkPages(page);

    await helloWorkPages.goToHelloWork();
    await helloWorkPages.refuseCookies();
    await helloWorkPages.goToLogin();
    await helloWorkPages.completeFormConnect(accountsInHelloWork);
    await helloWorkPages.searchJob();
    await helloWorkPages.filterSelect();
    await helloWorkPages.selectOffer();
  });
});
