import { time } from 'console';
import 'cypress-file-upload';
import { TIMEOUT } from 'dns';

describe('teste funcional do modulo Pessoas', () => {

    beforeEach(() => {
        // executa esses testes como se estivesse em um desktop
        // navegador com monitor 720p
        // para melhor exibição do botão de menu.
        cy.viewport(1280, 720)
        cy.login()
        cy.pessoas()

    })

    it('Deve Realizar Cadatro de Pessoa', () => {
        cy.url().should('equal', 'https://app.easyjur.com/sgr/index.php?pg=pessoas_lista')
        cy.get('#hs-eu-confirmation-button').click()
        cy.get('.content-header__in-left > .btn').click()
        cy.get('#pessoas_nome').type('Anderson Soares')
        cy.get('#apelido').type('QA')
        cy.get('#fisica_juridica').select('Jurídica')
        cy.get('input[name="tipo_cad[]"][id="tipo_cad[1]"]').click()
        cy.get('a[class="btn btn--medium"]').contains('Salvar e Sair').click().screenshot('Salvo com sucesso')
    })

    it('Deve tentar cadastrar uma nova pessoa', () => {
        cy.get('#hs-eu-confirmation-button').click()
        cy.get('.content-header__in-left > .btn').click()
        cy.get('#pessoas_nome').type('Anderson Soares')
        cy.get('#apelido').type('QA')
        cy.get('.jconfirm-box').screenshot('Já existe um cadastro')
    })
    it('Deve fazer uma pesquisa de uma pessoa ja cadastrada', () => {
        cy.get('#hs-eu-confirmation-button').click()
        cy.get('#pesquisa_simples').click().type('Anderson Soares')
        cy.get('.row > .content-search__btns > #enviar').click()
        cy.wait(3000)
        cy.get('tbody > tr',).eq(0).should('be.visible').screenshot('Pessoa Localizada')
    })

    it('Deve fazer update de uma pessoa ja cadastrada', () => {
        cy.get('#hs-eu-confirmation-button').click()
        cy.get('#pesquisa_simples').click().type('Anderson Soares')
        cy.get('.row > .content-search__btns > #enviar').click()
        cy.wait(3000)
        cy.get('tbody > tr',).eq(0).should('be.visible').screenshot('Pessoa Localizada')
        cy.get('#Editando').click()
        cy.get('#pessoas_nome').clear().type('Anderson Soares Santos')
        cy.get('#apelido').clear().type('Engenheiro de QA')
        cy.get('input[name="tipo_cad[]"][id="tipo_cad[4]"]').click()
        cy.get('input[name="tipo_cad[]"][id="tipo_cad[5]"]').click()
        cy.get('input[name="tipo_cad[]"][id="tipo_cad[9]"]').click()
        cy.get('a[class="btn btn--medium"]').contains('Salvar e Sair').click()
        cy.wait(3000)
        cy.get('tbody > tr',).eq(0).should('be.visible').screenshot('Atualização com sucesso')
    })

    it('Deve fazer exclusão de uma pessoa ja cadastrada', () => {
        cy.get('#hs-eu-confirmation-button').click()
        cy.get('#pesquisa_simples').click().type('Anderson Soares')
        cy.get('.row > .content-search__btns > #enviar').click()
        cy.wait(3000)
        cy.get('tbody > tr',).eq(0).should('be.visible').screenshot('Pessoa Localizada')
        cy.get('.table-btn--trash').click()
        cy.get('.jconfirm-box').screenshot('Essa ação é irreversível!')
        cy.get('.jconfirm-buttons > :nth-child(1)').click()
        cy.wait(3000)
        cy.get('#principalFooterAjaxPessoas').screenshot('Registro excluido')

    })

})

