/// <reference types= "Cypress"/>


describe('teste funcional de login', () => {
    it('Deve realizar o Login com Sucesso', () => {
        cy.visit("https://app.easyjur.com")
        cy.get('.easy_logo').should('be.visible')
        cy.get('#input-email_login').type(" vaga.qa.teste.pratico@easyjur.com")
        cy.get('#input-senha_login').type("QA.teste123")
        cy.get('#login_submit').should('be.visible').click()
        cy.get('#agendaBoxDash > .title').should('contain', 'Agenda')  
    });

    it('Deve realizar o Login Incorreto', () => {
        cy.visit("https://app.easyjur.com")
        cy.get('.easy_logo').should('be.visible')
        cy.get('#input-email_login').type("vaga.qa.teste.pratico@easyju.com")
        cy.get('#input-senha_login').type("QA.teste12")
        cy.get('#login_submit').should('be.visible').click()
        cy.get('p').should('contain', 'Nenhum usuário encontrado para o e-mail informado.')
    });

    it('Deve realizar o Login com Email inválido', () => {
        cy.visit("https://app.easyjur.com")
        cy.get('.easy_logo').should('be.visible')
        cy.get('#input-email_login').type("vaga.qa.teste.praticoeasyjur.co")
        cy.get('#input-senha_login').type("QA.teste123")
        cy.get('#login_submit').should('be.visible').click()
        cy.get('p').should('contain.text', 'Endereço de e-mail inválido.')
    
    });

    it('Deve realizar o Login com senha inválida', () => {
        cy.visit("https://app.easyjur.com")
        cy.get('.easy_logo').should('be.visible')
        cy.get('#input-email_login').type("vaga.qa.teste.pratico@easyjur.com")
        cy.get('#input-senha_login').type("QA.teste12")
        cy.get('#login_submit').should('be.visible').click()
        cy.get('p').should('contain.text', 'Senha incorreta. Por favor, tente novamente.')
    
    });

    it.only('Deve realizar o Login com Google', () => {
        cy.visit("https://app.easyjur.com")
        cy.get('.easy_logo').should('be.visible')
        cy.get('span.nsm7Bb-HzV7m-LgbsSe-BPrWId') .should('contain.text', 'Fazer login com o Google')
        cy.get('span.nsm7Bb-HzV7m-LgbsSe-BPrWId').click()
        cy.visit("https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?client_id=410836472511-jod26g6epbhgns8536hp86pik2sr4pd3.apps.googleusercontent.com&scope=openid%20email%20profile&response_type=id_token&gsiwebsdk=gis_attributes&redirect_uri=https%3A%2F%2Fapp.easyjur.com&response_mode=form_post&origin=https%3A%2F%2Fapp.easyjur.com&display=popup&prompt=select_account&gis_params=ChdodHRwczovL2FwcC5lYXN5anVyLmNvbRIXaHR0cHM6Ly9hcHAuZWFzeWp1ci5jb20YByoWL1k5WjdYSjBiS3FPclNwUDJZazdmQTJINDEwODM2NDcyNTExLWpvZDI2ZzZlcGJoZ25zODUzNmhwODZwaWsyc3I0cGQzLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tOAFCQDNhOWE2NmIzMGI3OTU5NjViM2E5YjU1M2NhN2E2MzI5OGJiOTZlZTg0OTk4YzFiMDZjZDNjOTg2NGQzNWUzODU&service=lso&o2v=1&ddm=1&flowName=GeneralOAuthFlow")
        cy.get('.Tn0LBd').should('contain', 'Sign in')
        cy.get('.dXXNOd').type("anderson@gmail.com")
        //cy.scrollTo('50%', '50%')  // Rola para o meio da página
        cy.get('#identifierNext').should('contain', 'Next').click()


    });

});