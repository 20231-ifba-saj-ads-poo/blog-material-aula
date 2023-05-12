package br.edu.ifba.saj.ads.poo;

import java.util.ArrayList;

public class Pedido {
    private Cliente cliente;
    private ArrayList<Item> itens;
    private Boolean pago = false;
    private int codigo;

    public Pedido(int codigo, Cliente cliente) {
        this.codigo = codigo;
        this.cliente = cliente;
        this.itens = new ArrayList<>();
    }

    public Cliente getCliente() {
        return cliente;
    }

    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }

    public void addItem(Item item) {
        itens.add(item);
    }

    public void realizarPagamento() {
        //logica para registro de pagamento
        pago = true;
    }

    public Boolean isPago() {
        return pago;
    }

    public QRCode getComprovante() {
        if(!isPago()){
            return null;
        }else{
            return new QRCode(this);
        }
    }

    public ArrayList<Item> getItens() {
        return itens;
    }

    public float getTotalPedido(){
        float total = 0;
        for (Item itempedido : itens ) {
            total+=itempedido.getPreco();            
        }
        return total;
    }

    public int getCodigo() {
        return codigo;
    }


}
