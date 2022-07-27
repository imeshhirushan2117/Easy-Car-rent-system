import React, {Component} from 'react';
import {Grid, InputAdornment, OutlinedInput, Typography} from "@mui/material";
import Footer from "../../components/Footer";
import SideFilter from "../../components/common/SideFilter";
import VehicleCardTwo from "../../components/common/VehicleCardTwo";
import SearchIcon from '@mui/icons-material/Search';
import CommonButton from "../../components/common/Button";


class ViewAllVehicles extends Component {
    render() {
        const {classes} = this.props
        return (
            <Grid container direction={"column"} xs={12} className={'mt-10'}>

                <Grid container item xs={12} spacing={5} className={'bg-gray-50 '}>

                    {/*<Grid item xs={12} className={'p-10'}>
                    <NavBar />
                </Grid>*/}

                    <Grid container item xs={12} justifyContent={'space-around'} alignItems={'center'} gap={'10px'}
                          className={'p-5 bg-stone-900'}>
                        <Typography
                            variant={"h5"}
                            className="text-white font-dosis font-bold tracking-wide select-none"
                        >
                            Easy Car Rental
                        </Typography>
                        <Grid container justifyContent={'center'} item xs={6} gap={'5px'}>
                            <OutlinedInput
                                id="outlined-adornment-weight"
                                // value={values.weight}
                                // onChange={handleChange('weight')}
                                endAdornment={<InputAdornment position="end"><SearchIcon/></InputAdornment>}
                                aria-describedby="outlined-weight-helper-text"
                                inputProps={{
                                    'aria-label': 'weight',
                                }}
                                className={'text-black bg-white'}
                                style={{width: '70%'}}
                            />
                            <CommonButton
                                size="large"
                                variant="outlined"
                                label="Search"
                                className="bg-blue-500 text-white hover:bg-blue-600"
                                // onClick={() => this.setState({ open: true })}
                            />
                        </Grid>
                        <CommonButton
                            size="large"
                            variant="outlined"
                            label="Profile"
                            className="text-white hover:bg-white hover:text-black "
                            // onClick={() => this.setState({ open: true })}
                        />
                    </Grid>

                    <Grid item xs={"auto"} className={'p-10'}>
                        <SideFilter/>
                    </Grid>

                    <Grid container direction={'row'} gap={'15px'} justifyContent={'center'} item xs
                          className={'bg-gray-100 pb-20 pr-10'}>

                        <VehicleCardTwo/>
                        <VehicleCardTwo/>
                        <VehicleCardTwo/>
                        <VehicleCardTwo/>
                        <VehicleCardTwo/>
                        <VehicleCardTwo/>
                        <VehicleCardTwo/>
                        <VehicleCardTwo/>


                    </Grid>
                </Grid>
                <Grid xs={12} item>
                    <Footer/>
                </Grid>
            </Grid>);
    }
}

export default ViewAllVehicles;