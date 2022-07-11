package lk.Spring.repo;

import lk.Spring.entity.Rent;
import lk.Spring.entity.Stuff;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RentRepo extends JpaRepository<Rent,String>  {
}
