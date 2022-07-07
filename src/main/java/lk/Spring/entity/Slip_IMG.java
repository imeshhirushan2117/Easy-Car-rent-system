package lk.Spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@ToString
public class Slip_IMG {
    @Id
    private String slip_IMG_Id;
    private String description;

    @ManyToOne(cascade = {CascadeType.REFRESH,CascadeType.DETACH})
    @JoinColumn(name = "rent_Id",referencedColumnName = "rent_Id",nullable = false)
    private Rent rent;

}
