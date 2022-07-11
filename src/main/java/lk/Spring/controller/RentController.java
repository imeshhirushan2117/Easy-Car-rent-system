package lk.Spring.controller;

import lk.Spring.dto.RentDTO;
import lk.Spring.dto.StuffDTO;
import lk.Spring.service.RentService;
import lk.Spring.service.StuffService;
import lk.Spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("Rent")
@CrossOrigin
public class RentController {
    @Autowired
    RentService rentService;

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil saveRent(@RequestBody RentDTO rentDTO) {
        rentService.saveRent(rentDTO);
        return new ResponseUtil(200,"Rent Saved",null);
    }


}
