/// <reference types="cypress" />

describe('Elements', () => {

    //aqui garante que todos os testes vão visitar a página antes de cada teste
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html');
    });

    it('text', () => {
        cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...')
    })

    it('links', () => {
        cy.contains('Voltar').click();
        cy.get('#resultado').should('have.text', 'Voltou!');

        //refresh the page
        cy.reload();
        cy.get('#resultado').should('have.not.text', 'Voltou!');
        cy.contains('Voltar').click();
        cy.get('#resultado').should('have.text', 'Voltou!');
    })

    //elementos de campo de texto/ text box

    it('textFields', () => {
        //lembrando que para saber o ID do elemento, basta inspecionar o elemento e verificar o código html na pagina no f12 ou com a ferramenta de localizar do cypress
        cy.get('#formNome')
            .type('Cypress Test')
            .should('have.value', 'Cypress Test');

        //text area
        cy.get('#elementosForm\\:sugestoes')
            .type('textarea')
            .should('have.value', 'textarea');

        //tabela
        cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input')
            .type('???')

        //escrever algo e apagar usando o backspace, no caso deve apagar o 3 e o 4 do teste1234
        cy.get('[data-cy=dataSobrenome]')
        .type('Teste1234(backspace)(backspace)')
        
        //como usar backspace é muito complexo, vamos usar clear para limpar o campo
        cy.get('#elementosForm\\:sugestoes')
            .clear()
            .type('Erro{selectall}acerto')
            .should('have.value', 'acerto');
    })

})

/* houver testes externos no código

describe('trabalhando com elementos basicos', () => {

    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html');
    });
    
    it('externos', () => {

    })
})
    */