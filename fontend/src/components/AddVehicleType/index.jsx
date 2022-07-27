import {Grid} from "@mui/material";
import React, {Component} from "react";
import {styleSheet} from "./styles";
import {withStyles} from "@mui/styles";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import CommonButton from "../common/Button";


class AddVehicleType extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                userName: "", password: "",
            },
        };
    }

    handleSubmit = async () => {
        console.log("Hi handle");
        console.log(this.state.formData);
    };

    handleChange = (event) => {
        let id = event.target.name;
        switch (id) {
            case "userName":
                const userName = event.target.value;
                this.setState(Object.assign(this.state.formData, {userName: userName}));
                // this.setState({ userId });
                break;

            case "password":
                const password = event.target.value;
                this.setState(Object.assign(this.state.formData, {password: password}));
                break;

            default:
                break;
        }
    };

    render() {
        const {classes} = this.props;
        return (<Grid container direction={'row'} xs={12} className={classes.container}>
            <ValidatorForm
                onSubmit={this.handleSubmit}
                onError={(errors) => console.log(errors)}
                className={classes.validator}
            >
                <Grid item container direction={'row'} xs={12} gap={'15px'} justifyContent={'center'}
                      alignContent={'center'}
                      className={classes.container}>
                    <Grid item container direction={'column'} xs={12} gap={'15px'}>
                        <TextValidator
                            label="Vehicle Type ID"
                            onChange={this.handleChange}
                            name="password"
                            value={this.state.formData.password}
                            validators={["required"]}
                            errorMessages={["This field is required"]}
                            type={"password"}
                            className="w-full"
                            style={{minWidth: '100%'}}
                        />
                        <TextValidator
                            label="Type"
                            onChange={this.handleChange}
                            name="password"
                            value={this.state.formData.password}
                            validators={["required"]}
                            errorMessages={["This field is required"]}
                            type={"password"}
                            className="w-full"
                            style={{minWidth: '100%'}}
                        />
                        <TextValidator
                            label="L.D.W"
                            onChange={this.handleChange}
                            name="password"
                            value={this.state.formData.password}
                            validators={["required"]}
                            errorMessages={["This field is required"]}
                            type={"password"}
                            className="w-full"
                            style={{minWidth: '100%'}}
                        />
                        <CommonButton
                            size="large"
                            variant="contained"
                            label="Add"
                            type="submit"
                            className="text-white bg-blue-500 font-bold tracking-wide"
                            style={{backgroundColor: 'rgba(25, 118, 210, 0.95)', width: '100%'}}
                        />
                    </Grid>

                </Grid>
            </ValidatorForm>

        </Grid>);
    }
}

export default withStyles(styleSheet)(AddVehicleType);