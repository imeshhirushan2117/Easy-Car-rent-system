package lk.Spring.repo;

import lk.Spring.entity.Rates;
import lk.Spring.entity.Vehicle_Type;
import org.springframework.data.jpa.repository.JpaRepository;

public interface Vehicle_TypeRepo extends JpaRepository<Vehicle_Type,String> {
}
