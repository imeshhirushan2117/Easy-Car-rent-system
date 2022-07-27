import {
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React, { Component } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../../components/common/Navbar/Admin";
import Sidebar from "../../../components/common/Sidebar";
import CommonButton from "../../../components/common/Button";
import CommonDataTable from "../../../components/common/Table";
import AddIcon from "@mui/icons-material/Add";
import { withStyles } from "@mui/styles";
import { styleSheet } from "./styles";
import CloseIcon from "@mui/icons-material/Close";
import LoginUser from "../../Session/Login/user";
import AddNewVehicle from "../../../components/AddVehicle";
class VehicleManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popup: false,
      alert: false,
      message: "",
      severity: "",

      //  for table
      data: [],
      loaded: false,

      //  for data table
      columns: [
        {
          field: "registrationNumber",
          headerName: "Reg Num",
          width: 150,
        },

        {
          field: "brand",
          headerName: "Brand",
          width: 150,
        },

        {
          field: "color",
          headerName: "color",
          width: 125,
          sortable: false,
        },

        {
          field: "fuelType",
          headerName: "Fule Type",
          width: 150,
        },

        {
          field: "noOfPassengers",
          headerName: "Num. Passengers",
          width: 150,
        },

        {
          field: "runningKm",
          headerName: "Running km",
          width: 150,
        },

        {
          field: "transmissionType",
          headerName: "Transmission Type",
          width: 150,
        },

        {
          field: "rates",
          headerName: "Rates",
          width: 150,
        },

        {
          field: "type",
          headerName: "Type",
          width: 150,
        },

        {
          field: "status",
          headerName: "Status",
          width: 150,
        },

        {
          field: "action",
          headerName: "Action",
          width: 150,
        },
      ],
    };
  }

  async loadData() {
    // let resp = await PostService.fetchPosts();
    const data = [];
    this.setState({
      loaded: true,
      data: data,
    });
    console.log(this.state.data);
    // console.log(JSON.stringify(resp.data));
  }

  componentDidMount() {
    this.loadData();
    console.log("Mounted");
  }

  render() {
    const { classes } = this.props;
    return (
      <Grid container direction={"row"} columns="12">
        <Grid item xs={"auto"}>
          <Sidebar />
        </Grid>
        <Grid item xs className="">
          <Navbar />
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
                label="Add Vehicle"
                onClick={() => this.setState({ popup: true })}
                startIcon={<AddIcon />}
              />
              <CommonButton
                variant="outlined"
                label="Add Vehicle Rates"
                startIcon={<AddIcon />}
              />
              <CommonButton
                variant="outlined"
                label="Add Vehicle Types"
                startIcon={<AddIcon />}
              />
            </Grid>
            <Grid
              container
              item
              xs={12}
              gap="5px"
              className="rounded-lg p-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
              style={{ height: "700px" }}
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
          classes={{ paper: classes.dialogWraper }}
        >
          <DialogTitle style={{ paddingRight: "0px" }}>
            <div style={{ display: "flex" }}>
              <Typography
                variant="h4"
                component="div"
                className="font-bold flex-grow"
                style={{ flexGrow: 1 }}
              >
                Add New Vehicle
              </Typography>

              <IconButton onClick={() => this.setState({ popup: false })}>
                <CloseIcon />
              </IconButton>
            </div>
          </DialogTitle>
          <DialogContent dividers>
            <AddNewVehicle/>
          </DialogContent>
        </Dialog>
      </Grid>
    );
  }
}
export default withStyles(styleSheet)(VehicleManage);
