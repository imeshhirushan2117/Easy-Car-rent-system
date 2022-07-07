package lk.Spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Id;
import java.io.Serializable;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class Drive_Schedule_PK implements Serializable {
    private String staff_Id;
    private String registration_Number;
    private String rent_Id;
}
