describe('TabelaFornecedores', () => {
    it('deve renderizar a tabela corretamente', () => {
      cy.visit('/');  
  
      cy.get('table').should('exist');
      cy.get('th').should('have.length', 7); 
      cy.get('tr').should('have.length.greaterThan', 1); 
    });
  
    it('deve exibir o pop-up ao clicar em um fornecedor', () => {
      cy.visit('/');  
  
      cy.get('tr').first().click(); 
      cy.get('.modal').should('exist');  
      cy.get('.closeButton').click();  
      cy.get('.modal').should('not.exist');
    });
  });
  