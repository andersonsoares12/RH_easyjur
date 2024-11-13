
import 'cypress-file-upload';

describe('teste funcional do modulo JurisAi', () => {

  beforeEach(() => {
    // executa esses testes como se estivesse em um desktop
    // navegador com monitor 720p
    // para melhor exibição do botão de menu.
    cy.viewport(1280, 720)
    cy.login()
  })

  // O login será feito no beforeEach

  it('Deve Iniciar uma nova consulta ao chat via search', () => {
    cy.get('#input_chat_search').type('Poderia fazer para mim Petição Inicial \npara Resc Indenização por Danos Morais e Materiais Decorrentes de Venda Fraudulenta de Veículo')
    cy.get('#sendMessageBtn').click().wait(22000)
    cy.get('#loading-bot-message').wait(30000)
    //Verifica a mensagem de retorno da AI
    cy.get('.bot-message-text').should('be.visible')
    cy.screenshot('Resultado da busca')
  })

  it('Deve clicar no ícone Deletar Chat', () => {
    
    cy.get('.chat-tab-actions > #thread_3qy3J7ZhJZgbnh6i10OUPIbB').click()
    cy.get('.jconfirm-box').should('be.visible').screenshot('excluir a conversa')
    cy.get('.jconfirm-buttons > :nth-child(1)').click()
    cy.screenshot('Chat removido com sucesso')
    
  })
  
  it('Deve Anexar arquivo ao chat', () => {
    const caminhoDoArquivo = 'fixtures/teste.png';
    cy.get('#input_chat_search').click().type('Petição de pensao alimenticia')
    cy.get('#sendMessageBtn').click()
    cy.wait(30000)
    //faz o upload do arquivo
    cy.get('input[type="file"]').selectFile(caminhoDoArquivo, { force: true });
  })
  
 
  it('Deve clicar no ícone Editar Chat', () => {
    
    cy.get('#edit-tab-thread_vy34CTwCNkWM56slSTLhGIpU').click()
    cy.get('#today-tab > .active')       
    .type('{selectAll}')                
    .type('{del}')                      
    .type('Teste QA'); 
    cy.get('.sidebar-chat').click().screenshot('Edição OK')
  })
 
  it('Deve clicar no botão Novo Chat', () => {

    cy.get('#cria_novo_chat').click().screenshot('Novo Chat')
  })

  it('Deve clicar no botão sidebar lado direito', () => {

    cy.get('#btnCloseChatSidebar').click()
  })

})
