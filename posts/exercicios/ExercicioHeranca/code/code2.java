Animal a5 = new Cachorro();
a5.mover();
a5.mamar();
Cachorro c5 = (Cachorro) a5;
c5.mover();
c5.mamar();

Mamifero m5 = new Morcego();
m5.mover();
m5.mamar();
Morcego mo5 = (Morcego) m5;
mo5.mover();
mo5.mamar();

Cachorro c6 = new Cachorro();
Mamifero m6 = c6;
Animal a6 = m6;
Morcego mo6 = a6;
