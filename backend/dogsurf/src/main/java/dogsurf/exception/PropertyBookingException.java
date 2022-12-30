package dogsurf.exception;

public class PropertyBookingException extends RuntimeException{

    public PropertyBookingException(String message) {
        super(message);
    }

    public PropertyBookingException(String message, Throwable cause) {
        super(message, cause);
    }
}