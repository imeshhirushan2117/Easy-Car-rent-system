package lk.Spring.service.impl;

import lk.Spring.dto.RentDTO;
import lk.Spring.entity.Rent;
import lk.Spring.entity.Stuff;
import lk.Spring.repo.RentRepo;
import lk.Spring.repo.StuffRepo;
import lk.Spring.service.RentService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
@Service
@Transactional
public class RentServiceImpl implements RentService {

    @Autowired
    private RentRepo repo;
    @Autowired
    private ModelMapper mapper;

    @Override
    public void saveRent(RentDTO rentDTO) {
        if(!repo.existsById(rentDTO.getRent_Id())){
            repo.save(mapper.map(rentDTO, Rent.class));
        }else{
            throw new RuntimeException("Rent Already Saved..");
        }
    }

    @Override
    public void deleteRent(String id) {

    }

    @Override
    public void updateRent(RentDTO rentDTO) {

    }

    @Override
    public RentDTO searchRent(String id) {
        return null;
    }

    @Override
    public List<RentDTO> getAllRent() {
        return null;
    }
}
