import { Grid, Typography } from "@mui/material";
import React, { Component } from "react";
import CommonButton from "../../common/Button";
import VehicleCard from "../../common/VehicleCard";

class LuxuryCars extends Component {
  render() {
    return (
      <Grid
        container
        justifyContent="flex-start"
        alignItems="stretch"
        className="backdrop-blur-md pt-10"
      >
        <Grid
          item
          direction="column"
          container
          className="bg-zinc-000 bg-red-000 text-white text-center"
        >
          <Grid item>
            <Typography
              variant="h4"
              component="h2"
              className="font-extrabold p-5 text-yellow-500 underline  underline-offset-4 font-dosis"
            >
              Luxury Cars
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          direction="column"
          justifyContent="space-evenly"
          alignItems="center"
          gap={5}
          item
          flex={"1"}
          className="p-6 w-min"
        >
          <Grid container item justifyContent="center" gap={5}>
            <VehicleCard />
            <VehicleCard />
            <VehicleCard />
            <VehicleCard />
          </Grid>
          <Grid>
            <CommonButton
              size="large"
              variant="outlined"
              label="See More"
              className="text-white border-white hover:bg-white hover:text-black font-bold"
            />
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
export default LuxuryCars;
