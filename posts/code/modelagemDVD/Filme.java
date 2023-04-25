package modelagemDVD;
/*
O filme possui as seguintes caraterísticas: nome, categoria e duração.
 */
public class Filme {
    private String nome;
    private String categoria;
    private double duracao;
    
    public Filme(String nome, String categoria, double duracao) {
        this.nome = nome;
        this.categoria = categoria;
        this.duracao = duracao;
    }

    public String getNome() {
        return nome;
    }
    public double getDuracao() {
        return duracao;
    }
    public String getCategoria() {
        return categoria;
    }

    @Override
    public String toString() {
        return "Filme [nome=" + nome + ", categoria=" + categoria + ", duracao=" + duracao + "]";
    }

    

    
}
