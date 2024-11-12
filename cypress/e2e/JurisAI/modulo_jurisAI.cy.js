

describe('teste funcional do modulo JurisAi', () => {
  
      beforeEach(() => {
        // executa esses testes como se estivesse em um desktop
        // navegador com monitor 720p
        // para melhor exibição do botão de menu.
        cy.viewport(1280, 720)
        cy.login()
      })
  
      it('Deve realizar o Login com Sucesso e clicar no modulo JurisAI', () => {
// O login será feito no beforeEach
        cy.visit("https://app.easyjur.com/sgr/index.php?pg=chat_juris")
        cy.get('.icon-brain').click()
        cy.get('.title-search-bar').should('contain', 'Juris')
      })
  
      it('Deve Iniciar uma nova consulta ao chat via search', () => {
        cy.visit("https://app.easyjur.com/sgr/index.php?pg=chat_juris")
        cy.get('#input_chat_search').type('Poderia fazer para mim Petição Inicial \npara Resc Indenização por Danos Morais e Materiais Decorrentes de Venda Fraudulenta de Veículo')
        cy.get('#sendMessageBtn').click().wait(22000)
        cy.get('#loading-bot-message').wait(30000)

        //Verifica a mensagem de retorno da AI
        cy.scrollTo('bottom');
        cy.get('.bot-message-text').should('be.visible')
        cy.screenshot('Resultado da busca')
        
    
      })

  })
  