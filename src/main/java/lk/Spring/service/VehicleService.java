package lk.Spring.service;

import lk.Spring.dto.VehicleDTO;

import java.util.List;

public interface VehicleService {
    void saveVehicle(VehicleDTO vehicleDTO);
    void deleteVehicle(String id);
    void updateVehicle(VehicleDTO vehicleDTO);
    VehicleDTO searchVehicle(String id);
    List<VehicleDTO> getAllVehicles();
}
