package dogsurf.init;

import com.github.javafaker.Faker;
import dogsurf.model.Property;
import dogsurf.model.Role;
import dogsurf.model.User;
import dogsurf.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Locale;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

@Component
@RequiredArgsConstructor
public class DbInitializer implements CommandLineRunner {

    private final UserRepository userRepository;
    private final Faker faker = Faker.instance(new Locale("en-GB"));

    @Override
    public void run(String... args) throws Exception {

        if (userRepository.count() == 0) {
            populateRepositoryWithDummyData();
        }

    }
    private void populateRepositoryWithDummyData() {

        User admin = User.builder()
                .username("admin")
                .password("admin")
                .email("admin@gmail.com")
                .firstname(faker.name().firstName())
                .lastname(faker.name().lastName())
                .address(faker.address().fullAddress())
                .city(faker.address().city())
                .role(Role.ADMIN)
                .build();

        userRepository.save(admin);

        List<User> users = IntStream.rangeClosed(1, 10)
                .boxed()
                .map(i -> User.builder()
                        .username("user" + i)
                        .password("pass" + i)
                        .email("user" + i + "@gmail.com")
                        .firstname(faker.name().firstName())
                        .lastname(faker.name().lastName())
                        .address(faker.address().fullAddress())
                        .city(faker.address().city())
                        .role(Role.USER)
                        .property(Property.builder()
                                .propertyLocation(faker.address().fullAddress())
                                .propertyAddress(faker.address().fullAddress())
                                .build())
                        .build()
                )
                .collect(Collectors.toList());
        users.forEach(u -> u.getProperty().setUser(u));
        userRepository.saveAll(users);
    }
}
