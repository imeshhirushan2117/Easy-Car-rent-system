import React, {Component} from "react";
import NavBar from "../../components/NavBar";
import ListVehicle from "../../components/ListVehicle";
import Footer from "../../components/Footer";
import {Grid} from "@mui/material";
import Hero from "../../components/Hero/hero";

class Home extends Component {
    render() {
        return (
            // overflowX:'hidden'
            <Grid container>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <NavBar/>
                    <Hero/>
                    <ListVehicle/>
                    <Footer/>
                    {/* <LoginUser/>  */}

                    {/* <LoginAdmin/>
                <LoginDriver/> */}
                </div>
            </Grid>
        );
    }
}

export default Home;
