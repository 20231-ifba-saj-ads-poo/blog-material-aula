---
icon: study
date: 2023-07-07 18:30:00.00 -3
tag:
  - collection
category:
  - exercicio
  - entrega
sidebar: false
---


# Exercício de Tipos de coleções

[^caelumoo]

1. Crie um código que insira 30 mil números numa `ArrayList` e pesquise-os. Vamos usar um método de `System` para cronometrar o tempo gasto
    ```java
    public class TestaPerformance {
        public static void main(String[] args) {
            System.out.println("Iniciando...");
            Collection<Integer> teste = new ArrayList<>();
            long inicio = System.currentTimeMillis();
            int total = 30000;
            for (int i = 0; i < total; i++) {
                teste.add(i);
            }
            for (int i = 0; i < total; i++) {
                teste.contains(i);
            }
            long fim = System.currentTimeMillis();
            long tempo = fim - inicio;
            System.out.println("Tempo gasto: " + tempo);
        }
    }
    ```
    Troque a ArrayList por um HashSet e verifique o tempo que vai demorar:
    
    ```java
    Collection<Integer> teste = new HashSet<>();
    ```
    O que é lento? A inserção de 30 mil elementos ou as 30 mil buscas? Descubra computando o tempo gasto em cada for separadamente.

    A diferença é mais que gritante. Se você passar de 30 mil para um número maior, como 50 ou 100 mil, verá que isso inviabiliza por completo o uso de uma List, no caso em que queremos utilizá-la essencialmente em pesquisas.
1. (conceitual, importante) Repare que, se você declarar a coleção e der new assim    
    ```java
    Collection<Integer> teste = new ArrayList<>();
    ```
    em vez de:
    ```java
    ArrayList<Integer> teste = new ArrayList<>();
    ```
    É garantido que vai ter de alterar só essa linha para substituir a implementação por `HashSet`. Estamos aqui usando o polimorfismo para nos proteger que mudanças de implementação venham nos obrigar a alterar muito código. Mais uma vez: programe voltado a interface, e não à implementação!

    Esse é um excelente exemplo de bom uso de interfaces, afinal, de que importa como a coleção funciona? O que queremos é uma coleção qualquer, isso é suficiente para os nossos propósitos! Nosso código está com baixo acoplamento em relação a estrutura de dados utilizada: podemos trocá-la facilmente.

    Esse é um código extremamente elegante e fexível. Com o tempo você vai reparar que as pessoas tentam programar sempre se referindo a essas interfaces menos específicas, na medida do possível: métodos costumam receber e devolver Collections, Lists e Sets em vez de referenciar diretamente uma implementação. É o mesmo que ocorre com o uso de `InputStream` e` OutputStream`: eles são o suficiente, não há porque forçar o uso de algo mais específico.

    Obviamente, algumas vezes não conseguimos trabalhar dessa forma e precisamos usar uma interface mais específica ou mesmo nos referir ao objeto pela sua implementação para poder chamar alguns métodos. Por exemplo, `TreeSet` tem mais métodos que os definidos em `Set`, assim como `LinkedList` em relação à `List`.
    
    Dê um exemplo de um caso em que não poderíamos nos referir a uma coleção de elementos como Collection, mas necessariamente por interfaces mais específicas como List ou Set.
1. Faça testes com o Map, como visto nesse capítulo:
    ```java
    public class TestaMapa {
        public static void main(String[] args) {
            Conta c1 = new ContaCorrente();
            c1.deposita(10000);
            Conta c2 = new ContaCorrente();
            c2.deposita(3000);
            // cria o mapa
            Map mapaDeContas = new HashMap();
            // adiciona duas chaves e seus valores
            mapaDeContas.put("diretor", c1);
            mapaDeContas.put("gerente", c2);
            // qual a conta do diretor?
            Conta contaDoDiretor = (Conta) mapaDeContas.get("diretor");
            System.out.println(contaDoDiretor.getSaldo());
        }
    }
    ```    
    Depois, altere o código para usar o *generics* e não haver a necessidade do casting, além da garantia de que nosso mapa estará seguro em relação a tipagem usada.
    ```java
    // cria o mapa
    Map<String, Conta> mapaDeContas = new HashMap<>();
    ```    
