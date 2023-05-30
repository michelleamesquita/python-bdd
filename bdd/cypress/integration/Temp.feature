Feature: Calculo de temperatura

  Eu quero validar se a funcao de temperatura funciona
  
  @focus
  Scenario: Abrir pagina de temperatura
    Given eu abro a pagina de temperatura
    When clico na funcao celsius temperatura "37"
    Then a funcao de Fahrenheit converte para "98.6"