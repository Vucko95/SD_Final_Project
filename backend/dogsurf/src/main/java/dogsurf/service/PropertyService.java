package dogsurf.service;

import dogsurf.dto.PropertyRequest;
import dogsurf.dto.PropertyResponse;
import dogsurf.mapper.PropertyMapper;
import dogsurf.model.Property;
import dogsurf.model.User;
import dogsurf.repository.PropertyRepository;
import dogsurf.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.persistence.EntityExistsException;
import javax.persistence.EntityNotFoundException;

@Service
@RequiredArgsConstructor
public class PropertyService {
    private final PropertyRepository propertyRepository;
    private final UserRepository userRepository;
    private final PropertyMapper propertyMapper;

    public PropertyResponse getPropertyByUserID(Long userId) {
        return propertyRepository.findByUserId(userId)
                .map(propertyMapper::toDto)
                .orElseThrow(() -> new EntityNotFoundException("Property not found"));
    }



    public PropertyResponse createPropertyOfUser(Long userId, PropertyRequest propertyRequest){
        if (propertyRepository.findByUserId(userId).isPresent()){
            throw new EntityExistsException("Property of this user already exists, It can only be updated");
        }
        Property property = propertyMapper.toEntity(propertyRequest);
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new EntityNotFoundException("User not found"));
        property.setUser(user);

        Property saved = propertyRepository.save(property);
        return propertyMapper.toDto(saved);
    }

    public PropertyResponse updatePropertyOfUser(Long userId, PropertyRequest propertyRequest){
        Property property = propertyRepository
                .findByUserId(userId)
                .orElseThrow(
                        () -> new EntityNotFoundException("Property of User does not exist")
                );
        property.setPropertyLocation(propertyRequest.getPropertyLocation());
        property.setPropertyAddress(propertyRequest.getPropertyAddress());

        Property saved = propertyRepository.save(property);
        return propertyMapper.toDto(saved);


    }

}
