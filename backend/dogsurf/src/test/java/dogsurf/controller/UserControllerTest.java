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

class UserControllerTest {

    @Autowired
    UserRepository userRepository;

    @Autowired
    WebTestClient webTestClient;


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