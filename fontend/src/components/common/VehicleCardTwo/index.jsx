import {Typography} from "@mui/material";
import React, {Component} from "react";
import LocalGasStationOutlinedIcon from "@mui/icons-material/LocalGasStationOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

// import car from "../../../assets/img/cover/car_01.jpg"

class VehicleCardTwo extends Component {
    render() {
        return (
            <div
                style={{minWidth: "330px", height: "430.98px"}}
                // style={{ width: "412.5px", height: "567.38px" }}
                className="flex flex-col bg-stone-900 rounded-3xl order-blue-500 border hover:cursor-pointer"
            >
                <div
                    className="rounded-t-3xl bg-hero-pattern bg-cover"
                    style={{height: "204px"}}
                ></div>
                <div className="text-white flex flex-col justify-between">
                    <div
                        className="flex justify-center items-center text-center bg-slate-000 p-4"
                        style={{maxWidth: "330px", height: "93.06px"}}
                    >
                        <Typography
                            variant="h5"
                            className="font-bold break-words font-dosis"
                        >
                            Toyota Corolla Axio
                        </Typography>
                    </div>
                    <div
                        className=" flex flex-row justify-evenly items-center bg-stone-800 text-stone-300"
                        style={{height: "60px"}}
                    >
                        <div className="flex flex-col items-center">
                            <div>
                                <LocalGasStationOutlinedIcon/>
                            </div>
                            <div>Petrol</div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div>
                                <PeopleAltOutlinedIcon/>
                            </div>
                            <div>4</div>
                        </div>
                        <div>
                            <div className="flex flex-col items-center">
                                <SettingsOutlinedIcon/>
                            </div>
                            <div>Auto</div>
                        </div>
                    </div>
                    <div
                        className="flex flex-row justify-around items-center bg-yellow-000 rounded-b-3xl "
                        style={{height: "70px"}}
                    >
                        <div className="flex flex-col justify-center items-center">
                            <Typography variant="p" className="font-bold">
                                Rs. 2500
                            </Typography>
                            <Typography variant="p" className="overline">
                                Day
                            </Typography>
                        </div>
                        <div></div>
                        <div className=" flex flex-col justify-center items-center">
                            <Typography variant="p" className="font-bold">
                                Rs. 25000
                            </Typography>
                            <Typography variant="p" className="overline">
                                Month
                            </Typography>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default VehicleCardTwo;
