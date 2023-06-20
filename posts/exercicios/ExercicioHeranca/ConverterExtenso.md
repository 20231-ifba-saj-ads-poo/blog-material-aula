---
icon: study
date: 2023-06-20 19:50:00.00 -3
tag:
  - java
category:
  - exercicio
---

# Exercício: Converter para Extenso

Analisando o processo de conversão de um numero inteiro para o seu correspondente texto por extenso percebemos que existe muita coisa em comum quando são adicionados novos dígitos.

1. Crie uma família de classes (utilize herança) para transformar um número inteiro em seu correspondente texto por extenso sendo possível executar o código abaixo.

    ```java
    ConverterExtenso ce = null;
    ce = new ConverterExtenso4Digitos(9999);
    System.out.println(ce);
    // -> Nove Mil Novecentos e Noventa e Nove
    ce = new ConverterExtenso3Digitos(999);
    System.out.println(ce);
    // -> Novecentos e Noventa e Nove
    ce = new ConverterExtenso2Digitos(99);
    System.out.println(ce);
    // -> Noventa e Nove
    ce = new ConverterExtenso1Digito(9);
    System.out.println(ce);
    // -> Nove
    ```
    Segue exemplo:

    ```java
    ... class ConverterExtenso1Digito {
       
        ... String[] porExtenso =  { "Zero", "Um", "Dois", "Três", "Quatro", "Cinco", "Seis", "Sete", "Oito", "Nove", "Dez" };
        //...
        @Override
        ... String toString() {
            return porExtenso[this.numero%10];
        }

    }

    ```
## Link

[Entrega](https://classroom.github.com/a/rZNkgSnQ)