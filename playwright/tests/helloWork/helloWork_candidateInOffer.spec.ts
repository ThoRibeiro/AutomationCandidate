import { test } from "@playwright/test";
import { HelloWorkPages } from "@keywords/pages/helloWork/helloWork_pages";
import {accountsInHelloWork} from "@common/data/accounts";
import {config} from "dotenv"

config()
test.describe
  .serial("Candidate in hello work and report in google sheet spreadsheet", () => {
  test("Candidate in offer", async ({ page }) => {
    const helloWorkPages = new HelloWorkPages(page);

    await helloWorkPages.goToHelloWork();
    await helloWorkPages.refuseCookies();
    await helloWorkPages.goToLogin();
    await helloWorkPages.completeFormConnect(accountsInHelloWork);
  });
});
