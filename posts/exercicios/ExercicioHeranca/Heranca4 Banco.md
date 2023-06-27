---
icon: study
date: 2023-06-16 20:30:00.00 -3
tag:
  - heranca
category:
  - exercicio
sidebar: false

---

# Exercício de Herança 4 (Sistema banco)


1. Vamos criar uma classe `Conta`, que possua um saldo os métodos para pegar saldo, depositar e sacar
    - Crie a classe `Conta`
    - Adicione o atributo saldo
        - Crie os métodos `getSaldo()`, `deposita(double)` e `saca(double)`
1. Adicione um método na classe `Conta`, que atualiza essa conta de acordo com uma taxa percentual fornecida    
1. Crie duas subclasses da classe `Conta`: `ContaCorrente` e `ContaPoupanca`. Ambas terão o método atualiza reescrito: A `ContaCorrente` deve atualizar-se com o dobro da taxa e a `ContaPoupanca` deve atualizar-se com o triplo da taxa. Além disso, a `ContaCorrente` deve reescrever o método deposita, a fim de retirar uma taxa bancária de dez centavos de cada depósito.
    - Crie as classes `ContaCorrente` e `ContaPoupanca`. Ambas são filhas da classe `Conta`;
    - Reescreva o método atualiza na classe ContaCorrente, seguindo o enunciado;
    - Repare que, para acessar o atributo saldo herdado da classe `Conta`, você vai precisar trocar o modificador de visibilidade de saldo para protected;
    - Reescreva o método atualiza na classe `ContaPoupanca`, seguindo o enunciado:
    - Na classe `ContaCorrente`, reescreva o método deposita para descontar a taxa bancária de dez centavos:        

    <figure>

    ```plantuml
    @startuml
    class Conta{
        +double saldo;
        +deposita(double)
        +saca(double)
        +atualiza(double taxa)
    }
    Conta <|-- ContaPoupanca
    Conta <|-- ContaCorrente
    @enduml
    ```

    </figure>

1. Crie uma classe com método main e instancie essas classes, atualize-as e veja o resultado. Algo como:                
    ```java
    public class TestaContas {
        public static void main(String[] args) {
            Conta c = new Conta();
            ContaCorrente cc = new ContaCorrente();
            ContaPoupanca cp = new ContaPoupanca();
            c.deposita(1000);
            cc.deposita(1000);
            cp.deposita(1000);
            c.atualiza(0.01);
            cc.atualiza(0.01);
            cp.atualiza(0.01);
            System.out.println(c.getSaldo());
            System.out.println(cc.getSaldo());
            System.out.println(cp.getSaldo());
        }
    }
    ```
1. Vamos criar uma classe que seja responsável por fazer a atualização de todas as contas bancárias e gerar um relatório com o saldo anterior e saldo novo de cada uma das contas. Além disso, conforme atualiza as contas, o banco quer saber quanto do dinheiro do banco foi atualizado até o momento. Por isso, precisamos ir guardando o saldoTotal e adicionar um getter à classe.
    ```java
    public class AtualizadorDeContas {
        private double saldoTotal = 0;
        private double selic;
        public AtualizadorDeContas(double selic) {
            this.selic = selic;
        }
        public void roda(Conta c) {
            // aqui você imprime o saldo anterior, atualiza a conta,
            // e depois imprime o saldo final
            // lembrando de somar o saldo final ao atributo saldoTotal
        }
        // outros métodos, colocar o getter para saldoTotal!
    }
    ```
1. No método main, vamos criar algumas contas e rodá-las:
```java
public class TestaAtualizadorDeContas {
    public static void main(String[] args) {
        Conta c = new Conta();
        Conta cc = new ContaCorrente();
        Conta cp = new ContaPoupanca();
        c.deposita(1000);
        cc.deposita(1000);
        cp.deposita(1000);
        AtualizadorDeContas adc = new AtualizadorDeContas(0.01);
        adc.roda(c);
        adc.roda(cc);
        adc.roda(cp);
        System.out.println("Saldo Total: " + adc.getSaldoTotal());
    }
}
```

## Link para clonar remoritório

[https://github.com/20231-ifba-saj-ads-poo/exercicio_sistema_banco](https://github.com/20231-ifba-saj-ads-poo/exercicio_sistema_banco)
