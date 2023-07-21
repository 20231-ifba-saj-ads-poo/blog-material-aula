---
icon: edit
date: 2023-02-02 19:00:00.00 -3
tag:
  - java
  - camadas
  - tiers
category:
  - aula
order: 16
---
<LoginLink />

[^IBM] [^JakartaEE] [^JAVAGUIDES]

# Arquitetura de três camadas (tiers)

A arquitetura de três camadas, que separa os aplicativos em três camadas de computação lógica e física, é a arquitetura de software predominante para aplicativos tradicionais de cliente-servidor.

## O que é arquitetura de três camadas?

A arquitetura de três camadas é uma arquitetura de aplicativo de software bem estabelecida que organiza aplicativos em três camadas de computação lógica e física: a camada de apresentação ou interface do usuário; a camada do aplicativo, onde os dados são processados; e a camada de dados, em que os dados associados ao aplicativo são armazenados e gerenciados.

O principal benefício da arquitetura de três camadas é que devido ao fato de cada camada executar sua própria infraestrutura, cada camada pode ser desenvolvida simultaneamente por uma equipe de desenvolvimento separada e pode ser atualizada ou ajustada conforme a necessidade sem impactar as outras camadas.

Por décadas, a arquitetura de três camadas era a arquitetura predominante para aplicativos de cliente-servidor. Atualmente, a maioria dos aplicativos de três camadas são alvos para a modernização, usando tecnologias nativas em cloud, como contêineres e microsserviços e para migração para a cloud.

## As três camadas em detalhe

<figure>

```plantuml

skinparam rectangle {
    roundCorner<<tier>> 25
}
left to right direction
rectangle Apresentação <<tier>>{
  frame "Desktop(Javafx)"{
    agent "Model(Entity)"
    agent Controller
    agent View 
  }
  frame web{
    frame lit{
      agent HTML
      agent CSS
      agent JavaScript 
    }
  }
  frame mobile{
    agent Android
    agent IOS
  }
}

rectangle Serviço <<tier>>{
  agent REST
  agent REST2
  agent REST3
}

rectangle Dados <<tier>>{
  frame Repository{
    agent  DAO
  }
}

'CSS -[hidden]- IOS
'IOS -[hidden]- Controller
'Controller -[hidden]- REST
'REST -[hidden]- Repository

Apresentação --> Serviço
Serviço --> Dados

hide REST2
hide REST3

```

<figcaption></figcaption>
</figure>

### Camada de apresentação

A camada de apresentação é a interface do usuário com o aplicativo. Sua principal finalidade é exibir e coletar informações do usuário. Essa camada de nível superior pode ser executada em um navegador da web ou como um aplicativo para desktop em uma interface gráfica com o usuário (GUI), por exemplo. As camadas de apresentação da web são geralmente desenvolvidos usando HTML, CSS e JavaScript. Os aplicativos para desktop podem ser escritos em uma variedade de linguagens, dependendo da plataforma.

### Camada de Serviço/Aplicação/Lógica/Negócio

A camada de serviço, também conhecida como a camada aplicação, lógica, de negócio ou a camada do meio, é o coração do aplicativo. Nesta camada, as informações coletadas na camada de apresentação são processadas - por vezes em relação a outras informações na camada de dados - usando a lógica de negócios, um conjunto específico de regras de negócio. A camada do aplicativo também pode incluir, excluir ou modificar dados na camada de dados.

### Camada de dados

A camada de dados, por vezes chamada de camada de banco de dados, camada de acesso a dados, é onde as informações processadas pelo aplicativo são armazenadas e gerenciadas. Este pode ser um sistema de gerenciamento de banco de dados relacional, como PostgreSQL, MySQL, MariaDB, Oracle, DB2 ou Microsoft SQL Server ou em um servidor de banco de dados NoSQL, como Cassandra, CouchDB ou MongoDB. 

Em um aplicativo de três camadas, toda a comunicação passa pela camada do serviço. A camada de apresentação e a camada de dados não podem se comunicar diretamente entre si.

### Camada (tier) vs. nível (layer)

Em discussões de arquitetura de três camadas, nível (layer) é frequentemente usado de forma intercambiável, e equivocadamente , por camada (tier), como em 'nível (layer) de apresentação' ou 'nível (layer) lógica de negócios'. 

Elas não são iguais. Um 'nível (layer)' refere-se a uma divisão funcional do software, mas uma 'camada (tier)' refere-se a uma divisão funcional do software que é executada em infraestrutura separada das outras divisões. O aplicativo de Contatos em seu telefone, por exemplo, é um aplicativo de três níveis (layers), mas um aplicativo de camada (tier) única, porque todos os três níveis (layers) são executados em seu telefone.

A diferença é importante, porque os níveis (layers) não podem oferecer os mesmos benefícios que as camadas (tiers).



<figure>