1. (opcional) Assim como no exercício 1, crie uma comparação entre ArrayList e LinkedList, para ver qual é a mais rápida para se adicionar elementos na primeira posição (list.add(0, elemento)), como por exemplo:
    ```java
    public class TestaPerformanceDeAdicionarNaPrimeiraPosicao {
        public static void main(String[] args) {
            System.out.println("Iniciando...");
            long inicio = System.currentTimeMillis();
            // trocar depois por ArrayList
            List<Integer> teste = new LinkedList<>();
            for (int i = 0; i < 30000; i++) {
                teste.add(0, i);
            }
            long fim = System.currentTimeMillis();
            double tempo = (fim - inicio) / 1000.0;
            System.out.println("Tempo gasto: " + tempo);
        }
    }
    ```
    Seguindo o mesmo raciocínio, você pode ver qual é a mais rápida para se percorrer usando o get(indice) (sabemos que o correto seria utilizar o enhanced for ou o Iterator). Para isso, insira 30 mil elementos e depois percorra-os usando cada implementação de List. Perceba que aqui o nosso intuito não é que você aprenda qual é o mais rápido, o importante é perceber que podemos tirar proveito do polimorsmo para nos comprometer apenas com a interface. Depois, quando necessário, podemos trocar e escolher uma implementação mais adequada as nossas necessidades. Qual das duas listas foi mais rápida para adicionar elementos à primeira posição?
1. (opcional) Crie uma classe Banco que possui uma List de Conta chamada contas. Repare que numa lista de Conta, você pode colocar tanto ContaCorrente quanto ContaPoupanca por causa do polimorsmo. Crie um método void adiciona(Conta c), um método Conta pega(int x) e outro int pegaQuantidadeDeContas(), muito similar à relação anterior de Empresa-Funcionário. Basta usar a sua lista e delegar essas chamadas para os métodos e coleções que estudamos. Como cou a classe Banco?
1. (opcional) No Banco, crie um método Conta buscaPorNome(String nome) que procura por uma Conta cujo nome seja equals ao nome dado. Você pode implementar esse método com um for na sua lista de Conta, porém não tem uma performance eciente. Adicionando um atributo privado do tipo Map<String, Conta> terá um impacto signicativo. Toda vez que o método adiciona(Conta c) for invocado, você deve invocar .put(c.getNome(), c) no seu mapa. Dessa maneira, quando alguém invocar o método Conta buscaPorNome(String nome), basta você fazer o get no seu mapa, passando nome como argumento! Note, apenas, que isso é só um exercício! Dessa forma você não poderá ter dois clientes com o mesmo nome nesse banco, o que sabemos que não é legal. Como caria sua classe Banco com esse Map?
1. (opcional, avançado) Crie o método hashCode para a sua conta, de forma que ele respeite o equals de que duas contas são equals quando tem o mesmo número. Felizmente para nós, o próprio Eclipse já vem com um criador de equals e hashCode que os faz de forma consistente. Na classe Conta, use o ctrl + 3 e comece a escrever hashCode para achar a opção de gerá-los. Então, selecione apenas o atributo número e mande gerar o hashCode e o equals. Como cou o código gerado?
1. (opcional, avançado) Crie uma classe de teste e verique se sua classe Conta funciona agora corretamente em um HashSet, isto é, que ela não guarda contas com números repetidos. Depois, remova o método hashCode. Continua funcionando? Dominar o uso e o funcionamento do hashCode é fundamental para o bom programador.    


<!-- @include: ../../../bib/bib.md -->