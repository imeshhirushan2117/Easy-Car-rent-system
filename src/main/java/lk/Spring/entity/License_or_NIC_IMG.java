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
public class License_or_NIC_IMG {
    @Id
    private String img_Id;
    private String description;

    @ManyToOne(cascade = {CascadeType.REFRESH,CascadeType.DETACH})
    @JoinColumn(name = "id",referencedColumnName = "id",nullable = false)
    private Customer customer;

}
