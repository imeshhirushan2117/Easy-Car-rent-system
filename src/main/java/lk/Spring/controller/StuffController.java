package lk.Spring.controller;

import lk.Spring.dto.CustomerDTO;
import lk.Spring.dto.StuffDTO;
import lk.Spring.service.CustomerService;
import lk.Spring.service.StuffService;
import lk.Spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("Stuff")
@CrossOrigin
public class StuffController {
    @Autowired
    StuffService stuffService;

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil saveStuff(@ModelAttribute StuffDTO stuffDTO) {
        stuffService.saveStuff(stuffDTO);
        return new ResponseUtil(200,"Stuff Saved",null);
    }

    @ResponseStatus(HttpStatus.CREATED)
    @DeleteMapping(params ={"id"},produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil deleteStuff(@RequestParam String id){
        stuffService.deleteStuff(id);
        return new ResponseUtil(200,"Stuff Deleted",null);
    }

    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil updateStuff(@RequestBody StuffDTO stuffDTO){
        stuffService.updateStuff(stuffDTO);
        return new ResponseUtil(200,"Stuff Updated",null);
    }

    @GetMapping(path = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil searchStuff(@PathVariable String id) {
        return new ResponseUtil(200, "Done", stuffService.searchStuff(id));
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllStuff() {
        return new ResponseUtil(200, "Done", stuffService.getAllStuff());
    }

}
