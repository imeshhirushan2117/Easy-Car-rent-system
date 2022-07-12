package lk.Spring.service.impl;

import lk.Spring.dto.RatesDTO;
import lk.Spring.dto.RentDTO;
import lk.Spring.dto.StuffDTO;
import lk.Spring.entity.Rates;
import lk.Spring.entity.Rent;
import lk.Spring.entity.Stuff;
import lk.Spring.repo.RentRepo;
import lk.Spring.repo.StuffRepo;
import lk.Spring.service.RentService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
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
        if(repo.existsById(id)){
            repo.deleteById(id);
        }else{
            throw new RuntimeException("Rent Delete Fail..");
        }
    }

    @Override
    public void updateRent(RentDTO rentDTO) {
        if (repo.existsById(rentDTO.getRent_Id())){
            repo.save(mapper.map(rentDTO,Rent.class));
        }else{
            throw new RuntimeException("Rant Update Fail..");
        }
    }

    @Override
    public RentDTO searchRent(String id) {
        if (repo.existsById(id)) {
            return mapper.map(repo.findById(id).get(), RentDTO.class);
        }else{
            throw new RuntimeException("invalid Search..");
        }
    }

    @Override
    public List<RentDTO> getAllRent() {
        return mapper.map(repo.findAll(),new TypeToken<List<RatesDTO>>(){
        }.getType());
    }
}
