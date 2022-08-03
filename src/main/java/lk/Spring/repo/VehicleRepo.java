package lk.Spring.repo;

import lk.Spring.entity.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface VehicleRepo extends JpaRepository<Vehicle,String> {
    List<Vehicle> searchVehiclesByStatus(String status);
    long countVehiclesByStatus(String status);
}
