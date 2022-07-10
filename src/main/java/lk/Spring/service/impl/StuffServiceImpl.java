package lk.Spring.service.impl;

import lk.Spring.dto.CustomerDTO;
import lk.Spring.dto.StuffDTO;
import lk.Spring.entity.Customer;
import lk.Spring.entity.Stuff;
import lk.Spring.repo.StuffRepo;
import lk.Spring.service.StuffService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class StuffServiceImpl implements StuffService {

    @Autowired
    private StuffRepo repo;
    @Autowired
    private ModelMapper mapper;

    @Override
    public void saveStuff(StuffDTO stuffDTO) {
        if(!repo.existsById(stuffDTO.getStaff_Id())){
            repo.save(mapper.map(stuffDTO, Stuff.class));
        }else{
            throw new RuntimeException("Stuff Already Saved..");
        }
    }

    @Override
    public void deleteStuff(String id) {
        if(repo.existsById(id)){
            repo.deleteById(id);
        }else{
            throw new RuntimeException("Stuff Delete Fail..");
        }
    }

    @Override
    public void updateStuff(StuffDTO stuffDTO) {
        if (repo.existsById(stuffDTO.getStaff_Id())){
            repo.save(mapper.map(stuffDTO, Stuff.class));
        }else{
            throw new RuntimeException("Stuff Update Fail..");
        }
    }

    @Override
    public StuffDTO searchStuff(String id) {
        if (repo.existsById(id)) {
            return mapper.map(repo.findById(id).get(), StuffDTO.class);
        }else{
            throw new RuntimeException("invalid Search..");
        }
    }

    @Override
    public List<StuffDTO> getAllStuff() {
        return mapper.map(repo.findAll(),new TypeToken<List<StuffDTO>>(){
        }.getType());
    }
}
