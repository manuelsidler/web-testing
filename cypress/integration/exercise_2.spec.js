/// <reference types="cypress" />

context('Navigation', () => {
    beforeEach(() => {
      cy.visit('https://www.sbb.ch')
    })

    it('should show connections between Basel and Bern', () =>{
        cy.get('#fromField').type('Basel')

        cy.get('#toField').type('Bern{enter}')

        cy.get('#previous-connections-id').click()

        cy.get('#departure_map').within(() => {
            cy.get('.var_zoom_out').click()
            cy.get('.var_zoom_in').click()
        })
    })
})