package dogsurf.model;

import lombok.*;

import javax.persistence.*;
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    @EqualsAndHashCode.Include
    private Long id;
    @Column(name = "username", unique = true, nullable = false, length = 255)
    private String username;
    @Column(name = "password", nullable = false)
    private String password;
    @Column(name = "email", nullable = false)
    private String email;
    @Column(name = "firstname", nullable = false)
    private String firstname;
    @Column(name = "lastname", nullable = false)
    private String lastname;
    @Column(name = "city", nullable = false)
    private String city;
    @Column(name = "address", nullable = false)
    private String address;
    @Enumerated(EnumType.STRING)
    @Column(name = "role", nullable = false)
    private Role role;






    @OneToOne(cascade = CascadeType.ALL, mappedBy = "user")
    private Property property;
}
