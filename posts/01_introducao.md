---
icon: edit
date: 2023-03-31 17:40:00.00 -3
tag:
  - java
  - paradigmas
category:
  - aula
order: 1
---

# Linguagens e paradigmas de programação


As informações desse capítulo foram retiradas basicamente de [^Pires] e [^Tedesco].


## Introdução

No passado escrevia-se programas utilizando apenas linguagens de baixo nível. A escrita é engessada, complexa e muito específica, sendo pouco acessível para os desenvolvedores no geral. Esse tipo de linguagem exige muito conhecimento de quem a programa (inclusive relacionado à forma com que o processador opera uma instrução-máquina).

Recentemente foi liberado o [código-conte](https://github.com/chrislgarry/Apollo-11) utilizado no computador que guiou a missão Apollo que teve como principal objetivo levar o homem à lua (na tão famigerada corrida espacial entre a União Soviética e os EUA), o *Apollo Guidance Computer.*

Um programa escrito em uma dessas linguagens, chamadas de baixo nível, é composto por uma série de instruções de máquina que determinam quais operações o processador deve executar. Essas instruções são convertidas para a linguagem que o processador entende, que é a linguagem binária (sequência de bits 0 e 1), que é categorizada como *First-generation programming language* (1GL), em livre tradução: linguagem de programação de primeira geração. 


## Linguagens de alto nível

Com a popularidade dos computadores criou-se um "problema" de alta demanda por software e, consequentemente, por programadores. Talvez você esteja pensando que isso não é exatamente um problema, e sim uma coisa boa, uma tendência, um novo mercado. Faz sentido, até certo ponto. O problema era encontrar mão de obra qualificada para codificar àquelas instruções tão complicadas.

Com isso, novas linguagens surgiram e, cada vez mais, aproximavam-se da linguagem humana. Isso abriu "fronteiras" para que uma enorme gama de novos desenvolvedores se especializassem. Tais linguagens são denominadas como sendo de alto nível. As linguagens modernas que hoje conhecemos e usamos são de alto nível: C, PHP, Java, Rust, C\#, Python, Ruby etc.

::: tip Dica
Quanto mais próxima da linguagem da máquina, mais baixo nível é a linguagem. Quanto mais próxima da linguagem humana, mais alto nível ela é.
:::

## Paradigmas das linguagens de programação

Quando uma linguagem de programação é criada, a partir das suas características, ela é categorizada em um ou mais paradigmas.

A definição do dicionário Aurélio para "paradigma":

- Algo que serve de exemplo geral ou de modelo.
- Conjunto das formas que servem de modelo de derivação ou de flexão.
- Conjunto dos termos ou elementos que podem ocorrer na mesma posição ou contexto de uma estrutura.

O paradigma de uma linguagem de programação é a sua identidade. Corresponde a um conjunto de características que, juntas, definem como ela opera e resolve os problemas. Algumas linguagens, inclusive, possuem mais de um paradigma, são as chamadas multi paradigmas.


Alguns dos principais paradigmas utilizados hoje no mercado:

- Funcional
- Lógico
- Declarativo
- Imperativo
- Orientado a objetos
- Orientado a eventos


### Paradigma funcional
O foco desse paradigma está na avaliação de funções. Como na matemática quando temos, por exemplo, uma função $f(x)$:

$$f(x) = x + 2$$

$x$ é um parâmetro (o valor de entrada) e, após a expressão ser avaliada, obtêm-se o resultado.

Se o valor de entrada for 2, o resultado da avaliação da nossa função será 4.

Algumas das linguagens que atendem a esse paradigma: F\# (da Microsoft), Lisp, Heskell, Erlang, Elixir, Mathematica.

É possível desenvolver de forma "funcional" mesmo em linguagens não estritamente funcionais. Por exemplo, no PHP, que é uma linguagem multi paradigma, teríamos:

```php
<?php

$sum = function($value) {
    return $value + 2;
};

echo $sum(2); // 4

```


### Paradigma lógico
Também é conhecido como "restritivo". Muito utilizado em aplicações de inteligência artificial. Esse paradigma chega no resultado esperado a partir de avaliações lógico-matemáticas. Se você já estudou lógica de predicados ficará confortável em entender como uma linguagem nesse paradigma opera.

Principais elementos desse paradigma:

- **Proposições:** base de fatos concretos e conhecidos.
- **Regras de inferência:** definem como deduzir proposições.
- **Busca:** estratégias para controle das inferências.


Exemplo:

**Proposição** 
: Chico é um gato.

**Regra de inferência**
: Todo gato é um felino.

**Busca**
: Chico é um felino?

A resposta para a **Busca** acima precisa ser **verdadeira**. A conclusão lógica é:


::: tip
Se Chico é um gato e todo gato é felino, então Chico é um felino.
:::

A ideia básica da programação em lógica é:

::: tip Prof. Dr. Sílvio do Lago Pereira – DTI / FATEC-SP.
Oferecer um arcabouço que permita inferir conclusões desejadas, a partir de premissas, representando o conhecimento disponível, de uma forma que seja computacionalmente viável.
:::

A linguagem mais conhecida que utiliza esse paradigma é a **Prolog.** Esse paradigma é pouco utilizado em aplicações comerciais, seu uso se dá mais na área acadêmica.


### Paradigma declarativo
O paradigma declarativo é baseado no lógico e funcional. Linguagens declarativas descrevem o que fazem e não exatamente como suas instruções funcionam.

Linguagens de marcação são o melhor exemplo: HTML, XML, XSLT, XAML etc. Não obstante, o próprio Prolog – reconhecido primariamente pelo paradigma lógico – também é uma linguagem declarativa. Abaixo alguns exemplos dessas linguagens.

HTML:
```html
<article>
  <header>
    <h1>Linguagens e paradigmas de programação</h1>
  </header>
</article>
```

SQL:
```sql
SELECT nome FROM usuario WHERE id = 10
```

### Paradigma imperativo

Você já ouviu falar em "programação procedural" ou em "programação modular"? De modo geral, são imperativas.

Linguagens clássicas como C, C++, PHP, Perl, C\#, Ruby etc, "suportam" esse paradigma. Ele é focado na mudança de estados de variáveis (ao contrário dos anteriores).

Exemplo:
```c
if(option == 'A') {
    print("Opção 'A' selecionada.");
}
```

A impressão só será realizada se o valor da variável $option$ for igual a $A$.


### Paradigma orientado a objetos

Esse é, entre todos, talvez o mais difundido. Nesse paradigma, ao invés de construirmos nossos sistemas com um conjunto estrito de procedimentos, assim como se faz em linguagens "fortemente" imperativas como o Cobol, Pascal etc, na orientação a objetos utilizamos uma lógica bem próxima do mundo real, lidando com objetos, estruturas que já conhecemos e sobre as quais possuímos uma grande compreensão.

::: tip Dica
OO é sigla para orientação a objetos
:::

O paradigma orientado a objetos tem uma grande preocupação em esconder o que não é importante e em realçar o que é importante. Nele, implementa-se um conjunto de classes que definem objetos. Cada classe determina o comportamento (definido nos métodos) e estados possíveis (atributos) de seus objetos, assim como o relacionamento entre eles.

Esse é o paradigma mais utilizado em aplicações comerciais e as principais linguagens o implementam: C\#, Java, PHP, Ruby, C++, Python etc.


### Paradigma orientado a eventos

Toda linguagem que faz uso de interface gráfica é baseada nesse paradigma. Nele, o fluxo de execução do software é baseado na ocorrência de eventos externos, normalmente disparados pelo usuário.

O usuário, ao interagir, decidirá em qual momento digitar, clicar no botão de "salvar" etc. Essas decisões dispararão eventos. O usuário é, então, o responsável por quando os eventos acontecerão, de tal forma que fluxo do programa fica sensivelmente atrelado à ocorrências desses eventos.

Linguagens de programação que fazem uso desse paradigma:
- Delphi
- Visual Basic
- C\#
- Python
- Java etc.



# Java

Nesse capítulo teremos um compilado de informações que foram reunidas de vários lugares ([^Deitel], [^Dornelles], [^Oracle], [^Santos]). Bons Estudos.

## Por que Java?

Existem diversas linguagens de programação orientadas a objeto, cada uma com diferentes características e apelos de mercado, educacionais ou acadêmicos. Segue, algumas das razões da escolha da linguagem Java.

**Java é obrigatoriamente orientada a objetos**
:   Algumas linguagens permitem que objetos e variáveis existam em diversos pontos de um programa, como se estivessem desatreladas de qualquer estrutura. Em Java, todas as variáveis e métodos devem estar localizados dentro de classes, forçando o uso de orientação a objetos até mesmo em tarefas simples. Dessa forma, o estudante de programação orientada a objetos que esteja usando Java estará usando mais as técnicas de POO.

**Java é simples**
:   A estrutura de programas e classes em Java segue a organização de linguagens tradicionais como C e C++, mas sem elementos que tornam programas e programação mais complexos. Após o aprendizado dos conceitos básicos de programação orientada a objetos, o estudante da linguagem pode começar a criar aplicativos úteis e complexos. A simplicidade se reflete também na maneira com que arquivos contendo programas em Java são compilados e executados: se as recomendações básicas forem seguidas, o compilador se encarregará de compilar todas as classes necessárias em uma aplicação automaticamente, sem necessidade de arquivos adicionais de configuração e inclusão de bibliotecas.

**Java é portátil**
:   O código-fonte de um programa ou classe em Java pode ser compilado em qualquer computador, usando qualquer sistema operacional, contanto que este tenha uma máquina virtual Java adequada. Adicionalmente, as classes criadas podem ser copiadas e executadas em qualquer computador nas mesmas condições, aumentando a utilidade da linguagem através da independência de plataformas, contanto que versões compatíveis da máquina virtual sejam usadas. 

**Java é gratuita**
:   A máquina virtual Java, mencionada acima, está à disposição para cópia no site da Oracle e em vários outros. Compiladores simples, de linha de comando (sem interfaces visuais elaboradas) fazem parte do JDK, o ambiente de desenvolvimento gratuito de Java. Aplicações em Java precisam de uma máquina virtual para sua execução, mas não existem limitações na distribuição da máquina virtual, fazendo de Java uma plataforma extremamente econômica para desenvolvedores e usuários finais.

**Java é robusta**
:   Administração de memória (alocação e liberação) e o uso de ponteiros, duas das fontes de erros e bugs mais frequentes em programas em C e C++, são administrados internamente na linguagem, de forma transparente para o programador. De maneira geral, programas em Java tem restrições no acesso à memória que resultam em maior segurança para os programas sem diminuir a utilidade dos mesmos. Java também tem um poderoso mecanismo de exceções que permite melhor tratamento de erros em tempo de execução dos programas.

**Java tem bibliotecas prontas para diversas aplicações**
:   As bibliotecas de classes de Java contém várias classes que implementam diversos mecanismos de entrada e saída, acesso à Internet, manipulação de Strings em alto nível, poderosas estruturas de dados, utilitários diversos e um conjunto completo de classes para implementação de interfaces gráficas. Vale a pena relembrar que estas bibliotecas são padrão de Java - qualquer máquina virtual Java permite o uso destas bibliotecas, sem a necessidade de instalar pacotes adicionais, e que mesmo que o compilador usado não tenha interface gráfica similar à de linguagens visuais, os programas criados com este compilador podem ter interfaces gráficas complexas.


## História

A história da tecnologia Java começou modestamente no final de 1990, quando a empresa Sun Microsystems encarregou seus funcionários Patrick Naughton, Mike Sheridan e James Gosling da tarefa de descobrir qual seria a próxima grande tendência na área da computação. O projeto, denominado "Green Project", chegou à seguinte conclusão preliminar: a integração dos dispositivos controlados digitalmente com os computadores iria se tornar uma tendência muito importante.

Aquele revolucionário dispositivo remoto, conectado à rede sem fio, rodava uma versão do sistema operacional Unix e possuía uma tela sensível ao toque (touchscreen) – lembre-se que estávamos em 1992 e, para se ter uma ideia do desenvolvimento da Internet naquela época, basta dizer que, no final do ano, havia apenas 26 servidores Web no mundo! A interface de usuário incluía também um assistente de ajuda: um simpático personagem de desenho animado chamado **Duke,** que mais tarde seria adotado como mascote da plataforma Java.

O Star 7 incorporava "uma nova linguagem de programação dinâmica, compacta, segura, distribuída, robusta, interpretada, incorporando garbage collection e multi-threading, neutra à arquitetura de hardware e de alto desempenho" a fim de solucionar os vários problemas pertinentes ao desenvolvimento de programas para execução na plataforma Star 7. James Gosling criou a linguagem e deu-lhe o nome de "Oak", em homenagem a um enorme carvalho que podia ser visto da janela do seu escritório.

O "Green Project" teve o seu grande momento de glória e surgiu a oportunidade de produzir dispositivos similares ao Star 7 para consumidores em potencial na indústria de TV a cabo. "Equipe Green" mudou de nome para "FirstPerson" e preparou um filme para demonstração da sua tecnologia aos produtores de transcodificadores de TV e aluguel de vídeo. Mas, infelizmente para a equipe, aqueles setores, ainda na sua infância, estavam em processo de criação de modelos de negócio viáveis. A despeito do insucesso da "FirstPerson" com a TV a cabo, o tipo de configuração da sua tecnologia de rede era idêntica à configuração de rede para a Internet, que passava por um avassalador processo de popularização.

A Internet usava a *HyperText Markup Language* (HTML) para transportar o conteúdo de mídia – texto, vídeo, imagens, áudio, etc. – através de uma rede de dispositivos heterogêneos. De uma forma similar, Java (um nome substituto para Oak, a fim de contornar problemas de natureza legal com outra linguagem de nome idêntico) também movimentava o conteúdo de mídia através de uma rede de dispositivos heterogêneos, mas ia além: transportava também o seu "comportamento", na forma de applets. A linguagem HTML não conseguia fazer isso.

Para demonstrar a utilidade de Java numa Web baseada na Internet, a "FirstPerson" fez um clone do navegador Mosaic e, em 1994, o navegador WebRunner (mais tarde conhecido como HotJava), "deu vida, pela primeira vez, a objetos animados e a conteúdo executável dinamicamente dentro de um navegador."

John Gage, diretor do Escritório de Ciências da Sun, e James Gosling, fizeram uma demonstração do WebRunner numa reunião com profissionais da Internet e da área de entretenimento no início de 1995. A plateia aplaudiu calorosamente as demonstrações de uma molécula tridimensional giratória e a animação de um algorítimo de ordenação preparado por Gosling, embutidas em páginas Web apresentadas no WebRunner. O futuro certamente havia chegado. A notícia se espalhou rapidamente, e a "FirstPerson" disponibilizou o WebRunner para download.

Milhares de downloads chamaram a atenção da Sun para a popularidade de Java, e ela disponibilizou uma área no seu site para divulgar essa tecnologia. Em maio de 1995, durante a abertura da feira SunWorld da Sun, o líder do projeto Netscape, Marc Andreessen, anunciou que iriam integrar Java ao novo navegador para a Web Netscape.

O Java é agora utilizado para desenvolver aplicativos corporativos de grande porte, aprimorar a funcionalidade de servidores da web (os computadores que fornecem o conteúdo que vemos em nossos navegadores), fornecer aplicativos para dispositivos voltados ao consumo popular (por exemplo, telefones celulares, smartphones, televisão, set-up boxes etc.) e para muitos outros propósitos. Ainda, ele também é a linguagem-chave para desenvolvimento de aplicativos Android adequados a smartphones e tablets. 

Devida a essa grande aplicabilidade em abril de 2009, a Oracle ofereceu US\$ 7,4 bilhões pela aquisição da Sun Microsystems e a proposta foi aceita. Essa aquisição deu à Oracle a propriedade de vários produtos, incluindo o Java e o sistema operacional Solaris. Em comunicado, a Oracle afirmou que o Java foi o software mais importante adquirido ao longo de sua história. Muitas especulações foram feitas a cerca do futuro do Java depois de passar a ser propriedade da Oracle. Mais com certeza essa aquisição contribuiu muito para que o Java tivesse um salto qualitativo.



## Máquina Virtual

Em uma linguagem de programação como C e Pascal, temos a seguinte situação quando vamos compilar um programa:

<figure>

```plantuml
@startuml
node "Código binário para \nS.O. específico" as n1
artifact f1 as "Código fonte \nem C"
f1 -> n1 : compilação
@enduml
```

<figcaption> Representação do processo de compilação.</figcaption>
</figure>

O código fonte é compilado para código de máquina específico de uma plataforma e sistema operacional.

Muitas vezes o próprio código fonte é desenvolvido visando uma única plataforma!

Esse código executável (binário) resultante será executado pelo sistema operacional e, por esse motivo, ele deve saber conversar com o sistema operacional em questão.

<figure>

```plantuml
@startuml

!define SPRITESURL https://raw.githubusercontent.com/plantuml-stdlib/gilbarbara-plantuml-sprites/v1.0/sprites
!includeurl SPRITESURL/microsoft-windows.puml
!includeurl SPRITESURL/ubuntu.puml
!includeurl SPRITESURL/apple.puml


skinparam monochrome false

artifact f1 as "Código fonte \nem C'"
artifact f2 as "Código fonte \nem C''"
artifact f3 as "Código fonte \nem C'''"

node "exe" as b1
node "bin" as b2
node "app" as b3

rectangle "<$microsoft-windows>" as exe
rectangle "<$ubuntu>" as bin
rectangle "<$apple>" as app
f1-->b1
f2-->b2
f3-->b3

b1-->exe
b2-->bin
b3-->app
@enduml
```


<figcaption> Aplicação associada ao Sistema Operacional.</figcaption>
</figure>

Isto é, temos um código executável para cada sistema operacional. É necessário compilar uma vez para Windows, outra para o Linux, e assim por diante, caso a gente queira que esse nosso software possa ser utilizado em várias plataformas. Esse é o caso de aplicativos como o Eclipse, Firefox e outros.

Como foi dito anteriormente, na maioria das vezes, a sua aplicação se utiliza das bibliotecas do sistema operacional, como, por exemplo, a de interface gráfica para desenhar as "telas". A biblioteca de interface gráfica do Windows é bem diferente das do Linux: como criar então uma aplicação que rode de forma parecida nos dois sistemas operacionais?

Precisamos reescrever um mesmo pedaço da aplicação para diferentes sistemas operacionais, já que eles não são compatíveis.

Já o Java utiliza do conceito de máquina virtual, onde existe, entre o sistema operacional e a aplicação, uma camada extra responsável por "traduzir" - mas não apenas isso - o que sua aplicação deseja fazer para as respectivas chamadas do sistema operacional onde ela está rodando no momento:

<figure>

```plantuml
@startuml

!define SPRITESURL https://raw.githubusercontent.com/plantuml-stdlib/gilbarbara-plantuml-sprites/v1.0/sprites
!includeurl SPRITESURL/microsoft-windows.puml
!includeurl SPRITESURL/ubuntu.puml
!includeurl SPRITESURL/apple.puml
!includeurl SPRITESURL/java.puml


skinparam monochrome false

artifact f1 as "Código fonte \nem Java"

node "Bytecode" as b1

rectangle "<$java>\n   JVM" as jvm


rectangle "<$microsoft-windows>" as exe
rectangle "<$ubuntu>" as bin
rectangle "<$apple>" as app
f1->b1
b1->jvm
jvm-->exe
jvm-->bin
jvm-->app
@enduml
```

<figcaption> Aplicação rodando em JVM.</figcaption>
</figure>


Dessa forma, a maneira com a qual você abre uma janela no Linux ou no Windows é a mesma: você ganha independência de sistema operacional. Ou, melhor ainda, independência de plataforma em geral: não é preciso se preocupar em qual sistema operacional sua aplicação está rodando, nem em que tipo de máquina, configurações, etc.

Perceba que uma máquina virtual é um conceito bem mais amplo que o de um interpretador. Como o próprio nome diz, uma máquina virtual é como um "computador de mentira": tem tudo que um computador tem. Em outras palavras, ela é responsável por gerenciar memória, threads, a pilha de execução, etc.

Sua aplicação roda sem nenhum envolvimento com o sistema operacional! Sempre conversando apenas com a Java Virtual Machine (JVM).

Essa característica é interessante: como tudo passa pela JVM, ela pode tirar métricas, decidir onde é melhor alocar a memória, entre outros. Uma JVM isola totalmente a aplicação do sistema operacional. Se uma JVM termina abruptamente, só as aplicações que estavam rodando nela irão terminar: isso não afetará outras JVMs que estejam rodando no mesmo computador, nem afetará o sistema operacional.

Essa camada de isolamento também é interessante quando pensamos em um servidor que não pode se sujeitar a rodar código que possa interferir na boa execução de outras aplicações.

Essa camada, a máquina virtual, não entende código java, ela entende um código de máquina específico. Esse código de máquina é gerado por um compilador java, como o *javac,* e é conhecido por *bytecode*, pois existem menos de 256 códigos de operação dessa linguagem, e cada "opcode" gasta um byte. O compilador Java gera esse *bytecode* que, diferente das linguagens sem máquina virtual, vai servir para diferentes sistemas operacionais, já que ele vai ser "traduzido" pela JVM.

::: tip Write once, run anywhere
Esse era um slogan que a Sun usava para o Java, já que você não precisa reescrever partes da sua aplicação toda vez que quiser mudar de sistema operacional
:::



## Java lento? Hotspot e JIT
Hotspot é a tecnologia que a JVM utiliza para detectar pontos quentes da sua aplicação: código que é executado muito, provavelmente dentro de um ou mais loops. Quando a JVM julgar necessário, ela vai compilar estes códigos para instruções realmente nativas da plataforma, tendo em vista que isso vai provavelmente melhorar a performance da sua aplicação. Esse compilador é o JIT: Just inTime Compiler, o compilador que aparece "bem na hora" que você precisa. 

Você pode pensar então: porque a JVM não compila tudo antes de executar a aplicação? É que teoricamente compilar dinamicamente, a medida do necessário, pode gerar uma performance melhor. O motivo é simples: imagine um .exe gerado pelo VisualBasic, pelo gcc ou pelo Delphi; ele é estático. Ele já foi otimizado baseado em heurísticas, o compilador pode ter tomado uma decisão não tão boa. 

Já a JVM, por estar compilando dinamicamente durante a execução, pode perceber que um determinado código não está com performance adequada e otimizar mais um pouco aquele trecho, ou ainda mudar a estratégia de otimização. É por esse motivo que as JVMs mais recentes em alguns casos chegam a ganhar de códigos C compilados com o GCC 3.x.



## Versões do Java e a confusão do Java2
Java 1.0 e 1.1 são as versões muito antigas do Java, mas já traziam bibliotecas importantes como o JDBC e o java.io. 

Com o Java 1.2 houve um aumento grande no tamanho da API, e foi nesse momento em que trocaram a nomenclatura de Java para Java2, com o objetivo de diminuir a confusão que havia entre Java e Javascript. Mas lembre-se, não há versão "Java 2.0", o 2 foi incorporado ao nome, tornando-se Java2 1.2. 

Depois vieram o Java2 1.3 e 1.4, e o Java 1.5 passou a se chamar Java 5, tanto por uma questão de marketing e porque mudanças significativas na linguagem foram incluídas. É nesse momento que o "2" do nome Java desaparece. Perceba que para fins de desenvolvimento, o Java 5 ainda é referido como Java 1.5. Hoje a última versão disponível do Java é a 20 [^java20].

[^java20]:https://www.oracle.com/news/announcement/oracle-releases-java-20-2023-03-21/



## JVM? JRE? JDK? O que devo baixar?
O que gostaríamos de baixar no site da Oracle?

JVM
:   Apenas a virtual machine, esse download não existe, ela sempre vem acompanhada.

JRE
:   Java Runtime Environment, ambiente de execução Java, formado pela JVM e bibliotecas, tudo que você precisa para executar uma aplicação Java. Mas nós precisamos de mais.

JDK
:   Java Development Kit: Nós, desenvolvedores, faremos o download do JDK do Java SE (Standard Edition). Ele é formado pela JRE somado a ferramentas, como o compilador. 


Tanto o JRE e o JDK podem ser baixados do site [http://www.oracle.com/technetwork/java/](http://www.oracle.com/technetwork/java/). Para encontrá-los, acesse o link Java SE dentro dos top downloads. Consulte o apêndice de instalação do JDK para maiores detalhes.


## Referências

@include(../bib/bib.md)
