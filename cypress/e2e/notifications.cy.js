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

            cy.log('Нажатие на кнопку "Оповещения"')
            cy.get('.header__nav > [href="/notification"]')
            .click()

            cy.get('.notification-list-item')
            .should('exist')
        });
    });
  });