import {Dialog, DialogContent, DialogTitle, Grid, IconButton, Typography,} from "@mui/material";
import React, {Component} from "react";
import Navbar from "../../../components/common/Navbar/Admin";
import Sidebar from "../../../components/common/Sidebar";
import CommonButton from "../../../components/common/Button";
import CommonDataTable from "../../../components/common/Table";
import AddIcon from "@mui/icons-material/Add";
import {withStyles} from "@mui/styles";
import {styleSheet} from "./styles";
import CloseIcon from "@mui/icons-material/Close";
import AddDriver from "../../../components/AddDriver";

class EmployeeManage extends Component {
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
                    field: "staffId",
                    headerName: "Employee ID",
                    width: 200,
                },

                {
                    field: "name",
                    headerName: "Name",
                    width: 200,
                },

                {
                    field: "address",
                    headerName: "Address",
                    width: 200,
                    sortable: false,
                },

                {
                    field: "mobileNo",
                    headerName: "Mobile No.",
                    width: 200,
                    sortable: false,
                },

                {
                    field: "email",
                    headerName: "Email",
                    width: 200,
                    sortable: false,
                },

                {
                    field: "password",
                    headerName: "Password",
                    width: 200,
                    sortable: false,
                },

                {
                    field: "type",
                    headerName: "Type",
                    width: 200,
                    sortable: false,
                },

                {
                    field: "Action",
                    headerName: "Action",
                    width: 200,
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
                                label="Add Employee"
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
                                Add New Employee
                            </Typography>

                            <IconButton onClick={() => this.setState({popup: false})}>
                                <CloseIcon/>
                            </IconButton>
                        </div>
                    </DialogTitle>
                    <DialogContent dividers>
                        <AddDriver/>
                    </DialogContent>
                </Dialog>
            </Grid>
        );
    }
}

export default withStyles(styleSheet)(EmployeeManage);
