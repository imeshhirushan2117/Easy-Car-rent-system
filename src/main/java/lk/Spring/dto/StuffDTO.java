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
@Entity
@ToString
public class StuffDTO {
    @Id
    private String staff_Id;
    private String name;
    private String address;
    private String type;
    private String mobile_Number;
    private String email;
    private String password;
}
