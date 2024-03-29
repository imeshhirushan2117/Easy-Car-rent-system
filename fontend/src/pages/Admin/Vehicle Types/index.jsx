import {Dialog, DialogContent, DialogTitle, Grid, IconButton, Tooltip, Typography,} from "@mui/material";
import React, {Component} from "react";
import Navbar from "../../../components/common/Navbar/Admin";
import Sidebar from "../../../components/common/Sidebar";
import CommonButton from "../../../components/common/Button";
import CommonDataTable from "../../../components/common/Table";
import AddIcon from "@mui/icons-material/Add";
import {withStyles} from "@mui/styles";
import {styleSheet} from "./styles";
import CloseIcon from "@mui/icons-material/Close";
import AddVehicleType from "../../../components/AddVehicleType";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VehicleTypeService from "../../../services/VehicleTypeService";
import CustomSnackBar from "../../../components/common/SnakBar";

class VehicleType extends Component {
    constructor(props) {
        super(props);
        this.state = {
            popup: false,
            alert: false,
            message: "",
            severity: "",

            isUpdate: false,
            updateVehicleType:{},

            //  for table
            data: [],
            loaded: false,

            //  for data table
            columns: [
                {
                    field: "vehicle_Type_Id",
                    headerName: "Vehicle Type ID",
                    width: 400,
                },

                {
                    field: "type",
                    headerName: "Type",
                    width: 400,
                },

                {
                    field: "loss_Damage_Waiver",
                    headerName: "L.D.W.",
                    width: 400,
                    sortable: false,
                },

                {
                    field: "Action",
                    headerName: "Action",
                    width: 400,
                    renderCell: (params) => {
                        return (
                            <>
                                <Tooltip title="Edit">
                                    <IconButton onClick={async () => {
                                        await this.updateVehicleType(params.row);
                                    }}>
                                        <EditIcon className={'text-blue-500'}/>
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Delete">
                                    <IconButton onClick={async () => {
                                        await this.deleteVehicleType(params.row.vehicle_Type_Id);
                                    }}>
                                        <DeleteIcon className={'text-red-500'}/>
                                    </IconButton>
                                </Tooltip>
                            </>
                        )
                    }
                },
            ],
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.popup == true){
            this.loadVtypeData()
        }
    }

    deleteVehicleType = async (id) => {
        let params = {
            id: id
        }
        let res = await VehicleTypeService.deleteVehicleType(params)
        if (res.status === 200){
            this.setState({
                alert: true,
                message: res.data.message,
                severity: 'success'
            })
            this.loadVtypeData()
        }else {
            this.setState({
                alert: true,
                message: res.data.message,
                severity: 'error'
            })
        }
        this.loadVtypeData()
    }

    updateVehicleType = async (data) => {
        const row = data;
        let updateVehicleType = {
            "vehicle_Type_Id": row.vehicle_Type_Id,
            "type": row.type,
            "loss_Damage_Waiver": row.loss_Damage_Waiver,
        }
        await this.setState({updateVehicleType: updateVehicleType})
        await this.setState({
            popup: true,
            isUpdate: true
        })
    }

    async loadVtypeData() {
        // let resp = await PostService.fetchPosts();
        let resp = await VehicleTypeService.fetchVehicleType();
        let nData = [];
        if (resp.status === 200) {
            resp.data.data.map((value, index) => {
                value.id = value.vehicle_Type_Id;
                nData.push(value)
            })

            this.setState({
                loaded: true,
                data: nData,
            });
        }
    }

    componentDidMount() {
        this.loadData();
        console.log("Mounted");
    }

    render() {
        const {classes} = this.props;
        return (
            <Grid container direction={"row"} columns="12">
                <Grid item xs={"auto"}>
                    <Sidebar/>
                </Grid>
                <Grid item xs className="">
                    <Navbar/>
                    <Grid container item xs={"auto"} className="flex p-5 gap-5">
                        <Grid
                            container
                            item
                            xs={12}
                            gap="5px"
                            className="rounded-lg p-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
                        >
                            <CommonButton
                                variant="outlined"
                                label="Add Vehicle Type"
                                onClick={() => this.setState({popup: true})}
                                startIcon={<AddIcon/>}
                            />
                        </Grid>
                        <Grid
                            container
                            item
                            xs={12}
                            gap="5px"
                            className="rounded-lg p-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
                            style={{height: "700px"}}
                        >
                            <CommonDataTable
                                columns={this.state.columns}
                                rows={this.state.data}
                                rowsPerPageOptions={5}
                                pageSize={10}
                                // checkboxSelection={true}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Dialog
                    open={this.state.popup}
                    maxWidth="md"
                    classes={{paper: classes.dialogWraper}}
                >
                    <DialogTitle style={{paddingRight: "0px"}}>
                        <div style={{display: "flex"}}>
                            <Typography
                                variant="h4"
                                component="div"
                                className="font-bold flex-grow"
                                style={{flexGrow: 1}}
                            >
                                Add New Vehicle Type
                            </Typography>

                            <IconButton onClick={() => this.setState({popup: false})}>
                                <CloseIcon/>
                            </IconButton>
                        </div>
                    </DialogTitle>
                    <DialogContent dividers>
                        <AddVehicleType isUpdate={this.state.isUpdate} typeObj={this.state.updateVehicleType}/>
                    </DialogContent>
                </Dialog>
                <CustomSnackBar
                    open={this.state.alert}
                    onClose={() => {
                        this.setState({alert: false})
                    }}
                    message={this.state.message}
                    autoHideDuration={3000}
                    severity={this.state.severity}
                    variant={'filled'}
                />
            </Grid>
        );
    }
}

export default withStyles(styleSheet)(VehicleType);
