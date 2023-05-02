public class Quadrado {
    private Cor cor;
    private String tamanho;
    
    public Quadrado(Cor cor, String tamanho) {
        setTamanho(tamanho);
        setCor(cor);
    }
    public Cor getCor() {
        return cor;
    }
    public String getTamanho() {
        return tamanho;
    }
    public void setCor(Cor cor) {
        this.cor = cor;
    }
    public void setTamanho(String tamanho) {
        if(Integer.parseInt(tamanho)>0){
            this.tamanho = tamanho;    
        }        
    }    
}


