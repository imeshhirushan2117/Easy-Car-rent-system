package lk.Spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.io.Serializable;
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Rent_Detail_PK implements Serializable {
    private String rent_Id;
    private String registration_Number;
}
