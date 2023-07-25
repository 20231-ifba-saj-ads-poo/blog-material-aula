public class MinhaThread  extends Thread{
    private String id;

    public MinhaThread(String id) {        
        this.id = id;
    }

    @Override
    public void run() {
        for(int x=0;x<1000000;x++){ 
            
            System.out.println(Thread.currentThread().toString()+"Thread "+id+": "+x); 
        } 
    }
    
}
