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

            cy.log('Нажатие на кнопку "Выбрать роль"')
            cy.get('.page-nav__role-block > .button')
            .click()

            cy.log('Нажатие на кнопку "Выбрать роль студента"')
            cy.get('.select-role-form > :nth-child(3)')
            .click()

            cy.log('Нажатие на кнопку "Пройти верификацию"')
            cy.get('.message-student > .button')
            .click()

            cy.log('Ввод образовательного учреждения')
            cy.get('.desktop-modal__content > .student-form > .choose-institution > :nth-child(1) > [data-v-40f88df4=""] > .search-input > div.search-input__field > .form-input--text')
            .type(data.educational)
            cy.wait(1000)
            
            cy.get('.search-input__item')
            .click()

            cy.log('Ввод специальности')
            cy.get('.desktop-modal__content > .student-form > .choose-specialty > [data-v-0dbb9e5f=""] > .search-input > div.search-input__field > .form-input--text')
            .type(data.qualification)

            cy.get('.search-input__item')
            .click()

            cy.log('Ввод квалификации')
            cy.get('.desktop-modal__content > .student-form > :nth-child(3) > .form-control--max > .form-input--text')
            .type(data.specialization)
            
            cy.log('Выбор курса обучения')
            cy.get('.desktop-modal__content > .student-form > .student-form__courses > .courses-list > :nth-child(3)')
            .click()

            cy.log('Ввод начала года')
            cy.get('.desktop-modal__content > .student-form > .student-form__years > :nth-child(1) > .form-control--max > .form-input--number')
            .type(data.year_start)

            cy.log('Ввод конца года')
            cy.get('.desktop-modal__content > .student-form > .student-form__years > :nth-child(2) > .form-control--max > .form-input--number')
            .type(data.year_end)

            cy.log('Нажатие на кнопку "Создать заявку"')
            cy.get('.desktop-modal__content > .student-form > .button')
            .click()
        });
    });
  });