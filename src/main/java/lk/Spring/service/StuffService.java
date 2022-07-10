package lk.Spring.service;

import lk.Spring.dto.StuffDTO;

import java.util.List;

public interface StuffService {
    void saveStuff(StuffDTO stuffDTO);
    void deleteStuff(String id);
    void updateStuff(StuffDTO stuffDTO);
    StuffDTO searchStuff(String id);
    List<StuffDTO> getAllStuff();


}
