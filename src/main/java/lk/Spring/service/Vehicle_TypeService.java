package lk.Spring.service;

import lk.Spring.dto.StuffDTO;
import lk.Spring.dto.Vehicle_TypeDTO;

import java.util.List;

public interface Vehicle_TypeService {
    void saveVehicleType (Vehicle_TypeDTO vehicle_typeDTO);
    void deleteVehicleType (String id);
    void updateVehicleType (Vehicle_TypeDTO vehicle_typeDTO);
    Vehicle_TypeDTO searchVehicleType (String id);
    List<Vehicle_TypeDTO> getAllVehicleType();
}
