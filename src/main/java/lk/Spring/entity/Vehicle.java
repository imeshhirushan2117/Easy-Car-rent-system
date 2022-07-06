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
public class Vehicle {
    @Id
    private String vehicalTypeID;
    private String rateID;
    private String registrationNumber;
    private String color;
    private int passengers;
    private String transmissionType;
    private String brand;
    private String status;
    private String fuelType;
    private double runningKm;









}
