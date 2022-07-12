package lk.Spring.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class Vehicle_TypeDTO {
    private String vehicle_Type_Id;
    private String type;
    private double loss_Damage_Waiver;
}
