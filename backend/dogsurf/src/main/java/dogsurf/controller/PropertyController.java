package dogsurf.controller;

import dogsurf.dto.PropertyRequest;
import dogsurf.dto.PropertyResponse;
import dogsurf.dto.UserResponse;
import dogsurf.service.PropertyService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import javax.validation.constraints.NotNull;
import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/v1/users")
@RequiredArgsConstructor
public class PropertyController {
    private final PropertyService propertyService;

    @GetMapping("/{userId}/property")
    public PropertyResponse getPropertyOfUser(@PathVariable Long userId) {
        return propertyService.getPropertyByUserID(userId);
    }

    @GetMapping("/properties")
    public List<PropertyResponse> getPropertyListing() {
        return propertyService.getPropertyListing();
    }
    @PostMapping("/{userId}/property")
    public PropertyResponse createPropertyOfUser(@PathVariable Long userId,@Valid @RequestBody PropertyRequest property) {
        return propertyService.createPropertyOfUser(userId, property);
    }

    @PutMapping("/{userId}/property")
    public PropertyResponse updatePropertyOfUser(@PathVariable Long userId,@Valid @RequestBody PropertyRequest property) {
        return propertyService.updatePropertyOfUser(userId, property);
    }
    @PostMapping("/{userId}/book/property/{propertyId}")
    public UserResponse bookProperty(@NotNull @PathVariable("userId") Long userId,
                                     @NotNull @PathVariable("propertyId") Long propertyID) {
        return propertyService.bookProperty(userId, propertyID);
    }

    @GetMapping("/{userId}/booked-property")
    public PropertyResponse getBookedPropertyOfUser(@PathVariable Long userId) {
        return propertyService.getPropertyByUserIdWhoBookedIt(userId);
    }
    @DeleteMapping("/{userId}/booked-property")
    public UserResponse removeBookedPropertyFromUser(@PathVariable Long userId) {
        return propertyService.removeBookedPropertyFromUser(userId);
    }
}
