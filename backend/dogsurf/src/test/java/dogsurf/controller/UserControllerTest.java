package dogsurf.controller;
import dogsurf.dto.UserResponse;
import dogsurf.model.User;
import dogsurf.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.TestPropertySource;
import org.springframework.http.MediaType;
import java.util.Optional;
import org.springframework.test.web.reactive.server.WebTestClient;
import static org.junit.jupiter.api.Assertions.*;
import dogsurf.model.Role;
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
//@TestPropertySource(properties = {
//        "spring.datasource.url=jdbc:h2:mem:AZ;DB_CLOSE_DELAY=-1;DB_CLOSE_ON_EXIT=FALSE",
//        "spring.datasource.driverClassName=org.h2.Driver",
//        "spring.datasource.username=sa",
//        "spring.datasource.password=",
//        "spring.jpa.database-platform=org.hibernate.dialect.H2Dialect"
//})
class UserControllerTest {

    @Autowired
    UserRepository userRepository;

    @Autowired
    WebTestClient webTestClient;
//    @Test
//    void simpleDbConfigurationTest() {
//
//        //when
//        Optional<User> userOptional = userRepository.findById(2L);
//
//        //then
//        assertTrue(userOptional.isPresent());
//
//        User user = userOptional.get();
//
//        assertEquals(2, user.getId());
//        assertEquals("user2", user.getUsername());
//        assertEquals("pass2", user.getPassword());
//        assertEquals("Marion Stret 2", user.getAddress());
//        assertEquals("Dublin", user.getCity());
//        assertEquals("user2@gmail.com", user.getEmail());
//        assertEquals("Niamh", user.getFirstname());
//        assertEquals("McCortney", user.getLastname());
//        assertNull(user.getProperty());
//        assertNull(user.getBookedProperty());
//
//    }

    @Test
    void getUserByIdTest_userPresentWithoutProperty() {

        //given
        Long userId = 11L;

        //when
        webTestClient.get()
                .uri("/api/v1/users/{id}", userId)
                .accept(MediaType.APPLICATION_JSON)
                .exchange()

                //then
                .expectStatus().isOk()
                .expectBody(UserResponse.class)
                .value(user -> assertAll(
                                () -> assertEquals(userId, user.getId()),
                                () -> assertEquals("user11", user.getUsername()),
                                () -> assertEquals("Densel Corner 32", user.getAddress()),
                                () -> assertEquals("Cork", user.getCity()),
                                () -> assertEquals("user11@gmail.com", user.getEmail()),
                                () -> assertEquals("Mark", user.getFirstname()),
                                () -> assertEquals("Fronter", user.getLastname()),
                                () -> assertNull(user.getProperty()),
                                () -> assertNull(user.getBookedProperty())
                        )
                );
    }


    @Test
    void getUserByIdTest_userAbsent_shouldReturn400() {

        //given
        Long userId = 500L;

        //when
        webTestClient.get()
                .uri("/api/v1/users/{id}", userId)
                .accept(MediaType.APPLICATION_JSON)
                .exchange()

                //then
                .expectStatus().is4xxClientError()
                .expectBody()
                .jsonPath("$.timestamp").isNotEmpty()
                .jsonPath("$.message").isEqualTo("User not found")
                .jsonPath("$.details").isEqualTo("uri=/api/v1/users/500");
//        {"timestamp":"2022-12-30T15:43:46.0204755","message":"User not found","details":"uri=/api/v1/users/1000000"}
    }


    @Test
    void getUserByIdTest_userPresentWithProperty() {

        //given
        Long userId = 2L;

        //when
        webTestClient.get()
                .uri("/api/v1/users/{id}", userId)
                .accept(MediaType.APPLICATION_JSON)
                .exchange()

                //then
                .expectStatus().isOk()
                .expectBody(UserResponse.class)
                .value(user -> assertAll(
                                () -> assertEquals(userId, user.getId()),
                                () -> assertEquals("user2", user.getUsername()),
                                () -> assertEquals("Marion Stret 2", user.getAddress()),
                                () -> assertEquals("Dublin", user.getCity()),
                                () -> assertEquals("user2@gmail.com", user.getEmail()),
                                () -> assertEquals("Niamh", user.getFirstname()),
                                () -> assertEquals("McCortney", user.getLastname()),
                                () -> assertEquals(Role.USER, user.getRole()),
                                () -> assertAll(
                                        () -> assertNotNull(user.getProperty()),
                                        () -> assertEquals(2, user.getProperty().getId()),
                                        () -> assertEquals("Marion Street 2", user.getProperty().getPropertyAddress()),
                                        () -> assertEquals("Dublin, PS23FT", user.getProperty().getPropertyLocation()),
                                        () -> assertFalse(user.getProperty().isBooked())
                                ),
                                () -> assertNull(user.getBookedProperty())
                        )
                );
    }




}