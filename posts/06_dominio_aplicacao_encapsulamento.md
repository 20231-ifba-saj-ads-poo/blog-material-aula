---
icon: edit
date: 2023-04-18 19:40:00.00 -3
tag:
  - UML
  - encapsulamento
category:
  - aula
order: 6
---

# Encapsulamento

- Separar o programa em partes, tornando cada parte mais isolada possível uma da outra
- A ideia é tornar o software mais flexível, fácil de modificar e de criar novas implementações
- Permite utilizar o objeto de uma classe sem necessariamente conhecer sua implementação
- Protege o acesso direto aos atributos de uma instância fora da classe onde estes foram criados
- Uma grande vantagem do encapsulamento é que toda parte encapsulada pode ser modificada sem que os usuários da classe em questão sejam afetados

## Pacotes
- Forma de organizar classes dentro de uma estrutura de árvores. 
- Podemos entender a estrutura de árvores como os diretórios do sistema operacional. 
- O nome completo de uma classe é definido pelo seu pacote e o nome. 
- Organiza suas classes e bibliotecas
    - Os diretórios estão diretamente relacionados aos chamados pacotes e costumam agrupar classes de funcionalidade parecida
- No pacote java.util por exemplo, temos as classes Date, SimpleDateFormat e GregorianCalendar; todas elas trabalham com datas de formas diferentes
    - Significa que essas classes estão no diretório java/util/

<figure>

```plantuml
@startuml
@startsalt

{
    {T
        + java
        ++ util
        +++ Date
    }
}

@endsalt
@enduml
```

<figcaption>Representação da estrutura de diretório.</figcaption>
</figure>

- A palavra chave *package* indica qual pacote que contém a classe

```java
package java.util;
```

- Para usar uma classe ou um pacote você precisa usar a import palavra-chave:

```java
import pacote.Class;   // Importa uma única classe
import pacotenovo.*;   // Importa todas as classes do pacote
```
<figure>
<div class="multicolumn">

```plantuml
@startuml
package java  {
    package util  {    
    }
}
@enduml
```
```plantuml
@startuml
package java.util  {        
}
@enduml
```

</div>
<figcaption>Visualizações diferentes de subpacotes</figcaption>
</figure>

- O nome da classe na verdade para o compilador é
    - java.util.Date
    - java.util.SimpleDateFormat
    - java.util.GregorianCalendar
    - java.io.File

<figure>

```plantuml
@startuml
package java  {
    package util  {    
    }
    package io  {
    }
}
class java.util.Date
class java.util.SimpleDateFormat
class java.util.GregorianCalendar
class java.io.File
@enduml
```

<figcaption>Representação de classes em seus pacotes.</figcaption>
</figure>

## Importar uma classe

Se você encontrar uma classe que deseja usar, por exemplo, a classe *Scanner*, que é usada para obter a entrada do usuário, escreva o seguinte código:

```java
import java.util.Scanner;
```
No exemplo acima, *java.util* é um pacote, enquanto *Scanner* é uma classe do pacote *java.util*.

Para usar a classe *Scanner*, crie um objeto da classe e use qualquer um dos métodos disponíveis encontrados na documentação da classe *Scanner*. Em nosso exemplo, usaremos o método *nextLine()*, que é usado para ler uma linha completa:

```java
import java.util.Scanner;

class Main {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    System.out.println("Informe o nome");

    String nome = scanner.nextLine();
    System.out.println("nome é : " + nome);
  }
}
```
### Usar uma classe sem import

Para utilizar uma classe sem a palavra reservada `import` você pode referenciar a classe pelo nome completo (pacote.nomeClasse). Exemplo:

```java{3}
class Main {
  public static void main(String[] args) {
    java.util.Scanner scanner = new java.util.Scanner(System.in);
    System.out.println("Informe o nome");

    String nome = scanner.nextLine();
    System.out.println("nome é : " + nome);
  }
}
```


## Modificadores de acesso
- private
- protected
- public
- <padrão> (package, quando não é especificado nenhum dos 3 acima)

<figure>

```plantuml

@startuml
class A {
-int atributoA
#int atributoB
~int atributoC
+int atributoD
-int metodoA()
#int metodoB()
~int metodoC()
+int metodoD()
}

note left of A::atributoA
  private
end note
note left of A::atributoB
  protected
end note
note left of A::atributoC
  package
end note
note left of A::atributoD
  public
end note
note right of A::metodoA
  private
end note
note right of A::metodoB
  protected
end note
note right of A::metodoC
  package
end note
note right of A::metodoD
  public
end note
@enduml
```

<figcaption>Modificadores de acesso.</figcaption>
</figure>

- São aplicados a atributos, métodos, construtores e classes
- As classes só podem ser declaradas como public ou padrão
    - Uma classe com acesso padrão só pode ser detectada por classes do mesmo pacote
    - Uma classe com acesso público pode ser detectada por classes de todos os pacotes

- Private
    - Os membros privados só podem ser acessados por um código da mesma classe 
- Protected
    - Os membros protegidos podem ser acessados por outras classes do mesmo pacote, além de subclasses independente do pacote 
