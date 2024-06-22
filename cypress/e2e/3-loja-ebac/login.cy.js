/// <reference types="cypress"/>

describe('funcionalidade: login', () => {
    
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });
    
    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso', () => {
        cy.get('#username'). type('alan123@123.com.br')
        cy.get('#password'). type('alan123')
        cy.get('.woocommerce-form > .button'). click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, alan123 (não é alan123? Sair)')
    });
    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username'). type('alan12@123.com.br')
        cy.get('#password'). type('alan123')
        cy.get('.woocommerce-form > .button'). click()
        cy.get('.woocommerce-error'). should('contain','Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
    });
    it('Deve exibir uma mensagem de erro ao inserir senha errada', () => {
        cy.get('#username'). type('alan123@123.com.br')
        cy.get('#password'). type('alan12')
        cy.get('.woocommerce-form > .button'). click()
        cy.get('.woocommerce-error > li'). should('contain','Erro: A senha fornecida para o e-mail alan123@123.com.br está incorreta. Perdeu a senha?')
    });
});