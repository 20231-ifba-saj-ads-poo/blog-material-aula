package br.edu.ifba.saj.ads.poo;

import java.util.ArrayList;

public class Lanchonete {

    private ArrayList<Item> itens;
    private ArrayList<Pedido> pedidos;
    

    public Lanchonete(){
        itens = new ArrayList<>();
        pedidos = new ArrayList<>();
    }

    public void addItem(Item item) {
        itens.add(item);
    }

    public ArrayList<Item> getItens() {
        return itens;
    }

    public ArrayList<Item> retirarLanche(QRCode comprovante) {
        return comprovante.getPedido().getItens();
    }

    public Pedido criarNovoPedido(Cliente cliente){
        Pedido pedido = new Pedido(pedidos.size(),cliente);
        pedidos.add(pedido);
        cliente.addPedido(pedido);
        returno pedido;
    }

}
