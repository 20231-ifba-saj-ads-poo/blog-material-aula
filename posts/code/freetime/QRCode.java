package br.edu.ifba.saj.ads.poo;

public class QRCode {
    private Pedido pedido;

    public QRCode(Pedido pedido) {
        this.pedido = pedido;
    }
    //metodo exibir a imagem do QRCode basada no pedido
    public void getImage(){        

    }
    public Pedido getPedido() {
        return pedido;
    }

}
