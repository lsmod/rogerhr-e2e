const { I } = inject();

module.exports = {
  waitForPage: () => {
    I.waitForElement("#pokemon-list", 5);
  },
};
