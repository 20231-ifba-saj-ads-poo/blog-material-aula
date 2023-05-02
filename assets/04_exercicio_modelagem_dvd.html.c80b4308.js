import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as o,a as n,b as s,d as c,e as a,r as i}from"./app.5cac9c68.js";const l={},u=a('<h1 id="exercicio-modelagem-dvd" tabindex="-1"><a class="header-anchor" href="#exercicio-modelagem-dvd" aria-hidden="true">#</a> Exerc\xEDcio: Modelagem DVD</h1><p><sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></p><ol><li><p>Utilizando os conhecimentos de O.O. construa um programa utilizando as informa\xE7\xF5es abaixo. As caracter\xEDsticas de um DVD devem ser definidas de acordo com as informa\xE7\xF5es a seguir. Ao ser criado o DVD inicialmente est\xE1 desligado. Seu volume pode alterar de 1 a 5 sendo que o n\xEDvel inicial \xE9 2. \xC9 poss\xEDvel inserir um filme no DVD. O filme possui as seguintes carater\xEDsticas: nome, categoria e dura\xE7\xE3o.</p><p>As seguintes opera\xE7\xF5es podem ser realizadas pelo DVD:</p><ul><li>ligar e desligar;</li><li>aumentar e diminuir volume;</li><li>inserir filme;</li><li>play e stop.</li></ul><p>O programa deve obedecer as seguintes regras:</p><ul><li>S\xF3 \xE9 poss\xEDvel fazer qualquer uma destas opera\xE7\xF5es se o DVD estiver ligado;</li><li>S\xF3 \xE9 poss\xEDvel dar play no DVD se existir algum filme inserido;</li><li>S\xF3 \xE9 poss\xEDvel dar stop se o DVD estiver em play;</li><li>Ao dar play deve aparecer o nome e a dura\xE7\xE3o do filme que est\xE1 sendo exibido.</li></ul></li></ol><h2 id="link" tabindex="-1"><a class="header-anchor" href="#link" aria-hidden="true">#</a> Link</h2>',4),k={href:"https://classroom.github.com/a/0PQdzwO-",target:"_blank",rel:"noopener noreferrer"},r=a(`<details class="custom-container details"><summary>Detalhe</summary><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">modelagemDVD</span><span class="token punctuation">;</span>

<span class="token comment">/*
Utilizando os conhecimentos de O.O. construa um programa utilizando as informa\xE7\xF5es abaixo. As caracter\xEDsticas de um DVD devem ser definidas de acordo com as informa\xE7\xF5es a seguir. Ao ser criado o DVD inicialmente est\xE1 desligado. Seu volume pode alterar de 1 a 5 sendo que o n\xEDvel inicial \xE9 2. \xC9 poss\xEDvel inserir um filme no DVD. O filme possui as seguintes carater\xEDsticas: nome, categoria e dura\xE7\xE3o.

As seguintes opera\xE7\xF5es podem ser realizadas pelo DVD:

ligar e desligar;
aumentar e diminuir volume;
inserir filme;
play e stop.
O programa deve obedecer as seguintes regras:

S\xF3 \xE9 poss\xEDvel fazer qualquer uma destas opera\xE7\xF5es se o DVD estiver ligado;
S\xF3 \xE9 poss\xEDvel dar play no DVD se existir algum filme inserido;
S\xF3 \xE9 poss\xEDvel dar stop se o DVD estiver em play;
Ao dar play deve aparecer o nome e a dura\xE7\xE3o do filme que est\xE1 sendo exibido.

 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DVD</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> ligado<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> volume<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Filme</span> filme<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">boolean</span> emPlay<span class="token punctuation">;</span>
    <span class="token comment">//Ao ser criado o DVD inicialmente est\xE1 desligado. Seu volume pode alterar de 1 a 5 sendo que o n\xEDvel inicial \xE9 2.</span>
    <span class="token keyword">public</span> <span class="token function">DVD</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        ligado <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        volume <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
        emPlay <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//Seu volume pode alterar de 1 a 5 </span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">aumentarVolume</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>ligado<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>volume<span class="token operator">&lt;</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                volume<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//Seu volume pode alterar de 1 a 5 </span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">diminuirVolume</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>ligado <span class="token operator">&amp;&amp;</span> volume<span class="token operator">&gt;</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            volume<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//m\xE9todo de acesso</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getVolume</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> volume<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//m\xE9todo de acesso</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setVolume</span><span class="token punctuation">(</span><span class="token keyword">int</span> volume<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>ligado<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>volume<span class="token operator">&lt;=</span><span class="token number">5</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>volume<span class="token operator">&gt;=</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>volume<span class="token operator">=</span>volume<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//\xC9 poss\xEDvel inserir um filme no DVD. </span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">inserirFilme</span><span class="token punctuation">(</span><span class="token class-name">Filme</span> filme<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>ligado<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>filme<span class="token operator">==</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>filme <span class="token operator">=</span> filme<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token class-name">Filme</span> <span class="token function">removerFilme</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Filme</span> filmeRemovido <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>filme<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>filme <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> filmeRemovido<span class="token punctuation">;</span> 
    <span class="token punctuation">}</span>

    <span class="token comment">//ligar e desligar;</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">ligar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        ligado <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">desligar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>                
        ligado <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//play e stop.</span>
    <span class="token comment">//S\xF3 \xE9 poss\xEDvel dar play no DVD se existir algum filme inserido</span>
    <span class="token comment">//Ao dar play deve aparecer o nome e a dura\xE7\xE3o do filme que est\xE1 sendo exibido.</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>ligado<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>filme<span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                emPlay <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>filme<span class="token punctuation">.</span><span class="token function">getNome</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">&quot; - &quot;</span><span class="token operator">+</span>filme<span class="token punctuation">.</span><span class="token function">getDuracao</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//S\xF3 \xE9 poss\xEDvel dar stop se o DVD estiver em play;</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>ligado<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>emPlay<span class="token punctuation">)</span><span class="token punctuation">{</span>
                emPlay <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;DVD [ligado=&quot;</span> <span class="token operator">+</span> ligado <span class="token operator">+</span> <span class="token string">&quot;, volume=&quot;</span> <span class="token operator">+</span> volume <span class="token operator">+</span> <span class="token string">&quot;, filme=&quot;</span> <span class="token operator">+</span> filme <span class="token operator">+</span> <span class="token string">&quot;, emPlay=&quot;</span> <span class="token operator">+</span> emPlay <span class="token operator">+</span> <span class="token string">&quot;]&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isLigado</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> ligado<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setLigado</span><span class="token punctuation">(</span><span class="token keyword">boolean</span> ligado<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>ligado <span class="token operator">=</span> ligado<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">modelagemDVD</span><span class="token punctuation">;</span>
<span class="token comment">/*
O filme possui as seguintes carater\xEDsticas: nome, categoria e dura\xE7\xE3o.
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Filme</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> nome<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> categoria<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">double</span> duracao<span class="token punctuation">;</span>
    
    <span class="token keyword">public</span> <span class="token class-name">Filme</span><span class="token punctuation">(</span><span class="token class-name">String</span> nome<span class="token punctuation">,</span> <span class="token class-name">String</span> categoria<span class="token punctuation">,</span> <span class="token keyword">double</span> duracao<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>nome <span class="token operator">=</span> nome<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>categoria <span class="token operator">=</span> categoria<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>duracao <span class="token operator">=</span> duracao<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getNome</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> nome<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">double</span> <span class="token function">getDuracao</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> duracao<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getCategoria</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> categoria<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Filme [nome=&quot;</span> <span class="token operator">+</span> nome <span class="token operator">+</span> <span class="token string">&quot;, categoria=&quot;</span> <span class="token operator">+</span> categoria <span class="token operator">+</span> <span class="token string">&quot;, duracao=&quot;</span> <span class="token operator">+</span> duracao <span class="token operator">+</span> <span class="token string">&quot;]&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    

    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">modelagemDVD</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Mesa</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">DVD</span> meuDVD <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DVD</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token class-name">Filme</span> filme1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Filme</span><span class="token punctuation">(</span><span class="token string">&quot;It&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Terror&quot;</span><span class="token punctuation">,</span> <span class="token number">600</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Filme</span> filme2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Filme</span><span class="token punctuation">(</span><span class="token string">&quot;It 2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Terror&quot;</span><span class="token punctuation">,</span> <span class="token number">800</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>meuDVD<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        meuDVD<span class="token punctuation">.</span><span class="token function">inserirFilme</span><span class="token punctuation">(</span>filme1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        meuDVD<span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>meuDVD<span class="token punctuation">)</span><span class="token punctuation">;</span>
        meuDVD<span class="token punctuation">.</span><span class="token function">ligar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        meuDVD<span class="token punctuation">.</span><span class="token function">inserirFilme</span><span class="token punctuation">(</span>filme1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//meuDVD.volume = 100;</span>
        meuDVD<span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        meuDVD<span class="token punctuation">.</span><span class="token function">aumentarVolume</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        meuDVD<span class="token punctuation">.</span><span class="token function">getVolume</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        meuDVD<span class="token punctuation">.</span><span class="token function">aumentarVolume</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        meuDVD<span class="token punctuation">.</span><span class="token function">aumentarVolume</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        meuDVD<span class="token punctuation">.</span><span class="token function">aumentarVolume</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        meuDVD<span class="token punctuation">.</span><span class="token function">aumentarVolume</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        meuDVD<span class="token punctuation">.</span><span class="token function">aumentarVolume</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        meuDVD<span class="token punctuation">.</span><span class="token function">diminuirVolume</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        meuDVD<span class="token punctuation">.</span><span class="token function">diminuirVolume</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        meuDVD<span class="token punctuation">.</span><span class="token function">diminuirVolume</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        meuDVD<span class="token punctuation">.</span><span class="token function">diminuirVolume</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        meuDVD<span class="token punctuation">.</span><span class="token function">diminuirVolume</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        meuDVD<span class="token punctuation">.</span><span class="token function">diminuirVolume</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        meuDVD<span class="token punctuation">.</span><span class="token function">diminuirVolume</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        meuDVD<span class="token punctuation">.</span><span class="token function">diminuirVolume</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        meuDVD<span class="token punctuation">.</span><span class="token function">diminuirVolume</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        meuDVD<span class="token punctuation">.</span><span class="token function">diminuirVolume</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>meuDVD<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Filme</span> filmeDevolvido <span class="token operator">=</span> meuDVD<span class="token punctuation">.</span><span class="token function">removerFilme</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        meuDVD<span class="token punctuation">.</span><span class="token function">inserirFilme</span><span class="token punctuation">(</span>filmeDevolvido<span class="token punctuation">)</span><span class="token punctuation">;</span>
        meuDVD<span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        filmeDevolvido <span class="token operator">=</span> meuDVD<span class="token punctuation">.</span><span class="token function">removerFilme</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        meuDVD<span class="token punctuation">.</span><span class="token function">inserirFilme</span><span class="token punctuation">(</span>filme2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        meuDVD<span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        filmeDevolvido <span class="token operator">=</span> meuDVD<span class="token punctuation">.</span><span class="token function">removerFilme</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        meuDVD<span class="token punctuation">.</span><span class="token function">inserirFilme</span><span class="token punctuation">(</span>filme1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        meuDVD<span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>        
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="footnote1" class="footnote-item"><p>Takenami, Igor. Introdu\xE7\xE3o a Programa\xE7\xE3o Orientada a Objetos. Salvador. 2011. (Apostila). <a href="#footnote-ref1" class="footnote-backref">\u21A9\uFE0E</a></p></li></ol></section>`,3);function d(m,v){const e=i("ExternalLinkIcon");return t(),o("div",null,[u,n("p",null,[s("link para entrega da tarefa: "),n("a",k,[s("https://classroom.github.com/a/0PQdzwO-"),c(e)])]),r])}const D=p(l,[["render",d],["__file","04_exercicio_modelagem_dvd.html.vue"]]);export{D as default};
