
describe('teste funcional do modulo Pessoas', () => {

    beforeEach(() => {
        // executa esses testes como se estivesse em um desktop
        // navegador com monitor 720p
        // para melhor exibição do botão de menu.
        // cy.viewport(1280, 720)
        cy.login()
        cy.agenda()

    })



    it('Deve Cadastrar uma nova agenda', () => {
        cy.get('#hs-eu-confirmation-button').click();
        cy.get('.content-header__in-left > .btn').click();
        cy.get('input[name="id_cliente"]').click().type('Anderson Soares');
        cy.get('.ui-autocomplete').should('be.visible').contains('Anderson Soares -- QA').click();
        cy.get('a[class="btn btn--medium"]').contains('Salvar e Sair').click()
        cy.get('#cadastrar_evento_dia')
            .scrollIntoView({ easing: 'linear', duration: 1000, offset: { top: -50 } })
            .then(() => {
            });
        cy.get('#day12').should('be.visible').screenshot('Agenda criada')

    });

    it('Deve fazer update de uma agenda', () => {
        cy.get('#hs-eu-confirmation-button').click();
        cy.get('#cadastrar_evento_dia')
            .scrollIntoView({ easing: 'linear', duration: 1000, offset: { top: -50 } })
            .then(() => {
            });
        cy.get('#day12 > #mais_eventos').click()
        cy.get('#part-5-645703124 > .table-btn--edit').click()
        cy.get('#cke_1_contents > .cke_wysiwyg_frame')
        .then($iframe => { const $body = $iframe.contents()
            .find('body'); cy.wrap($body).click().clear().type('Seu novo texto aqui'); });
        cy.get('a.btn.btn--medium').contains('Salvar e Sair').click();
        cy.get(':nth-child(2) > #agenda_list_grid > :nth-child(1) > :nth-child(1)')
        .scrollIntoView({ easing: 'linear', duration: 1000, offset: { top: -50 } })
        .screenshot('Alteracao realizada na descriçao')
        

    });

    it.only('Deve fazer Delete de uma agenda', () => {
        cy.get('#hs-eu-confirmation-button').click();
        cy.get('#cadastrar_evento_dia')
            .scrollIntoView({ easing: 'linear', duration: 1000, offset: { top: -50 } })
            .then(() => {
            });
        cy.get('#day12 > #mais_eventos').click()
        cy.screenshot('Verifica itens da lista')
        cy.get(':nth-child(2) > #auxDivBtnGrid > .table-btn--trash').click()
        cy.get('.jconfirm-box').screenshot('Mensagem de Deseja realmente excluir o evento?')
        cy.get('.jconfirm-buttons > :nth-child(1)').click()   
        cy.wait(4000)     
        cy.get('#GRID_agenda > .janela__content > form').screenshot('verifica saida do item da lista')
        // cy.get('#cke_1_contents > .cke_wysiwyg_frame')
        // .then($iframe => { const $body = $iframe.contents()
        //     .find('body'); cy.wrap($body).click().clear().type('Seu novo texto aqui'); });
        // cy.get('a.btn.btn--medium').contains('Salvar e Sair').click();
        // cy.get(':nth-child(2) > #agenda_list_grid > :nth-child(1) > :nth-child(1)')
        // .scrollIntoView({ easing: 'linear', duration: 1000, offset: { top: -50 } })
        // .screenshot('Alteracao realizada na descriçao')
    });


})


