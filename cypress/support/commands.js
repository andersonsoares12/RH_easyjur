let LOCAL_STORAGE_MEMORY = {};

Cypress.Commands.add("saveLocalStorage", () => {
  Object.keys(localStorage).forEach(key => {
    LOCAL_STORAGE_MEMORY[key] = localStorage[key];
  });
});

Cypress.Commands.add("restoreLocalStorage", () => {
  Object.keys(LOCAL_STORAGE_MEMORY).forEach(key => {
    localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key]);
  });
});

Cypress.Commands.add('login', () => {
  cy.visit("https://app.easyjur.com")
  cy.get('.easy_logo').should('be.visible')
  cy.get('#input-email_login').type("vaga.qa.teste.pratico@easyjur.com")
  cy.get('#input-senha_login').type("QA.teste123")
  cy.get('#login_submit').should('be.visible').click()
  cy.get('#agendaBoxDash > .title').should('contain', 'Agenda')


});

Cypress.Commands.add('pessoas', () => {
  cy.visit("https://app.easyjur.com/sgr/index.php?pg=pessoas_lista")
});

Cypress.Commands.add('agenda', () => {
  cy.visit("https://app.easyjur.com/sgr/index.php?pg=agenda_calendar")
});