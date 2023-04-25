package modelagemDVD;

/*
Utilizando os conhecimentos de O.O. construa um programa utilizando as informações abaixo. As características de um DVD devem ser definidas de acordo com as informações a seguir. Ao ser criado o DVD inicialmente está desligado. Seu volume pode alterar de 1 a 5 sendo que o nível inicial é 2. É possível inserir um filme no DVD. O filme possui as seguintes caraterísticas: nome, categoria e duração.

As seguintes operações podem ser realizadas pelo DVD:

ligar e desligar;
aumentar e diminuir volume;
inserir filme;
play e stop.
O programa deve obedecer as seguintes regras:

Só é possível fazer qualquer uma destas operações se o DVD estiver ligado;
Só é possível dar play no DVD se existir algum filme inserido;
Só é possível dar stop se o DVD estiver em play;
Ao dar play deve aparecer o nome e a duração do filme que está sendo exibido.

 */
public class DVD {
    public boolean ligado;
    private int volume;
    private Filme filme;
    private boolean emPlay;
    //Ao ser criado o DVD inicialmente está desligado. Seu volume pode alterar de 1 a 5 sendo que o nível inicial é 2.
    public DVD(){
        ligado = false;
        volume = 2;
        emPlay = false;
    }
    //Seu volume pode alterar de 1 a 5 
    public void aumentarVolume(){
        if(ligado){
            if(volume<5){
                volume++;
            }
        }
    }
    //Seu volume pode alterar de 1 a 5 
    public void diminuirVolume(){
        if(ligado && volume>1){
            volume--;
        }
    }
    //método de acesso
    public int getVolume() {
        return volume;
    }
    //método de acesso
    public void setVolume(int volume) {
        if(ligado){
            if(this.volume<=5 && this.volume>=1){
                this.volume=volume;
            }
        }
    }

    //É possível inserir um filme no DVD. 
    public void inserirFilme(Filme filme){
        if(ligado){
            if(this.filme==null){
                this.filme = filme;
            }
        }
    }
    public Filme removerFilme(){
        stop();
        Filme filmeRemovido = this.filme;
        this.filme = null;
        return filmeRemovido; 
    }

    //ligar e desligar;
    public void ligar(){
        ligado = true;
    }
    public void desligar(){                
        ligado = false;
    }
    //play e stop.
    //Só é possível dar play no DVD se existir algum filme inserido
    //Ao dar play deve aparecer o nome e a duração do filme que está sendo exibido.
    public void play(){
        if(ligado){
            if(filme!= null){
                emPlay = true;
                System.out.println(filme.getNome()+" - "+filme.getDuracao());
            }
        }
    }
    //Só é possível dar stop se o DVD estiver em play;
    public void stop(){
        if(ligado){
            if(emPlay){
                emPlay = false;
            }
        }
    }
    @Override
    public String toString() {
        return "DVD [ligado=" + ligado + ", volume=" + volume + ", filme=" + filme + ", emPlay=" + emPlay + "]";
    }

    public boolean isLigado() {
        return ligado;
    }
    public void setLigado(boolean ligado) {
        this.ligado = ligado;
    }    
}