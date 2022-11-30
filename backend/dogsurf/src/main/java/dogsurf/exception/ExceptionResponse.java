package dogsurf.exception;

import lombok.Data;
import lombok.RequiredArgsConstructor;

import java.time.LocalDateTime;

@Data
@RequiredArgsConstructor
public class ExceptionResponse {
    private final LocalDateTime timestamp;
    private final String message;
    private final String details;

}
