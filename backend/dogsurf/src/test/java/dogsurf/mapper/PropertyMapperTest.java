package dogsurf.mapper;

import dogsurf.dto.PropertyResponse;
import dogsurf.model.Property;
import dogsurf.model.User;
import org.junit.jupiter.api.Test;
import dogsurf.dto.PropertyRequest;
import static org.junit.jupiter.api.Assertions.*;

class PropertyMapperTest {

    //System under test
    PropertyMapper propertyMapper = new PropertyMapperImpl();

    @Test
    void xmappingFromEntityToDTOWhenPropertyIsNotBooked_shouldReturnCorrectResult() {
        //given
        Long expectedId = 123L;
        String expectedPropertyAddress = "SomeAddress";
        String expectedPropertyLocation = "SomeLocation";
        Property propertyEntity = Property.builder()
                .propertyAddress(expectedPropertyAddress)
                .propertyLocation(expectedPropertyLocation)
                .id(expectedId)
                .build();

        //when
        PropertyResponse propertyResponse = propertyMapper.toDto(propertyEntity);

        //then
        assertEquals(expectedId, propertyResponse.getId());
        assertEquals(expectedPropertyAddress, propertyResponse.getPropertyAddress());
        assertEquals(expectedPropertyLocation, propertyResponse.getPropertyLocation());

        assertFalse(propertyResponse.isBooked());
    }



    @Test
    void mappingFromEntityToDTOWhenPropertyIsNull_shouldReturnNull() {
        //given
        Property propertyEntity = null;

        //when
        PropertyResponse propertyResponse = propertyMapper.toDto(propertyEntity);

        //then
        assertNull( propertyResponse);
    }



    @Test
    void mappingFromDTOToEntity_shouldReturnCorrectResult() {
        //given
        String expectedPropertyAddress = "SomeAddress";
        String expectedPropertyLocation = "SomeLocation";
        PropertyRequest propertyRequest = new PropertyRequest();
        propertyRequest.setPropertyAddress(expectedPropertyAddress);
        propertyRequest.setPropertyLocation(expectedPropertyLocation);

        //when
        Property propertyEntity = propertyMapper.toEntity(propertyRequest);

        //then
        assertEquals(expectedPropertyAddress, propertyEntity.getPropertyAddress());
        assertEquals(expectedPropertyLocation, propertyEntity.getPropertyLocation());
        assertNull(propertyEntity.getId());
        assertNull(propertyEntity.getUser());
        assertNull(propertyEntity.getBookedBy());

    }



    @Test
    void mappingFromDTOToEntityWhenNull_shouldReturnNull() {
        //given
        PropertyRequest propertyRequest = null;

        //when
        Property propertyEntity = propertyMapper.toEntity(propertyRequest);

        //then
        assertNull(propertyEntity);
    }

}