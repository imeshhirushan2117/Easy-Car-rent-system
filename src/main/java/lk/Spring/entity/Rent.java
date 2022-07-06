package lk.Spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@ToString
public class Rent{
    @Id
    private String rentId;
    private LocalDate date;
    private String status;
    private String reason;

    @ManyToOne(cascade = {CascadeType.REFRESH, CascadeType.DETACH})
    @JoinColumn(name = "regUserid", referencedColumnName = "regUserid", nullable = false)
    private RegisteredUser registeredUser;
    @OneToMany(mappedBy = "rent",cascade = CascadeType.ALL)
    private List<RentDetails> rentDetails;
}
