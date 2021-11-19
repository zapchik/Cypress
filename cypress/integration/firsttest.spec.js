/// <reference types="cypress" />
describe('Conduit test', () => {
    it('Conduit log in', () => {
        cy.visit('https://cirosantilli-realworld-next.herokuapp.com/');
        cy.get(':nth-child(2) > .nav-link').click();
        cy.get(':nth-child(1) > .form-control').type('zapchik@meta.ua');
        cy.get(':nth-child(2) > .form-control').type('robfish1965');
        cy.get('.btn').click();
        cy.get(':nth-child(4) > .nav-link').should('contain','rob1965');
    });
});