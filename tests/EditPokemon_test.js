Feature("Edit Pokemon");

Scenario(
  "I login with password and email",
  ({ I, loginPage, pokemonListPage }) => {
    I.amOnPage("http://localhost:3000");

    loginPage.seeAllfield();
    loginPage.login();

    pokemonListPage.waitForPage();
  }
);
