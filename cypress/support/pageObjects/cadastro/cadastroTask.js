import { cadastroPage } from '../cadastro/cadastroPage.js';

export const cadastraUsuario = () => {
    cy.get(cadastroPage.nome).type('Test');
    cy.get(cadastroPage.cpf).type('67726385065');
    cy.get(cadastroPage.email).type('test@test.com');
    cy.get(cadastroPage.whats).type('51999999999');
    cy.get(cadastroPage.cep).type('91170686');
    cy.get(cadastroPage.numero_endereco).type('1');
    cy.get(cadastroPage.img).click();
    cy.get(cadastroPage.file).selectFile('cnh.jpg', {
      action: 'drag-drop',
      force: true
    });

    cy.get(cadastroPage.botao_sucesso).click();
    cy.get(cadastroPage.mensagem_sucesso);

}

export const entraPaginaCadastro = () => {
  cy.get('a').click();

  cy.location('pathname').should('eq','/deliver');
}

export const validaCampos= () => {
  cy.get(cadastroPage.botao_sucesso).click();

  cy.get(cadastroPage.erro_nome);
  cy.get(cadastroPage.erro_cpf);
  cy.get(cadastroPage.erro_email);
  cy.get(cadastroPage.erro_cep);
  cy.get(cadastroPage.erro_endereco);
  cy.get(cadastroPage.erro_entrega);
  cy.get(cadastroPage.erro_img);

  cy.get(cadastroPage.whats).type('9');
  cy.get(cadastroPage.botao_sucesso).click();

  cy.get(cadastroPage.erro_whats);

  cy.get(cadastroPage.cpf).type('9');
  cy.get(cadastroPage.botao_sucesso).click();
  cy.get(cadastroPage.erro_cpf_invalido);
}