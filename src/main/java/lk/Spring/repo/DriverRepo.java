package lk.Spring.repo;

import lk.Spring.entity.Driver;
import lk.Spring.entity.Rates;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DriverRepo extends JpaRepository<Driver,String> {
}
