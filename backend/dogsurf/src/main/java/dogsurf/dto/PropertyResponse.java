package dogsurf.dto;

import lombok.Data;

@Data
public class PropertyResponse {
    private Long id;
    private String propertyLocation;
    private String propertyAddress;
}
