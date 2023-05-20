---
icon: edit
date: 2023-04-28 18:00:00.00 -3
tag:
  - vetor
  - lista
category:
  - aula
order: 7
---

# Trabalhando com ArrayList

[^AluraColl]

Antes de chegarmos em toda a hierarquia das  `Collections` vamos falar e utilizar um pouco o `ArrayList`

## Adicionando elementos em uma lista

Para criar um objeto do tipo ArrayList, certamente fazemos como sempre: utilizando o operador new. Mas repare que acabamos passando um pouco mais de informações. Ao declarar a referência a uma ArrayList, passamos qual o tipo de objeto com o qual ela trabalhará. Se queremos uma lista de nomes de aulas, vamos declarar `ArrayList<String>`. Crie a classe TestandoListas, adicionando os nomes de algumas aulas que teremos nesse curso:

```java
import java.util.List;
import java.util.ArrayList;

public class TestandoListas {

    public static void main(String[] args) {

        String aula1 = "Modelando a classe Aula";
        String aula2 = "Conhecendo mais de listas";
        String aula3 = "Trabalhando com Cursos e Sets";

        ArrayList<String> aulas = new ArrayList<>();
        aulas.add(aula1);
        aulas.add(aula2);
        aulas.add(aula3);        

        System.out.println(aulas);
    }
}
```

Qual é o resultado desse código? Ele mostra as aulas adicionadas em sequência! Por que isso acontece? Pois a classe ArrayList, ou uma de suas mães, reescreveu o método toString, para que internamente fizesse um for, concatenando os seus elementos internos separados por vírgula.

## Removendo elementos

Bastante simples! O que mais podemos fazer com uma lista? As operações mais básicas que podemos imaginar, como por exemplo remover um determinado elemento. Usamos o método remove e depois mostramos o resultado para ver que a primeira foi removida:

```java
aulas.remove(0);
System.out.println(aulas);
```

Por que 0? Pois as listas, assim como a maioria dos casos no Java, são indexadas a partir do 0, e não do 1.

## Percorrendo uma lista

Bem, talvez não seja a melhor das ideias fazer um System.out.println na nossa lista, pois talvez queiramos mostrar esses itens de alguma outra forma, como por exemplo um por linha. Como fazer isso? Utilizando o for de uma maneira especial, chamada de enhanced for, ou popularmente foreach. Lembrando que foreach não existe no Java como comando, e sim como um caso especial do for mesmo. Olhe o código:

```java
for (String aula : aulas) {
    System.out.println("Aula: " + aula);
}
```

## Acessando elementos

E se eu quisesse saber apenas a primeira aula? O método aqui é o get. Ele retorna o primeiro elemento se passarmos o 0 como argumento:

```java
String primeiraAula = aulas.get(0);
System.out.println("A primeira aula é " + primeiraAula);
```

Você pode usar esse mesmo método para percorrer a lista toda, em vez do tal do enhanced for. Para isso, precisamos saber quantos elementos temos nessa lista. Nesse caso, utilizamos o método size para limitar o nosso for:
```java
for (int i = 0; i < aulas.size(); i++) {
    System.out.println("aula : " + aulas.get(i));
}
```

## Mais uma forma de percorrer elementos, agora com Java 8

Uma outra forma de percorrer nossa lista é utilizando as sintaxes e métodos novos incluídos no Java 8. Temos um método (não um comando!) agora que se chama `forEach`. Ele recebe um objeto do tipo `Consumer`, mas o interessante é que você não precisa criá-lo, você pode utilizar uma sintaxe bem mais enxuta, mas talvez assustadora a primeira vista, chamada *lambda*. Repare:
```java
aulas.forEach(aula -> {
    System.out.println("Percorrendo:");
    System.out.println("Aula " + aula);
});
```

## Referências

<!-- @include: ../bib/bib.md -->
