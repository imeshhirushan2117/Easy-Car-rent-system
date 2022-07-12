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
public class Driver {
    @Id
    private String driver_Id;
    private String name;
    private String address;
    private String status;
    private String mobile_Number;
    private String email;
    private String password;
}
