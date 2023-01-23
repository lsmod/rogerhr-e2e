const { I } = inject();

module.exports = {
  login: () => {
    I.fillField("Email", "toto@hero.com");
    I.fillField("password", "toto");
    I.click("#login-button");
  },

  seeAllfield: () => {
    I.see("LOGIN");
    I.see("password");
    I.see("Email");
  },
};
