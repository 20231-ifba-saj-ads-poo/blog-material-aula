import java.util.ArrayList;
import java.util.List;

class ListExample {
    public static void main(String[] args){
        int n = 5;
        List<Integer> arrli = new ArrayList<Integer>(n);
        for (int i = 1; i <= n; i++){
            arrli.add(i);
        }
        System.out.println(arrli);
        arrli.remove(3);
        System.out.println(arrli);
        arrli.set(1, 10);
        System.out.println(arrli);
        for (Integer integer : arrli.subList(1, 3)) {
            System.out.print(integer + " ");
        }

    }
}