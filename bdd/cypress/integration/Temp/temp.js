import {Given,When,Then} from 'cypress-cucumber-preprocessor/steps'

const URL = 'http://127.0.0.1:8888'
const CELSIUS =  "//input[@name='celsius']"
const FAHRENHEIT = "#fahrenheit"

Given('eu abro a pagina de temperatura', () => {
  cy.visit(URL)
})

When(`clico na funcao celsius temperatura {string}`, (text) => {
  cy.xpath(CELSIUS).type(text)
  cy.xpath(CELSIUS).should('be.visible').type('{ENTER}')
})

Then(`a funcao de Fahrenheit converte para {string}`, (title) => {
  cy.get(FAHRENHEIT).then(function($elem) {

    expect($elem.text()).to.include(title)
})
})