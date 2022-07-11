package lk.Spring.service;

import lk.Spring.dto.RatesDTO;
import lk.Spring.dto.RentDTO;

import java.util.List;

public interface RentService {
    void saveRent(RentDTO rentDTO);
    void deleteRent(String id);
    void updateRent(RentDTO rentDTO);
    RentDTO searchRent(String id);
    List<RentDTO> getAllRent();
}
