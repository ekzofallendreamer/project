describe('Cypress Tests', () => {
    it('login_successful', () => {
        cy.fixture('cypressTests').then(data => {
            cy.log('Переход на главную страницу')
            cy.visit(data.main_url)
            cy.wait(2000)
  
            cy.log('Нажатие на кнопку "Авторизация"')
            cy.get('[href="/login"] > .button')
            .click()
  
            cy.log('Ввод логина')
            cy.get('.form-input--text')
            .type(data.login)
            
            cy.log('Ввод пароля')
            cy.get('.form-input--password')
            .type(data.password)
            cy.wait(1000)
  
            cy.log('Нажатие на кнопку "Войти"')
            cy.get('.form__buttons > :nth-child(3)')
            .click()

            cy.log('Сброс роли')
            cy.get('[data-v-02661ece=""][data-v-4e40dec7=""] > .form__buttons > .button')
            .click
        });
    });
  });









