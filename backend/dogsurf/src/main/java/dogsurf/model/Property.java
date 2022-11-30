package dogsurf.model;

import lombok.*;

import javax.persistence.*;
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Data
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Table(name = "properties")
public class Property {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;
    @Column(name = "propertyLocation", nullable = false)
    private String propertyLocation;
    @Column(name = "propertyAddress", nullable = false)
    private String propertyAddress;

    @ToString.Exclude
    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;
}
