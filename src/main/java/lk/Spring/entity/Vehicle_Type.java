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
@Entity
@ToString
public class Vehicle_Type {
    @Id
    private String vehicle_Type_Id;
    private String type;
    private double loss_Damage_Waiver;

}
