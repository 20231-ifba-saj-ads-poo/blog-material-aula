public class MeuRunnable implements Runnable {
    private String id;

    public MeuRunnable(String id) {
        this.id = id;
    }

    @Override
    public void run() {
        for(int x=0;x<1000000;x++){ 
            System.out.println(Thread.currentThread().toString()+"Runnable "+id+": "+x); 
        } 
    }    
}
