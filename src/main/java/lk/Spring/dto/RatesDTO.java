package lk.Spring.dto;

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

public class RatesDTO {

    private String rate_Id;
    private double daily_Rate;
    private double monthly_rate;
    private int free_Km_Day;
    private int free_Km_Month;
    private double extra_Km_Price;
}
