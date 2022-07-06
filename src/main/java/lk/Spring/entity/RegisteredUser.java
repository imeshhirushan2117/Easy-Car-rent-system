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
public class RegisteredUser {
    @Id
    private String regUserid;
    private String name;
    private String nICNo;
    private String drivingLicensNo;
    private String address;
    private String mobileNo;
    private String email;
    private String password;
}
