package dogsurf.mapper;

import dogsurf.dto.PropertyRequest;
import dogsurf.dto.PropertyResponse;
import dogsurf.model.Property;
import org.mapstruct.Mapper;

@Mapper
public interface PropertyMapper {

    PropertyResponse toDto(Property entity);
    Property toEntity(PropertyRequest propertyRequest);
}
