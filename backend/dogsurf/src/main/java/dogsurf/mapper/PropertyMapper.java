package dogsurf.mapper;

import dogsurf.dto.PropertyResponse;
import dogsurf.model.Property;
import org.mapstruct.Mapper;

@Mapper
public interface PropertyMapper {

    PropertyResponse toDto(Property entity);
}
