package lk.Spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Id;
@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
@Entity
public class Rates {
    @Id
    String rateId;
    private double monthlyRate;
    private double freeKmMonth;
    private double freeKmDay;
    private double dailyRate;
    private double pricePerExtraKm;

}
