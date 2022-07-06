package lk.Spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@ToString
@IdClass(RentDetail_PK.class)
public class RentDetails {
    @Id
    private String rentId;
    @Id
    private String registrationNumber;
    private LocalDate rentDate;
    private LocalDate returnDate;
    private Double km;
    private String damageCost;
    private Double rentalTotal;
    private String status;

    @ManyToOne
    @JoinColumn(name = "registrationNumber", referencedColumnName = "registrationNumber", insertable = false, updatable = false)
    Vehicle vehicle;

    @ManyToOne
    @JoinColumn(name = "rentId", referencedColumnName = "rentId", insertable = false, updatable = false)
    Rent Rent;


}
