describe("Svelte Kit Test Suite", () => {
    beforeEach(() => {
        cy.injectAxe()
    });

    it("Visiting our app", () => {
      cy.visit("/");
      cy.get("span").contains("ng-starter-kit app is running!");
      cy.checkA11y();
    });
});
