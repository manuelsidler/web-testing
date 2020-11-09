/// <reference types="cypress" />

context('Navigation', () => {
  beforeEach(() => {
    cy.visit('https://www.duckduckgo.com')
  })

  it('should have title', () => {
    cy.title().should('eq', 'DuckDuckGo — Privacy, simplified.')
  })

  it('should display search results for "gnocchi"', () => {
    cy.get('#search_form_input_homepage').type('gnocchi')

    cy.get('#search_form_homepage').submit()

    cy.title().should('eq', 'gnocchi at DuckDuckGo')
    
    // no statistics on DuckDuckGo.com to print :-)
  })
})