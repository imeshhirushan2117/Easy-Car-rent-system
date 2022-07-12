package lk.Spring.controller;

import lk.Spring.dto.StuffDTO;
import lk.Spring.dto.Vehicle_TypeDTO;
import lk.Spring.service.StuffService;
import lk.Spring.service.Vehicle_TypeService;
import lk.Spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("VehicleType")
@CrossOrigin
public class Vehicle_TypeController {
    @Autowired
    Vehicle_TypeService vehicle_typeService;

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil saveVehicleType(@ModelAttribute Vehicle_TypeDTO vehicle_typeDTO) {
        vehicle_typeService.saveVehicleType(vehicle_typeDTO);
        return new ResponseUtil(200,"Saved",null);
    }

    @ResponseStatus(HttpStatus.CREATED)
    @DeleteMapping(params ={"id"},produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil deleteVehicleType(@RequestParam String id){
        vehicle_typeService.deleteVehicleType(id);
        return new ResponseUtil(200,"Vehicle Type Deleted",null);
    }

    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil updateVehicleType(@RequestBody Vehicle_TypeDTO vehicle_typeDTO){
        vehicle_typeService.updateVehicleType(vehicle_typeDTO);
        return new ResponseUtil(200,"Vehicle Type Updated",null);
    }

    @GetMapping(path = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil searchVehicleType(@PathVariable String id) {
        return new ResponseUtil(200, "Done", vehicle_typeService.searchVehicleType(id));
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllVehicleType() {
        return new ResponseUtil(200, "Done", vehicle_typeService.getAllVehicleType());
    }
}
