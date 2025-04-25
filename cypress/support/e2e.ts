import '@testing-library/cypress/add-commands';

declare global {
  namespace Cypress {
    interface Chainable {
      tab(): Chainable<JQuery<HTMLElement>>;
    }
  }
}

// Add custom command for tabbing
Cypress.Commands.add('tab', () => {
  cy.focused().trigger('keydown', { keyCode: 9, which: 9 });
});

// Prevent uncaught exceptions from failing tests
Cypress.on('uncaught:exception', (err) => {
  return false;
}); 