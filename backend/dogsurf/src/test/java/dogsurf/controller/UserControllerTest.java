package dogsurf.controller;

import dogsurf.model.User;
import dogsurf.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.TestPropertySource;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@TestPropertySource(properties = {
        "spring.datasource.url=jdbc:h2:mem:AZ;DB_CLOSE_DELAY=-1;DB_CLOSE_ON_EXIT=FALSE",
        "spring.datasource.driverClassName=org.h2.Driver",
        "spring.datasource.username=sa",
        "spring.datasource.password=",
        "spring.jpa.database-platform=org.hibernate.dialect.H2Dialect"
})
class UserControllerTest {

    @Autowired
    UserRepository userRepository;

    @Test
    void simpleDbConfigurationTest() {

        //when
        Optional<User> userOptional = userRepository.findById(1L);

        //then
        assertTrue(userOptional.isPresent());

        User user = userOptional.get();

//        INSERT INTO users (id, address, city, email, firstname, lastname, password, role, username)
//        VALUES (1, 'Dame St, Dublin 2, Ireland', 'Dublin', 'admin@gmail.com', 'Don',
//                'Mikovski', 'admin', 'ADMIN', 'admin');

        assertEquals(1, user.getId());
        assertEquals("admin", user.getUsername());
        assertEquals("admin", user.getPassword());
        assertEquals("Dame St, Dublin 2, Ireland", user.getAddress());
        assertEquals("Dublin", user.getCity());
        assertEquals("admin@gmail.com", user.getEmail());
        assertEquals("Don", user.getFirstname());
        assertEquals("Mikovski", user.getLastname());
        assertNull(user.getProperty());
        assertNull(user.getBookedProperty());

    }
}