```plantuml
@startuml
'top to bottom direction
'left to right direction

!define ICONURL https://raw.githubusercontent.com/tupadr3/plantuml-icon-font-sprites/v2.4.0
!includeurl ICONURL/common.puml
!includeurl ICONURL/font-awesome-5/desktop.puml
!includeurl ICONURL/font-awesome-5/window_maximize.puml
!includeurl ICONURL/font-awesome-5/server.puml
!includeurl ICONURL/font-awesome-5/database.puml

together {
    frame Client-layer{
        FA5_DESKTOP(d1,desktop)
        FA5_WINDOW_MAXIMIZE(w1, browser)
    }

    frame AppServer-layer{
        FA5_SERVER(s1,Load\nBalance)
        FA5_SERVER(s2,business)
        FA5_SERVER(s3,business)
    }

    frame DBServer-layer{
        FA5_DATABASE(db1,db)
        FA5_DATABASE(db2,db)
    }

}

d1 -[hidden]left- w1
s1 -- s2
s1 -- s3
db1 -[hidden]left- db2

d1 -[dotted]- s1
w1 -[dotted]- s1

s2 -[dotted]- db1
s2 -[dotted]- db2
s3 -[dotted]- db1
s3 -[dotted]- db2

@enduml
```

<figcaption>Representação de níveis de uma aplicação</figcaption>
</figure>

## Benefícios da arquitetura de três camadas (tiers)

Novamente, o principal benefício da arquitetura de três camadas é a sua separação lógica e física da funcionalidade. Cada camada (tier) pode ser executada em um sistema operacional separado e plataforma de servidor - por exemplo, servidor web, servidor de aplicativos, servidor de banco de dados - que melhor se enquadra em seus requisitos funcionais. E cada camada é executada em pelo menos um hardware de servidor dedicado ou servidor virtual, por isso os serviços de cada camada podem ser customizados e otimizados sem impactar as outras camadas. 

Outros benefícios (em comparação com a arquitetura de duas camadas ou de camada única) incluem:

- **Desenvolvimento mais rápido**: Uma vez que cada camada pode ser desenvolvida simultaneamente por diferentes equipes, uma organização pode trazer o aplicativo para o mercado mais rapidamente e os programadores podem utilizar as mais recentes e melhores linguagens e ferramentas para cada camada.
- **Escalabilidade melhorada**: Qualquer camada pode ser ajustada em escala independentemente das outras conforme necessário.
- **Confiabilidade melhorada**: Uma indisponibilidade em uma camada é menos propensa a impactar a disponibilidade ou o desempenho das outras camadas.
- **Maior segurança**: Uma vez que a camada de apresentação e a camada de dados não podem se comunicar diretamente, uma camada do aplicativo bem projetada pode ter a função de uma espécie de firewall interno, impedindo injeções SQL e outros exploradores de vulnerabilidade mal-intencionados.

## Aplicativo de três camadas no desenvolvimento da web

No desenvolvimento da web, as camadas possuem nomes diferentes, mas desempenham funções semelhantes:

- **O servidor web** é a camada de apresentação e fornece a interface do usuário. Esta geralmente é uma página web ou website, como um site de comércio eletrônico em que o usuário inclui produtos ao carrinho de compras, inclui detalhes de pagamento ou cria uma conta. O conteúdo pode ser estático ou dinâmico e geralmente é desenvolvido usando HTML, CSS e Javascript.
- **O servidor de aplicativos** corresponde à camada do meio, abrigando a lógica de negócios usada para processar entradas do usuário. Para continuar o exemplo do comércio eletrônico, esta é a camada que consulta o banco de dados do inventário para retornar a disponibilidade do produto ou inclui detalhes a um perfil de cliente. Esse nível (layer) muitas vezes foi desenvolvido usando Python, Ruby ou PHP e executa uma estrutura, como Django, Ruby on Rails, Symphony ou ASP.NET, por exemplo.
- **O servidor de banco de dados** é a camada (tier) de dados ou back-end de um aplicativo da web. Ela é executada em softwares de gerenciamento de banco de dados, como MySQL, Oracle, DB2 ou PostgreSQL, por exemplo.

## Outras arquiteturas multicamada
Ao mesmo tempo que a arquitetura de três camadas é facilmente a arquitetura de aplicativos multicamada mais amplamente adotada, há outras que podem ser encontradas em seu trabalho ou em sua pesquisa.

## Arquitetura de duas camadas 
A arquitetura de duas camadas é a arquitetura de cliente-servidor original, composta por uma camada de apresentação e uma camada de dados. A lógica de negócios reside na camada de apresentação, na camada de dados ou em ambas. Na arquitetura de duas camadas, a camada de apresentação, e consequentemente o usuário final, tem acesso direto à camada de dados e a lógica de negócios é por vezes limitada. Um simples aplicativo de gerenciamento de contatos, em que os usuários podem inserir e recuperar dados de contato, é um exemplo de um aplicativo de duas camadas. 

## Arquitetura de n-camadas
Arquitetura de n-camadas, também chamada de arquitetura multicamada, refere-se a qualquer arquitetura de aplicativos com mais de uma camada. Mas aplicativos com mais de três níveis são raros, pois níveis adicionais oferecem poucos benefícios e podem deixar o aplicativo mais lento, mais difícil de gerenciar e mais caro de ser executado. Como resultado, a arquitetura de n-camadas e a arquitetura multicamada são geralmente sinônimas da arquitetura de três camadas.

<!-- @include: ../bib/bib.md -->