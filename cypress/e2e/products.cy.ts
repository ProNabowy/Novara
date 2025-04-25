describe('Products Page', () => {
  beforeEach(() => {
    cy.visit('/products');
  });

  it('should display the products page title', () => {
    cy.get('h1').should('contain.text', 'All Products');
  });

  it('should have a working search functionality', () => {
    cy.get('[role="search"]').within(() => {
      cy.get('input[type="search"]')
        .type('test product');
    });

    // Wait for debounce
    cy.wait(600);
    
    // URL should be updated with search params
    cy.url().should('include', 'search=test%20product');
    cy.url().should('include', 'page=1');
    cy.url().should('include', 'skip=0');
  });

 
  it('should have accessible elements', () => {
    // Test for skip link
    cy.get('a[href="#main-content"]').should('exist');
    
    // Test for proper ARIA labels
    cy.get('[role="search"]').should('have.attr', 'aria-label');

  });
}); 