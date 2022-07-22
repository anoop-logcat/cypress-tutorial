describe("Cypress Tutorials", () => {
  before(() => {
    cy.log("A handler that run before all test cases");
  });

  beforeEach(() => {
    cy.log("A handler that run before every test cases");
  });

  it("Visit a URL", () => {
    cy.visit("https://anoop-developer.web.app/");
  });

  it("Type and submit", () => {
    cy.visit("https://google.com");
    cy.get(".gLFyf").clear().type("Cypress Tutorials{enter}");
  });

  it("Check the value", () => {
    cy.get("input.gLFyf").should("have.attr", "value", "Cypress Tutorials");
  });

  it("Test Click Action", () => {
    cy.get("a.gL9Hy").click();
  });

  after(() => {
    cy.log("A handler that run after all test cases");
  });

  afterEach(() => {
    cy.log("A handler that run after every test cases");
  });
});
