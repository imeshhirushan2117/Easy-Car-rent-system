package lk.Spring.service.impl;

import lk.Spring.dto.StuffDTO;
import lk.Spring.dto.Vehicle_TypeDTO;
import lk.Spring.entity.Stuff;
import lk.Spring.entity.Vehicle_Type;
import lk.Spring.repo.StuffRepo;
import lk.Spring.repo.Vehicle_TypeRepo;
import lk.Spring.service.Vehicle_TypeService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
@Service
@Transactional
public class Vehicle_TypeServiceImpl implements Vehicle_TypeService {
    @Autowired
    private Vehicle_TypeRepo repo;
    @Autowired
    private ModelMapper mapper;

    @Override
    public void saveVehicleType(Vehicle_TypeDTO vehicle_typeDTO) {
        if(!repo.existsById(vehicle_typeDTO.getVehicle_Type_Id())){
            repo.save(mapper.map(vehicle_typeDTO, Vehicle_Type.class));
        }else{
            throw new RuntimeException("Vehicle Type Already Saved..");
        }
    }

    @Override
    public void deleteVehicleType(String id) {
        if(repo.existsById(id)){
            repo.deleteById(id);
        }else{
            throw new RuntimeException("Vehicle Type Delete Fail..");
        }
    }

    @Override
    public void updateVehicleType(Vehicle_TypeDTO vehicle_typeDTO) {
        if (repo.existsById(vehicle_typeDTO.getVehicle_Type_Id())){
            repo.save(mapper.map(vehicle_typeDTO, Vehicle_Type.class));
        }else{
            throw new RuntimeException("Vehicle Type Update Fail..");
        }
    }

    @Override
    public Vehicle_TypeDTO searchVehicleType(String id) {
        if (repo.existsById(id)) {
            return mapper.map(repo.findById(id).get(), Vehicle_TypeDTO.class);
        }else{
            throw new RuntimeException("invalid Search..");
        }
    }

    @Override
    public List<Vehicle_TypeDTO> getAllVehicleType() {
        return mapper.map(repo.findAll(),new TypeToken<List<Vehicle_TypeDTO>>(){
        }.getType());
    }
}
