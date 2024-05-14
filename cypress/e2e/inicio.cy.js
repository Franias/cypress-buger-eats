const {cadastraUsuario, entraPaginaCadastro} = require ('../support/pageObjects/cadastro/cadastroTask.js');

describe('Jornada de Usuário', () => {
  beforeEach(()=> {
    cy.visit('/')
    entraPaginaCadastro();
  });
  it('Deve permitir que a pessoa usuária acesse a aplicação e realize um cadastro', () => {
    cadastraUsuario();
  });
  it('Não deve permitir que a pessoa usuária realize um cadastro', () => {
    cy.get('.button-success').click();

    cy.get('span:contains("É necessário informar o nome")');
    cy.get('span:contains("É necessário informar o CPF")');
    cy.get('span:contains("É necessário informar o email")');
    cy.get('span:contains("É necessário informar o CEP")');
    cy.get('span:contains("É necessário informar o número do endereço")');
    cy.get('span:contains("Selecione o método de entrega")');
    cy.get('span:contains("Adicione uma foto da sua CNH")');

    cy.get('input[name="whatsapp"]').type('9');
    cy.get('.button-success').click();

    cy.get('span:contains("Oops! Whatsapp com formato incorreto")');

    cy.get('input[name="cpf"]').type('9');
    cy.get('.button-success').click();
    cy.get('span:contains("Oops! CPF inválido")');
  });
})