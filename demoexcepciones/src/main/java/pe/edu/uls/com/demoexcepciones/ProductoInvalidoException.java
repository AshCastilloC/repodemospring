package pe.edu.uls.com.demoexcepciones;

public class ProductoInvalidoException extends RuntimeException {

    public ProductoInvalidoException(String msg) {
        super(msg);
    }
}
