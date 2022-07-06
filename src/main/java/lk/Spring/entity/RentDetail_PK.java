package lk.Spring.entity;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class RentDetail_PK implements Serializable {
    private String rentId;
    private String registrationNumber;
}
