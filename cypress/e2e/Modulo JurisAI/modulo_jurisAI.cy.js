
import 'cypress-file-upload';

describe('teste funcional do modulo JurisAi', () => {

  beforeEach(() => {
    // executa esses testes como se estivesse em um desktop
    // navegador com monitor 720p
    // para melhor exibição do botão de menu.
    cy.viewport(1440, 900)
    cy.login()
    cy.jurisAI()
  })

  // O login será feito no beforeEach

  it('Deve Iniciar uma nova consulta ao chat via search', () => {
    cy.get('#hs-eu-confirmation-button').click();
    cy.get('#btnCloseChatSidebar').click()
    cy.get('#input_chat_search').type('Poderia fazer para mim Petição Inicial \npara Resc Indenização por Danos Morais e Materiais Decorrentes de Venda Fraudulenta de Veículo')
    cy.get('#sendMessageBtn').click().wait(22000)
    cy.get('#loading-bot-message').wait(30000)
    //Verifica a mensagem de retorno da AI
    cy.get('.bot-message-text').should('be.visible')
    cy.screenshot('Resultado da busca')
  })

  it('Deve clicar no ícone Deletar Chat', () => {
    cy.get('#hs-eu-confirmation-button').click();
    cy.get('.chat-tab-actions > #thread_4qqLKY95p9WZgjJIIoLKETnG').click()
    //sempre inspeconar o elemento para pega thread_NkKMPkJ91PzowPT4L1T5lr1j sempre muda
    // cy.get('.chat-tab-actions > #thread_NkKMPkJ91PzowPT4L1T5lr1j') proximo para deletar so sibistitir no passo anterior
    cy.get('.jconfirm-box').should('be.visible').screenshot('excluir a conversa')
    cy.get('.jconfirm-buttons > :nth-child(1)').click()
    cy.screenshot('Chat removido com sucesso')
    
  })
  
  it('Deve Anexar arquivo ao chat', () => {

    const caminhoDoArquivo = 'fixtures/teste.png';
    cy.get('#btnCloseChatSidebar').click()
    cy.get('#hs-eu-confirmation-button').click();
    cy.get('#input_chat_search').click().type('Petição de pensao alimenticia')
    cy.get('#sendMessageBtn').click()
    cy.wait(30000)
    //faz o upload do arquivo
    cy.get('input[type="file"]').selectFile(caminhoDoArquivo, { force: true });
  })
  
 
  it('Deve clicar no ícone Editar Chat', () => {
    cy.get('#hs-eu-confirmation-button').click();
    //não pode esquecer de inspecionar o compenete
    cy.get('#edit-tab-thread_wHd6XX0FRWB9DTfT6ycUCOHj').click()
    //não pode esquecer de inspecionar o compenete
    cy.get('#yesterday-tab > .active')
    .type('{selectAll}')                
    .type('{del}')                      
    .type('Teste QA'); 
    cy.get('.sidebar-chat').click().screenshot('Edição OK')
  })

})
