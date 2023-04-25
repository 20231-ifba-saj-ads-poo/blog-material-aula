package modelagemDVD;

public class Mesa {
    public static void main(String[] args) {
        DVD meuDVD = new DVD();
        
        Filme filme1 = new Filme("It", "Terror", 600);
        Filme filme2 = new Filme("It 2", "Terror", 800);
        System.out.println(meuDVD.toString());
        meuDVD.inserirFilme(filme1);
        meuDVD.play();
        System.out.println(meuDVD);
        meuDVD.ligar();
        meuDVD.inserirFilme(filme1);
        //meuDVD.volume = 100;
        meuDVD.play();
        meuDVD.aumentarVolume();
        meuDVD.getVolume();
        meuDVD.aumentarVolume();
        meuDVD.aumentarVolume();
        meuDVD.aumentarVolume();
        meuDVD.aumentarVolume();
        meuDVD.aumentarVolume();
        meuDVD.diminuirVolume();
        meuDVD.diminuirVolume();
        meuDVD.diminuirVolume();
        meuDVD.diminuirVolume();
        meuDVD.diminuirVolume();
        meuDVD.diminuirVolume();
        meuDVD.diminuirVolume();
        meuDVD.diminuirVolume();
        meuDVD.diminuirVolume();
        meuDVD.diminuirVolume();
        System.out.println(meuDVD);
        Filme filmeDevolvido = meuDVD.removerFilme();
        meuDVD.inserirFilme(filmeDevolvido);
        meuDVD.play();
        filmeDevolvido = meuDVD.removerFilme();
        meuDVD.inserirFilme(filme2);
        meuDVD.play();
        filmeDevolvido = meuDVD.removerFilme();
        meuDVD.inserirFilme(filme1);
        meuDVD.play();        
    }
}