- Public
    - Os membros públicos podem ser acessados por todas as outras classes, mesmo de pacotes diferentes
- Padrão
    - Os membros padrão só podem ser acessados por outras classes do mesmo pacote

### Métodos de acesso (get e set)

Como os atributos/métodos privados ​​só podem ser acessadas dentro da mesma classe (uma classe externa não tem acesso a ela) é possível acessá-los se fornecermos métodos públicos *get* e *set*.

O *get* retorna o valor da variável e o *set* define o valor.

A sintaxe para ambos é que eles começam com *get* ou *set* seguido pelo nome do atributo com a primeira letra em maiúscula:

```java
public class Pessoa {
  private String nome; // private = acesso restrito
  // Get
  public String getNome() {
    return nome;
  }
  // Set
  public void setNome(String novoNome) {
    if(novoNome!= null && !novoNome.isEmpty() && !novoNome.isBlank()){
      this.nome = novoNome;
    }
  }
}
```
O método *get* retorna o valor da variável name.

O método *set* pega um parâmetro ( novoNome) e o atribui ao atributo *nome*. 

A palavra-chave `this` é usada para se referir ao objeto atual.

No entanto, como o atributo `name` é declarada como `private`, não podemos acessá-la de fora desta classe:

```java
public class Main {
  public static void main(String[] args) {
    Pessoa pessoa = new Pessoa();
    pessoa.nome = "João";  // error
    System.out.println(pessoa.nome); // error 
  }
}
```

Se o atributo foi declarada como *public,* esperaríamos a seguinte saída:
```shell
    João
```

No entanto, ao tentar acessar um atributo *private,* obtemos um erro:

```shell
    Main.java:4: error: nome has private access in Pessoa
        pessoa.nome = "João";
              ^
    Main.java:5: error: nome has private access in Pessoa
        System.out.println(pessoa.nome);
                                 ^
    2 errors
```
    
Em vez disso, usamos os métodos getNome()e setNome()para acessar e atualizar a variável:

Exemplo
```java
public class Main {
  public static void main(String[] args) {
    Pessoa pessoa = new Pessoa();
    pessoa.setNome("João"); // Seta o valor do atributo nome para "João"
    System.out.println(pessoa.getNome());
  }
}
```
saida 

```shell
    "João"
```
 
 
## Por que encapsulamento?

- Melhor controle dos atributos e métodos da classe
- Os atributos de classe podem ser somente leitura (se você usar apenas o método *get*) ou somente gravação (se você usar apenas o método *set*)
- Flexível: o programador pode alterar uma parte do código sem afetar outras partes
- Maior segurança de dados

## Estereótipo de uma Classe em UML

<figure>

```plantuml
@startuml
class NomeDaClasse{
    atributos
    metodos()
}
@enduml
```

<figcaption>Modelo de uma classe em UML.</figcaption>
</figure>


## Estrutura básica de uma classe

```java{3-5,7-11,13-18}
public class Carro {

    private String cor;
    private String marca;
    private int velocidade;

    public Carro(String cor, String marca){
        this.cor = cor;
        this.marca = marca;
        velocidade = 0;
    }

    public void acelerar(){
        velocidade++;
    }
    public void parar(){
        velocidade = 0; 
    }
}

```

```java
class Programa{
  public static void main(String[] args){
    Carro c1 = new Carro("vermelha","BMW");
    //Carro c2 = new Carro();// ERRO
  }
}

```

## Representação UML

<figure>

```plantuml
@startuml
class Carro {

    -String cor
    -String marca
    -int velocidade

    +Carro(String cor, String marca)
    +void acelerar()
    +void parar()
}
@enduml
```

<figcaption> UML da classe carro.</figcaption>
</figure>

- A UML é uma notação que podemos utilizar para representar classes e objetos em modelos computacionais

- Linguagem para representação de modelos visuais com um significado especifico e padronizado

- UML não é uma linguagem de programação

- Os modelos são representados através de diagramas que possuem semântica própria
O diagrama que representa a descrição das classes é o **Diagrama de Classes**


## Domínio de Aplicação

- Um domínio é composto pelas entidades, informações e processos relacionados a um determinado contexto.
- Uma aplicação pode ser desenvolvida para automatizar ou tornar factível as tarefas de um domínio. 
- Portanto, uma aplicação é basicamente o "reflexo" de um domínio.
- Para exemplificar, suponha que estamos interessados em desenvolver uma aplicação para facilitar as tarefas do cotidiano de um banco. Podemos identificar clientes, funcionários, agências e contas como entidades desse domínio. Assim como podemos identificar as informações e os processos relacionados a essas entidades.

### Outras classes do domínio de um sistema bancário

<figure>

```plantuml
@startuml

class  Cliente {
  String  nome
  int  codigo
}

class  CartaoDeCredito {
  int  numero
  String  dataDeValidade
}

class Agencia{
  int numero
}

class Conta{
  int numero
  String cliente
  double saldo
  double limite
}
@enduml  
```

<figcaption> UML de classes do domínio bancários.</figcaption>
</figure>