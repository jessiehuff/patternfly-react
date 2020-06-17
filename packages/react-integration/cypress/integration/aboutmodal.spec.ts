// Define at the top of the spec file or just import it
function terminalLog(violations: any) {
  cy.task(
    'log',
    `${violations.length} accessibility violation${
      violations.length === 1 ? '' : 's'
    } ${violations.length === 1 ? 'was' : 'were'} detected`
  )
  // pluck specific keys to keep the table readable
  const violationData = violations.map(
    ({ id, impact, description, nodes }: any) => ({
      id,
      impact,
      description,
      nodes: nodes.length
    })
  )

  cy.task('table', violationData)
}

describe('About Modal Demo Test', () => {

  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#about-modal-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/about-modal-demo-nav-link');
  });

  it('Test with axe', () => {
    cy.visit('http://localhost:3000/about-modal-demo-nav-link');
    cy.get('#modal-button').click();
    // @ts-ignore
    cy.injectAxe();
    // @ts-ignore
    cy.checkA11y(null, null, terminalLog);   
  })

  it('Open + close about modal', () => {
    cy.get('#modal-button').click();
    cy.get('.pf-c-about-modal-box').should('exist');
    cy.get('.pf-c-button[aria-label="Close Dialog"]').click();
    cy.get('.pf-c-about-modal-box').should('not.exist');
  });
});
