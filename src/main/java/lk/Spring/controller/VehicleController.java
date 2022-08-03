package lk.Spring.controller;

import lk.Spring.dto.StuffDTO;
import lk.Spring.dto.VehicleDTO;
import lk.Spring.service.StuffService;
import lk.Spring.service.VehicleService;
import lk.Spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("Vehicle")
@CrossOrigin
public class VehicleController {
    @Autowired
    VehicleService vehicleService;

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil saveVehicle(@RequestBody VehicleDTO vehicleDTO) {
        vehicleService.saveVehicle(vehicleDTO);
        return new ResponseUtil(200,"Vehicle Saved",null);
    }

    @ResponseStatus(HttpStatus.CREATED)
    @DeleteMapping(params ={"id"},produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil deleteVehicle(@RequestParam String id){
        vehicleService.deleteVehicle(id);
        return new ResponseUtil(200,"Vehicle Deleted",null);
    }

    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil updateVehicle(@RequestBody VehicleDTO vehicleDTO){
        vehicleService.updateVehicle(vehicleDTO);
        return new ResponseUtil(200,"Vehicle Updated",null);
    }

    @GetMapping(path = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil searchVehicle(@PathVariable String id) {
        return new ResponseUtil(200, "Done", vehicleService.searchVehicle(id));
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllVehicle() {
        return new ResponseUtil(200, "Done", vehicleService.getAllVehicles());
    }

    @GetMapping(path = "/status",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllByStatus(@RequestParam String status) {
        return new ResponseUtil(200, "Ok", vehicleService.getAllVehiclesByStatus(status));
    }

    @GetMapping(path = "/count/status",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil countAllByStatus(@RequestParam String status) {
        return new ResponseUtil(200, "Ok", vehicleService.countByStatus(status));
    }

    @GetMapping(path = "/regNo",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getVehicleDetails(@RequestParam String regNo) {
        return new ResponseUtil(200, "Ok", vehicleService.vehicleDetails(regNo));
    }

    @PostMapping(value = "/upload", consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil uploadFile(@RequestParam("myFile") MultipartFile myFile, @RequestParam("vehicle") String vehicle){
        System.out.println("Hey");
        System.out.println(vehicle);
        System.out.println(myFile.getName());

        vehicleService.saveVehicleWithImg(vehicle,myFile);
        return new ResponseUtil(200, "New img Added Successfully", null);
    }
}
