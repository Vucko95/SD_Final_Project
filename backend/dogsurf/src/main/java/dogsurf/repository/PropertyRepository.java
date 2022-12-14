package dogsurf.repository;

import dogsurf.model.Property;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PropertyRepository extends JpaRepository<Property, Long> {
    Optional <Property> findByUserId(Long userId);
    Optional <Property> findByBookedById(Long userId);
}
