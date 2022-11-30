package dogsurf.dto;

import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
public class PropertyRequest {

//    private Long id;
    @NotBlank
    private String propertyLocation;
    @NotBlank
    private String propertyAddress;
}
