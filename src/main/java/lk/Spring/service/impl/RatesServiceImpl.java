package lk.Spring.service.impl;

import lk.Spring.dto.RatesDTO;
import lk.Spring.entity.Rates;
import lk.Spring.entity.Stuff;
import lk.Spring.repo.RatesRepo;
import lk.Spring.repo.StuffRepo;
import lk.Spring.service.RatesService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
@Service
@Transactional
public class RatesServiceImpl implements RatesService {

    @Autowired
    private RatesRepo repo;
    @Autowired
    private ModelMapper mapper;

    @Override
    public void saveRates(RatesDTO ratesDTO) {
        if(!repo.existsById(ratesDTO.getRate_Id())){
            repo.save(mapper.map(ratesDTO, Rates.class));
        }else{
            throw new RuntimeException("Rates Already Saved..");
        }
    }

    @Override
    public void deleteRates(String id) {

    }

    @Override
    public void updateRates(RatesDTO ratesDTO) {

    }

    @Override
    public RatesDTO searchRates(String id) {
        return null;
    }

    @Override
    public List<RatesDTO> getAllRates() {
        return null;
    }
}
