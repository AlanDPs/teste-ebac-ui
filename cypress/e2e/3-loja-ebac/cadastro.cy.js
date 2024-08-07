/// <reference types="cypress" /> 

const { faker } = require('@faker-js/faker');

describe('Funcionalidade de pré cadastro', () => {

    beforeEach(() => {

        cy.visit('minha-conta/')

    });

    

    it('Deve completar o pré cadastro com sucesso', () => {

        cy.get('#reg_email').type(faker.internet.email())

        cy.get('#reg_password').type(faker.internet.password())

        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()

        cy.get('#account_first_name').type(faker.name.firstName());

        cy.get('#account_last_name').type(faker.name.lastName());

        cy.get('.woocommerce-Button').click();

        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso');        

    });

});