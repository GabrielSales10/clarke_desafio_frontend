describe('Testando o formulário de consumo', () => {
    it('Preenche os campos e envia o formulário', () => {
      cy.visit('http://localhost:3000'); 
      cy.get('input[name="consumo"]').type('200'); 
      cy.get('button[type="submit"]').click(); 
      cy.contains('Fornecedor escolhido').should('be.visible'); 
    });
  });
  