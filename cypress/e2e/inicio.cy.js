const {cadastraUsuario, entraPaginaCadastro, validaCampos} = require ('../support/pageObjects/cadastro/cadastroTask.js');

describe('Jornada de Usuário', () => {
  beforeEach(()=> {
    cy.visit('/');
    entraPaginaCadastro();
  });
  it('Deve permitir que a pessoa usuária acesse a aplicação e realize um cadastro', () => {
    cadastraUsuario();
  });
  it('Não deve permitir que a pessoa usuária realize um cadastro', () => {
    validaCampos();
  });
})