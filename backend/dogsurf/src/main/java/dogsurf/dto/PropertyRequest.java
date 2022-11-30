package dogsurf.dto;

import lombok.Data;

@Data
public class PropertyRequest {
    private Long id;
    private String propertyLocation;
    private String propertyAddress;
}
