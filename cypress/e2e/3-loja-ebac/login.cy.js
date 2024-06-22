/// <reference types="cypress"/>

describe('funcionalidade: login', () => {
    
    it('Deve fazer login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username'). type('alan123@123.com.br')
        cy.get('#password'). type('alan123')
        cy.get('.woocommerce-form > .button'). click()
    
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, alan123 (não é alan123? Sair)')
    });

});