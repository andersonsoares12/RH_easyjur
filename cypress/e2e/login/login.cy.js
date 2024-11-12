
describe('teste funcional de login', () => {
 
        beforeEach(() => {
            // executa esses testes como se estivesse em um desktop
            // navegador com monitor 720p
            // para melhor exibição do botão de menu.
            cy.viewport(1280, 720)
        });
        it('Deve realizar o Login com Sucesso', () => {
            cy.visit("https://app.easyjur.com")
            cy.get('.easy_logo').should('be.visible')
            cy.get('#input-email_login').type("vaga.qa.teste.pratico@easyjur.com")
            cy.get('#input-senha_login').type("QA.teste123")
            cy.get('#login_submit').should('be.visible').click()
            // Verifica se a URL é igual à esperada
            cy.url().should('equal', 'https://app.easyjur.com/sgr/index.php')
            cy.screenshot('Login com sucesso')



        });

        it('Deve tentar realizar o Login Incorreto', () => {
            cy.visit("https://app.easyjur.com")
            cy.get('.easy_logo').should('be.visible')
            cy.get('#input-email_login').type("vaga.qa.teste.pratico@easyju.com")
            cy.get('#input-senha_login').type("QA.teste12")
            cy.get('#login_submit').should('be.visible').click()
            cy.get('p').should('contain', 'Nenhum usuário encontrado para o e-mail informado.')
            cy.screenshot('Nenhum usuário encontrado')
        });

        it('Deve tentar realizar o Login com Email inválido', () => {
            cy.visit("https://app.easyjur.com")
            cy.get('.easy_logo').should('be.visible')
            cy.get('#input-email_login').type("vaga.qa.teste.praticoeasyjur.co")
            cy.get('#input-senha_login').type("QA.teste123")
            cy.get('#login_submit').should('be.visible').click()
            cy.get('p').should('contain.text', 'Endereço de e-mail inválido.')
            cy.screenshot('e-mail inválido')

        });

        it('Deve tentar realizar o Login com senha inválida', () => {
            cy.visit("https://app.easyjur.com")
            cy.get('.easy_logo').should('be.visible')
            cy.get('#input-email_login').type("vaga.qa.teste.pratico@easyjur.com")
            cy.get('#input-senha_login').type("QA.teste12")
            cy.get('#login_submit').should('be.visible').click()
            cy.get('p').should('contain.text', 'Senha incorreta. Por favor, tente novamente.')
            cy.screenshot('Senha incorreta')

        });


  

})