import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as t,c as p,a,b as s,d as c,e as i}from"./app-adbb4a1c.js";const l={},u=i(`<h1 id="trabalhando-com-arraylist" tabindex="-1"><a class="header-anchor" href="#trabalhando-com-arraylist" aria-hidden="true">#</a> Trabalhando com ArrayList</h1><p><sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></p><p>Antes de chegarmos em toda a hierarquia das <code>Collections</code> vamos falar e utilizar um pouco o <code>ArrayList</code></p><h2 id="adicionando-elementos-em-uma-lista" tabindex="-1"><a class="header-anchor" href="#adicionando-elementos-em-uma-lista" aria-hidden="true">#</a> Adicionando elementos em uma lista</h2><p>Para criar um objeto do tipo ArrayList, certamente fazemos como sempre: utilizando o operador new. Mas repare que acabamos passando um pouco mais de informações. Ao declarar a referência a uma ArrayList, passamos qual o tipo de objeto com o qual ela trabalhará. Se queremos uma lista de nomes de aulas, vamos declarar <code>ArrayList&lt;String&gt;</code>. Crie a classe TestandoListas, adicionando os nomes de algumas aulas que teremos nesse curso:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">ArrayList</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestandoListas</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token class-name">String</span> aula1 <span class="token operator">=</span> <span class="token string">&quot;Modelando a classe Aula&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> aula2 <span class="token operator">=</span> <span class="token string">&quot;Conhecendo mais de listas&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> aula3 <span class="token operator">=</span> <span class="token string">&quot;Trabalhando com Cursos e Sets&quot;</span><span class="token punctuation">;</span>

        <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> aulas <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        aulas<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>aula1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        aulas<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>aula2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        aulas<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>aula3<span class="token punctuation">)</span><span class="token punctuation">;</span>        

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>aulas<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Qual é o resultado desse código? Ele mostra as aulas adicionadas em sequência! Por que isso acontece? Pois a classe ArrayList, ou uma de suas mães, reescreveu o método toString, para que internamente fizesse um for, concatenando os seus elementos internos separados por vírgula.</p><h2 id="removendo-elementos" tabindex="-1"><a class="header-anchor" href="#removendo-elementos" aria-hidden="true">#</a> Removendo elementos</h2><p>Bastante simples! O que mais podemos fazer com uma lista? As operações mais básicas que podemos imaginar, como por exemplo remover um determinado elemento. Usamos o método remove e depois mostramos o resultado para ver que a primeira foi removida:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>aulas<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>aulas<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Por que 0? Pois as listas, assim como a maioria dos casos no Java, são indexadas a partir do 0, e não do 1.</p><h2 id="percorrendo-uma-lista" tabindex="-1"><a class="header-anchor" href="#percorrendo-uma-lista" aria-hidden="true">#</a> Percorrendo uma lista</h2><p>Bem, talvez não seja a melhor das ideias fazer um System.out.println na nossa lista, pois talvez queiramos mostrar esses itens de alguma outra forma, como por exemplo um por linha. Como fazer isso? Utilizando o for de uma maneira especial, chamada de enhanced for, ou popularmente foreach. Lembrando que foreach não existe no Java como comando, e sim como um caso especial do for mesmo. Olhe o código:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> aula <span class="token operator">:</span> aulas<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Aula: &quot;</span> <span class="token operator">+</span> aula<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="acessando-elementos" tabindex="-1"><a class="header-anchor" href="#acessando-elementos" aria-hidden="true">#</a> Acessando elementos</h2><p>E se eu quisesse saber apenas a primeira aula? O método aqui é o get. Ele retorna o primeiro elemento se passarmos o 0 como argumento:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> primeiraAula <span class="token operator">=</span> aulas<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;A primeira aula é &quot;</span> <span class="token operator">+</span> primeiraAula<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Você pode usar esse mesmo método para percorrer a lista toda, em vez do tal do enhanced for. Para isso, precisamos saber quantos elementos temos nessa lista. Nesse caso, utilizamos o método size para limitar o nosso for:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> aulas<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;aula : &quot;</span> <span class="token operator">+</span> aulas<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mais-uma-forma-de-percorrer-elementos-agora-com-java-8" tabindex="-1"><a class="header-anchor" href="#mais-uma-forma-de-percorrer-elementos-agora-com-java-8" aria-hidden="true">#</a> Mais uma forma de percorrer elementos, agora com Java 8</h2><p>Uma outra forma de percorrer nossa lista é utilizando as sintaxes e métodos novos incluídos no Java 8. Temos um método (não um comando!) agora que se chama <code>forEach</code>. Ele recebe um objeto do tipo <code>Consumer</code>, mas o interessante é que você não precisa criá-lo, você pode utilizar uma sintaxe bem mais enxuta, mas talvez assustadora a primeira vista, chamada <em>lambda</em>. Repare:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>aulas<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>aula <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Percorrendo:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Aula &quot;</span> <span class="token operator">+</span> aula<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="referencias" tabindex="-1"><a class="header-anchor" href="#referencias" aria-hidden="true">#</a> Referências</h2><hr class="footnotes-sep">`,24),r={class:"footnotes"},d={class:"footnotes-list"},m={id:"footnote1",class:"footnote-item"},k={href:"https://www.alura.com.br/conteudo/java-collections--amp",target:"_blank",rel:"noopener noreferrer"},v=a("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1);function h(f,b){const n=o("ExternalLinkIcon");return t(),p("div",null,[u,a("section",r,[a("ol",d,[a("li",m,[a("p",null,[s("Java Collections: Dominando Listas, Sets e Mapas. "),a("a",k,[s("https://www.alura.com.br/conteudo/java-collections--amp"),c(n)]),s(". (Acessado em 21/10/2022) "),v])])])])])}const y=e(l,[["render",h],["__file","07_ArrayList.html.vue"]]);export{y as default};