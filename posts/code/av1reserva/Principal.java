package posts.code.av1reserva;

import java.util.ArrayList;

public class Principal {
    //Escreve também o código de uma classe principal que irá fazer uso das classes que representam os conceitos para exemplificar a realização de uma pesquisa de voo, uma reserva de duas passagens aéreas (escolhendo os assentos disponíveis) e verificando o valor total das reservas.
    public static void main(String[] args) {
        //pesquisa de voo
        EmpresaAerea empresaAerea = new EmpresaAerea();
        ArrayList<Voo> voos = empresaAerea.pesquisaVoo("SSA");
        //escolhe voo
        Voo vooescolhido  = voos.get(0);
        //escolhendo os assentos disponíveis
        Assento assento1 = vooescolhido.getAssentosDisponiveis().get(0);
        Assento assento2 = vooescolhido.getAssentosDisponiveis().get(1);
        //uma reserva de duas passagens aéreas
        Reserva reserva1 = assento1.criarReserva(new Passageiro());
        Reserva reserva2 = assento2.criarReserva(new Passageiro());
        
        //verificando o valor total das reservas
        double valorTotal = reserva1.valor() + reserva2.valor();
        
    }
    
}
