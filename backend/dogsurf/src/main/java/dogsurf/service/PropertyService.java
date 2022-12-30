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
import dogsurf.dto.UserResponse;
import dogsurf.exception.PropertyBookingException;
import dogsurf.mapper.UserMapper;
import javax.persistence.EntityExistsException;
import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class PropertyService {
    private final PropertyRepository propertyRepository;
    private final UserRepository userRepository;
    private final PropertyMapper propertyMapper;
    private final UserMapper userMapper;

    public PropertyResponse getPropertyByUserID(Long userId) {
        return propertyRepository.findByUserId(userId)
                .map(propertyMapper::toDto)
                .orElseThrow(() -> new EntityNotFoundException("Property not found"));
    }


    public List<PropertyResponse> getPropertyListing() {
        return propertyRepository.findAll()
                .stream()
                .map(propertyMapper::toDto)
                .collect(Collectors.toList());

    }


    public PropertyResponse createPropertyOfUser(Long userId, PropertyRequest propertyRequest) {
        if (propertyRepository.findByUserId(userId).isPresent()) {
            throw new EntityExistsException("Property of this user already exists, It can only be updated");
        }
        Property property = propertyMapper.toEntity(propertyRequest);
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new EntityNotFoundException("User not found"));
        property.setUser(user);

        Property saved = propertyRepository.save(property);
        return propertyMapper.toDto(saved);
    }

    public PropertyResponse updatePropertyOfUser(Long userId, PropertyRequest propertyRequest) {
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

    public UserResponse bookProperty(Long userId, Long propertyID) {

        var property = propertyRepository.findById(propertyID)
                .orElseThrow(() -> new EntityNotFoundException("Property with id `" + propertyID + "` not found"));

        if (Objects.equals(property.getUser().getId(), userId)) {
            throw new PropertyBookingException("User can not book his own property");
        }

        User bookedBy = property.getBookedBy();

        if (bookedBy != null) {
            throw new PropertyBookingException("This property is already booked");
        }

        User userWhoWantsToBookThisProperty = userRepository.findById(userId)
                .orElseThrow(() -> new EntityNotFoundException("User with id `" + userId + "` not found"));

        if (userWhoWantsToBookThisProperty.getBookedProperty()!=null){
            throw new PropertyBookingException("The user have already booked a property and can not book any more");
        }

        userWhoWantsToBookThisProperty.setBookedProperty(property);
        property.setBookedBy(userWhoWantsToBookThisProperty);

        User updatedUserWhoBookedTheProperty = userRepository.save(userWhoWantsToBookThisProperty);

        return userMapper.toDto(updatedUserWhoBookedTheProperty);
    }


    public PropertyResponse getPropertyByUserIdWhoBookedIt(Long bookedById) {
        return propertyRepository.findByBookedById(bookedById)
                .map(propertyMapper::toDto)
                .orElseThrow(() -> new EntityNotFoundException("User did not book any property"));
    }

    public UserResponse removeBookedPropertyFromUser(Long bookedById) {
        Property bookedProperty = propertyRepository.findByBookedById(bookedById)
                .orElseThrow(() -> new EntityNotFoundException("User did not book any property"));
        User userThatBookedIt = bookedProperty.getBookedBy();
        userThatBookedIt.setBookedProperty(null);
        bookedProperty.setBookedBy(null);
        userRepository.save(userThatBookedIt);
        return userMapper.toDto(userThatBookedIt);
    }
}
