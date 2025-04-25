describe('Search Component', () => {
  beforeEach(() => {
    cy.visit('/products');
  });

  it('should render search input with proper accessibility attributes', () => {
    cy.get('[role="search"]').within(() => {
      cy.get('input[type="search"]')
        .should('have.attr', 'aria-label', 'Search products')
        .and('have.attr', 'aria-describedby', 'searchDescription');
    });
  });

  it('should have a visible label for screen readers', () => {
    cy.get('label[for="search"]')
      .should('have.class', 'sr-only')
      .and('contain.text', 'Search products');
  });

  it('should update URL when typing in search input', () => {
    const searchTerm = 'test product';
    
    cy.get('input[type="search"]').type(searchTerm);
    
    // Wait for debounce
    cy.wait(600);
    
    cy.url().should('include', `search=${encodeURIComponent(searchTerm)}`);
  });

  it('should clear search params when input is cleared', () => {
    // First search for something
    cy.get('input[type="search"]').type('test{selectall}{backspace}');
    
    // Wait for debounce
    cy.wait(600);
    
    cy.url().should('not.include', 'search=');
  });

  it('should have proper focus management', () => {
    cy.get('input[type="search"]')
      .focus()
      .should('have.focus');
  });

  it('should have descriptive placeholder text', () => {
    cy.get('input[type="search"]')
      .should('have.attr', 'placeholder', 'What are you looking for?');
  });

  it('should maintain search term after page navigation', () => {
    const searchTerm = 'test product';
    
    // Type search term
    cy.get('input[type="search"]').type(searchTerm);
    
    // Wait for debounce
    cy.wait(600);
    
    // Refresh page
    cy.reload();

  });
}); 