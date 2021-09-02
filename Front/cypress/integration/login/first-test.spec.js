describe('Teste', function(){

    it('Verdadeiro caso a UI do Login esteja válida',function(){
        cy.visit('http://localhost:3000/login')

        cy.get('form')

        cy.get('.logo').should('be.visible')

        cy.contains('Matrícula:')
        cy.get('[type="text"]').get('[name="matricula"]')

        cy.contains('Senha:')
        cy.get('[type="text"]').get('[name="senha"]')

        cy.contains('Entrar')
        cy.get('button').get('.botao')

        cy.contains('Não sabe qual sua matrícula?')

    }), 

    it('Verdadeiro caso a UI do menu esteja válida', function(){
        cy.visit('http://localhost:3000/atividadesrealizadas')

        cy.get('.menu')

        cy.get('.imagem').find('img').should('be.visible')

        cy.get('.botaoMenu').contains('Atividades realizadas')
        cy.contains('Atividades realizadas').click()

        cy.get('.botaoMenu').contains('Meu planner')
        cy.contains('Meu planner').click()
        
        cy.get('.botaoMenu').contains('Plano semestral')
        cy.contains('Plano semestral').click()

        cy.get('.sair').contains('Sair')
        cy.contains('Sair').click()

    })
})