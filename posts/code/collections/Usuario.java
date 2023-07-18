import java.util.SortedSet;
import java.util.TreeSet;

public class Usuario implements Comparable {
    public String login;
    public String nome;

    public Usuario(String login, String nome) {
        this.login = login;
        this.nome = nome;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((login == null) ? 0 : login.hashCode());
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Usuario other = (Usuario) obj;
        if (login == null) {
            if (other.login != null)
                return false;
        } else if (!login.equals(other.login))
            return false;
        return true;
    }

    @Override
    public int compareTo(Object o) {
        if(o instanceof Usuario){
            Usuario u = (Usuario)o;
            return this.nome.compareTo(u.nome);
        }
        return 0;
    }

    

    @Override
    public String toString() {
        return "Usuario [login=" + login + ", nome=" + nome + "]";
    }

    public static void main(String[] args) {
        Usuario u = new Usuario("aaa","Leandro");
        SortedSet<Usuario> conjunto1 = new TreeSet<>();
        conjunto1.add(new Usuario("aaa", "CCCCC"));
        conjunto1.add(new Usuario("ccc", "BBBB1"));
        conjunto1.add(new Usuario("ccc", "BBBB1"));
        conjunto1.add(new Usuario("bbb", "AAAAA"));

        System.out.println(conjunto1);
         
    }

    

}
