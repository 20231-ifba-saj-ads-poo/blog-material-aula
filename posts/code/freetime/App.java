/*----------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 *---------------------------------------------------------------------------------------*/

package br.edu.ifba.saj.ads.poo;

import java.util.ArrayList;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class App {
    
    private static final Logger LOGGER = LoggerFactory.getLogger(App.class);

    public static void main(String[] args) {
        
        Lanchonete lanchonete = new Lanchonete();
        Item item = new Item("Coca", 1);
        lanchonete.addItem(item);
        ArrayList<Item> itens = lanchonete.getItens();
        Cliente cliente = new Cliente("Leandro");
        Pedido pedido = lanchonete.criarNovoPedido(cliente);
        pedido.addItem(itens.get(0));
        pedido.realizarPagamento();
        lanchonete.retirarLanche(pedido.getComprovante());


    }
}
