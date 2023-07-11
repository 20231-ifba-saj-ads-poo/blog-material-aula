---
icon: study
date: 2023-07-11 18:30:00.00 -3
tag:
  - exception
category:
  - exercicio
  - entrega
sidebar: false
---

# Exercício AutenticacaoInvalidaException

Crie um código que atenda a seguinte descrição:

1. Deve exitir uma classe `Usuario` que representa um usuário com login (`getLogin`) e senha (`getSenha`). 
1. Deve exitir uma classe `BancoDeUsuarios` possui uma lista estática de usuários cadastrados, que são inicializados no bloco estático. 
    1. O método `autenticar` realiza a autenticação, verificando se o login de usuário e a senha fornecidos correspondem a algum usuário na lista.
1. Se a autenticação não for bem-sucedida a exceção `AutenticacaoInvalidaException` é lançada com uma mensagem de erro apropriada ("Usuario (login tal) não foi encontrado ou a senha está errada").
1. No método `main`, um exemplo de autenticação é realizado chamando o método `autenticar` do `BancoDeUsuarios` com um usuário válido. Se a autenticação for bem-sucedida, será exibida uma mensagem indicando que o usuário foi autenticado. Caso contrário, a mensagem de erro será exibida.


## Entrega

[Link](https://github.com/20231-ifba-saj-ads-poo/exercicio_AutenticacaoInvalidaException/fork)