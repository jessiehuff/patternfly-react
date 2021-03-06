describe('Card Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#card-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/card-demo-nav-link');
  });

  it('Verify default title', () => {
    cy.get('.pf-c-card__title').contains('Header');
  });

  it('Verify default body content', () => {
    cy.get('.pf-c-card__body').contains('Body');
  });

  it('Verify card is hoverable', () => {
    cy.get('article')
      .first()
      .should('have.class', 'pf-m-hoverable');
  });

  it('Verify card is compact', () => {
    cy.get('article')
      .eq(1)
      .should('have.class', 'pf-m-compact');
  });

  it('Verify card is selectable and selected', () => {
    cy.get('article')
      .eq(2)
      .should('have.class', 'pf-m-selected')
      .should('have.class', 'pf-m-selectable');
  });

  it('Verify card is heading element', () => {
    cy.get('h4').should('have.id', 'heading-card');
  });

  it('Verify card is flat', () => {
    cy.get('#flatCard').should('have.class', 'pf-m-flat');
  });

  it('Verify card is rounded', () => {
    cy.get('#roundedCard').should('have.class', 'pf-m-rounded');
  });

  it('Verify card is large', () => {
    cy.get('#largeCard').should('have.class', 'pf-m-display-lg');
  });

  it('Verify that selectable card can be selected and unselected with keyboard input', () => {
    cy.get('#selectableCard').focus();
    cy.focused().should('have.class', 'pf-m-selectable');
    cy.focused().should('not.have.class', 'pf-m-selected');
    cy.focused().type('{enter}');
    cy.focused().should('have.class', 'pf-m-selected');
    cy.focused().type('{enter}');
    cy.focused().should('not.have.class', 'pf-m-selected');
  });

  it('Verify card is expandable', () => {
    cy.get('#expand-card').should('not.have.class', 'pf-m-expanded');
    cy.get('.pf-c-card__header-toggle .pf-c-button').click();
    cy.get('#expand-card').should('have.class', 'pf-m-expanded');
  });
});
