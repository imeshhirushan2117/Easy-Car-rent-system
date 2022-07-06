package lk.Spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.time.LocalDate;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@ToString
public class DriveSchedule {
    @Id
    private String stafID;
    private String rentID;
    private String registrationNumber;
    private LocalDate returnDate;
    private LocalDate rentDate;
}
