package br.edu.ifba.saj.ads.poo;

import java.util.ArrayList;

public class Cliente {
    private String nome;
    private ArrayList<Pedido> pedidos;

    public Cliente(String nome) {
        this.nome = nome;
        this.pedidos = new ArrayList<>();
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }
    
    public void addPedido(Pedido pedido){
        pedidos.add(pedido);
    }
    

}
