describe('Layout and Navigation', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should have proper document structure', () => {
    // Check for main landmark
    cy.get('main#main-content').should('exist');

    // Check for skip link
    cy.get('a[href="#main-content"]')
      .should('exist')
      .and('have.class', 'sr-only');
  });

  it('should have proper font loading', () => {
    // Check if the font variable class exists
    cy.get('body').should('have.class', 'antialiased');

  });

  it('should handle keyboard navigation', () => {
    // Focus the skip link
    cy.get('a[href="#main-content"]')
      .focus()
      .should('be.visible')
      .and('have.class', 'focus:not-sr-only');


  });


  it('should have proper meta tags', () => {
    cy.get('head meta[name="description"]')
      .should('have.attr', 'content')
      .and('not.be.empty');

    cy.get('head meta[name="keywords"]')
      .should('have.attr', 'content')
      .and('include', 'Novara');

    cy.get('head meta[property="og:title"]')
      .should('have.attr', 'content')
      .and('include', 'Novara Products');
  });

  it('should have proper language attributes', () => {
    cy.get('html')
      .should('have.attr', 'lang', 'en')
      .and('have.class', 'scroll-smooth');
  });
}); 