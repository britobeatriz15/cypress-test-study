/// <reference types="cypress" />

describe('Cypress Basics', () => {
    it('should visit the page and check the title', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html');
        //ele vai pegar o título da página e comparar com o valor esperado
            //cy.title().should('be.equal', 'Campo de Treinamento');

            //cy.pause(); //pausa a execução do teste para que você possa inspecionar o estado atual da aplicação

        //ele vai pegar o título da página e verificar se contém a palavra "Campo"
        //cy.title().should('contain', 'Campo').debug();

        // voce pode simplificar o código usando o should e and
        cy.title()
            .should('be.equal', 'Campo de Treinamento')
            .and('contain', 'Campo');
    });

    it('should find and interact with elements', () => {
    cy.visit('https://wcaquino.me/cypress/componentes.html');

    //voce pode pegar o nome do elemento usando o f12 do navegador e clicar com o mouse no elemento para ver o código html
    //ele vai encontrar o elemento com o id "buttonSimple" e clicar nele 
    cy.get('#buttonSimple')
        .click()
        .should('have.value', 'Obrigado!')
    // no Should, ele vai encontrar o elemento com o id "buttonSimple" e verificar se o texto do elemento é "Obrigado!"
});
});


