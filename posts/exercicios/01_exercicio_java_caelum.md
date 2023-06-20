---
icon: study
date: 2023-04-14 17:40:00.00 -3
tag:
  - java
category:
  - exercicio
  - entrega
prev: 00_exercicio_java_w3c
---

# Exercício: Fixação de sintaxe 

[^caelumoo]

## Variáveis e tipos primitivos

Para cada questão crie o seguinte código:

```java
class ExercicioX {
    public static void main(String[] args) {
    // seu exercício vai aqui
    }
}
```

1. Imprima todos os números de 150 a 300.
1. Imprima a soma de 1 até 1000.
1. Imprima todos os múltiplos de 3, entre 1 e 100.
1. Imprima os fatoriais de 1 a 10.
   
    O fatorial de um número $n$ é $n * n-1 * n-2$ ... até $n = 1$. Lembre-se de utilizar os parênteses.
    ```console    
    O fatorial de 0 é 1
    O fatorial de 1 é (0!) * 1 = 1
    O fatorial de 2 é (1!) * 2 = 2
    O fatorial de 3 é (2!) * 3 = 6
    O fatorial de 4 é (3!) * 4 = 24
    ```
    Faça um for que inicie uma variável `n` (número) como 1 e fatorial (resultado) como 1 e varia `n` de 1 até 10:
    ```java
    int fatorial = 1;
    for (int n = 1; n <= 10; n++) {

    }
    ```
1. No código do exercício anterior, aumente a quantidade de números que terão os fatoriais impressos, até 20, 30, 40. Em um determinado momento, além desse cálculo demorar, vai começar a mostrar respostas completamente erradas. Por quê?
    Mude de `int` para `long` para ver alguma mudança.
1. Imprima os primeiros números da série de Fibonacci até passar de 100. A série de Fibonacci é a seguinte: 0, 1, 1, 2, 3, 5, 8, 13, 21, etc... Para calculá-la, o primeiro elemento vale 0, o segundo vale 1, daí por diante, o n-ésimo elemento vale o (n-1)-ésimo elemento somado ao (n-2)-ésimo elemento (ex: 8 = 5 + 3).
1. Escreva um programa que, dada uma variável `x` com algum valor inteiro, temos um novo `x` de acordo com a seguinte regra:
   - se x é par, x = x / 2
   - se x é impar, x = 3 * x + 1
   - imprime x
   - O programa deve parar quando x tiver o valor final de 1. Por exemplo, para x = 13, a saída será: 40 -> 20 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1

1. Imprima a seguinte tabela, usando fors encadeados:
```console
1
2 4
3 6 9
4 8 12 16
n n*2 n*3 .... n*n
```

## Link

link para entrega da tarefa: https://classroom.github.com/a/4DTR0pPe

<!-- @include: ../../bib/bib.md -->
