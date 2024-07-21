/// <reference types="cypress"/>

describe('Funcionadlidade: produtos', () => {
   
    beforeEach(() => {
        cy.visit('produtos/')
    });
   
   
    it('Deve selecionar um produto da lista', () => {
        cy.get('.products > .row')
        //.first()
        //.last()
        //.eq(2)
        .contains('Atlas Fitness Tank')
        .click()
        cy.get('.sku_wrapper').should('contain','STMT11')
    });
});