---
icon: edit
date: 2023-04-18 19:40:00.00 -3
tag:
  - sobrecarga
  - construtor
category:
  - aula
order: 5
---
# Construtor

- Método especial definido na classe e executado no momento que o objeto é instanciado
- Diferente de outro método pois não possui retorno
- Deve ter o mesmo nome da classe.
- Pode receber parâmetros
  - Normalmente utilizados para inicializar os valores dos atributos do objeto

```java{7-9}
class Conta{
  int numero;
  String cliente;
  double saldo;
  double limite;

  Conta(){

  }

  void saca(double quantidade){
    double novoSaldo = this.saldo - quantidade;
    this.saldo = novoSaldo;
  }

  void deposita(double quantidade){
    this.saldo += quantidade;
  }
}
```

### O que o new faz?

- A classe chamada é instanciada
- Memória é alocada
- Os passos definidos dentro do método construtor da classe são executados
  - Construtor é um método especial para criar e inicializar novas instâncias da classe. 
  - Construtores podem ser sobrecarregados


```java
class Conta{
  //...
  Conta(){
    this.limite = 100;
  }
  //...
}
```


## Sobrecarga 

- É a capacidade de definir métodos com o mesmo nome
  - Assinatura seja diferente. 
  - A mudança na assinatura ocorre alterando a quantidade e/ou tipo de parâmetros que um método recebe


- Sobrecarga é a capacidade de um objeto responder à mesma mensagem, com comportamentos (métodos) distintos, a depender dos tipos dos parâmetros recebidos
  - aplicarInjecao()
  - aplicarInjecao(String nomeRemedio)


```java
//...
public int somar(int v1, int v2){ 
    return v1 + v2; 
} 

public int operar(int v1, int v2){ 
    return operar('+', v1, v2); 
} 

public int operar(char op, int v1, int v2){ 
  switch(op){ 
    case '+': 
      return somar(v1, v2); 
      break; 
    case '-': 
      return subtrair(v1, v2); 
  } 
}
//...
```


```java
class Conta{
  //...
  Conta(int numero, String cliente){
    this.numero = numero;
    this.cliente = cliente;
    this.saldo = 0;
    this.limite = 0;
  }
  Conta(int numero, String cliente, double saldo, double limite){
    this(numero, cliente);
    this.saldo = saldo;
    this.limite = limite;
  }

  //...
}
```

```java
class Programa{
  public static void main(String[] args){
    Conta minhaConta1;
    minhaConta1 = new Conta(1, "Leandro1");
    minhaConta1.saldo = 100;
    Conta minhaConta2;
    minhaConta2 = new Conta(2, "Leandro2", 100, 0);   
  }
}
```
