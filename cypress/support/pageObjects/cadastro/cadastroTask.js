import cadastroPage from '../cadastro/cadastroPage.js';

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
    })

    cy.get(cadastroPage.botao_sucesso).click();
    cy.get(cadastroPage.mensagem_sucesso);

}