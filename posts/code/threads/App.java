public class App {
    public static void main(String[] args) throws Exception {
        System.out.println("inicio main");        
        MinhaThread ta = new MinhaThread("A"); 
        ta.start();
        MinhaThread tb = new MinhaThread("B"); 
        tb.start();

        Thread t1 = new Thread(new MeuRunnable("A")); 
        t1.start();

        Thread t2 = new Thread(new MeuRunnable("B")); 
        t2.start();

        System.out.println("fim main");
    }
}
