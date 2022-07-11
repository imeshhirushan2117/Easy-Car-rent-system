package lk.Spring.dto;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.Id;
import java.time.LocalDate;
import java.util.List;

public class Rent_DetailDTO {

    @Id
    private String rent_Id;
    @Id
    private String registration_Number;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate checking;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate return_Date;
    private int kilometers;
    private double rental_Cost;
    private double damage_Cost;
    private String status;
}
