package lk.Spring.service.impl;

import lk.Spring.dto.CustomerDTO;
import lk.Spring.entity.Customer;
import lk.Spring.repo.CustomerRepo;
import lk.Spring.service.CustomerService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class CustomerServiceImpl implements CustomerService {

    @Autowired
    private CustomerRepo repo;

    @Autowired
    private ModelMapper mapper;

    @Override
    public void saveCustomer(CustomerDTO customerDTO) {
        if (!repo.existsById(customerDTO.getId())) {
            repo.save(mapper.map(customerDTO, Customer.class));
        }else{
            throw new RuntimeException("Customer Already Saved..");
        }
    }

    @Override
    public void deleteCustomer(String id) {
        if(repo.existsById(id)){
            repo.deleteById(id);
        }else{
            throw new RuntimeException("Customer Delete Fail..");
        }
    }

    @Override
    public void updateCustomer(CustomerDTO customerDTO) {
        if (repo.existsById(customerDTO.getId())){
            repo.save(mapper.map(customerDTO,Customer.class));
        }else{
            throw new RuntimeException("Customer Update Fail..");
        }
    }

    @Override
    public CustomerDTO searchCustomer(String id) {
        if (repo.existsById(id)) {
            return mapper.map(repo.findById(id).get(),CustomerDTO.class);
        }else{
            throw new RuntimeException("invalid Search..");
        }

    }

    @Override
    public List<CustomerDTO> getAllCustomer() {
        return mapper.map(repo.findAll(),new TypeToken<List<CustomerDTO>>(){
        }.getType());
    }

    @Override
    public long countUsers() {
        return repo.count();
    }
}
