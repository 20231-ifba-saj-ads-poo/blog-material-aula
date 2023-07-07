---
icon: study
date: 2023-07-07 18:30:00.00 -3
tag:
  - exception
category:
  - exercicio
sidebar: false
---

# Exercícios sobre Exception

Considerando o exercicio [Modelagem Sistema Banco](../ExercicioHeranca/Heranca4%20Banco.md)

1. Na classe `Conta`, modifique o método deposita(double x). Ele deve lançar uma exception chamada
`IllegalArgumentException`, que já faz parte da biblioteca do Java, sempre que o valor passado como
argumento for inválido (por exemplo, quando for negativo).
    1. Adicione o try/catch para tratar o erro
    1. Ao lançar a IllegalArgumentException, passe via construtor uma mensagem a ser exibida. Lembre que a String recebida como parâmetro é acessível depois via o método getMessage() herdado por todas as Exceptions
1. Modificar o sistema de controle de contas correntes para lançar uma exceção de `SaldoInsufucienteException` caso o valor de saque seja maior que o saldo disponível