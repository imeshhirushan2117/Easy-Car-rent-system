package lk.Spring.repo;

import lk.Spring.entity.Stuff;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StuffRepo extends JpaRepository<Stuff,String> {
}
