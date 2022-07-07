package lk.Spring.entity;

import com.sun.xml.internal.messaging.saaj.packaging.mime.util.LineInputStream;
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
public class Rent {
    @Id
    private String rent_Id;
    private LocalDate date;
    private String status;
    private String reason;

    @ManyToOne(cascade = {CascadeType.REFRESH,CascadeType.DETACH})
    @JoinColumn(name = "id",referencedColumnName = "id",nullable = false)
    private Customer customer;

    @OneToMany(mappedBy = "rent",cascade = CascadeType.ALL)
    private List<Rent_Detail> rent_details;
}
