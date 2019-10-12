describe('My First Test', () => {
  it('Add New Skill', () => {
    cy.visit('http://localhost:8080/');
    cy.get('.top-bar')
      .contains('バックエンド')
      .click();

    cy.get('.add-skill__textbox')
      .type('GO lang')
      .should('have.value', 'GO lang');

    cy.get('.add-skill__button').click();

    cy.get('.skill').contains('GO lang');
  });
  it('Persistant when togglling page', () => {
    cy.visit('http://localhost:8080/');
    cy.get('.top-bar')
      .contains('バックエンド')
      .click();

    cy.get('.add-skill__textbox')
      .type('GO lang')
      .should('have.value', 'GO lang');

    cy.get('.add-skill__button').click();

    cy.get('.top-bar')
      .contains('フロントエンド')
      .click();

    cy.get('.top-bar')
      .contains('バックエンド')
      .click();

    cy.get('.skill').contains('GO lang');
  });
  it('Does not add skill', () => {
    cy.visit('http://localhost:8080/');
    cy.get('.top-bar')
      .contains('バックエンド')
      .click();

    cy.get('.add-skill__button').click();

    cy.get('.skill').not('.skill__item');
  });
});
