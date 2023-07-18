import java.util.SortedSet;
import java.util.TreeSet;

public class SortedSetExample {

  public static void main(String[] args) {
    SortedSet<Integer> conjunto1 = new TreeSet<>();
    conjunto1.add(1);
    conjunto1.add(5);
    conjunto1.add(2);
    conjunto1.add(3);
    conjunto1.add(9);
    System.out.println("Elementos menores que 7 no conjunto1: " + conjunto1.headSet(7));

    SortedSet<String> conjunto2 = new TreeSet<>();
    conjunto2.add("Geeks");
    conjunto2.add("For");
    conjunto2.add("Geeks");
    conjunto2.add("Code");
    conjunto2.add("It");
    System.out.println("Elementos menores que Z no conjunto2: " + conjunto2.headSet("Z"));
  }
}