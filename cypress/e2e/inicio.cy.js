import {cadastraUsuario, entraPaginaCadastro, validaCampos} from '../support/pageObjects/cadastro/cadastroTask.js';

describe('Jornada de Usuário', () => {
  beforeEach(()=> {
    cy.visit('/');
    entraPaginaCadastro();
  });
  it('Deve permitir que a pessoa usuária acesse a aplicação e realize um cadastro', () => {
    cadastraUsuario();
    cy.screenshot();
  });
  it('Não deve permitir que a pessoa usuária realize um cadastro', () => {
    validaCampos();
    cy.screenshot();
  });
  
})