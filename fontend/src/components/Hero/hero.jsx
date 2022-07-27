import React, {Component} from 'react';
import {Typography} from "@mui/material";

class Hero extends Component {
    render() {
        return (
            <div className={'h-screen  flex flex-col justify-center item-center'}>
                <div className={'bg-carImg4 w-screen h-screen bg-cover bg-origin-border bg-no-repeat flex flex-col justify-center item-center'}>
                    <div className={'flex flex-col pl-7'}>
                        <Typography className={'text-white font-bold  mt-1.5  '}   variant="h3" component={'p'}>Rent<Typography className={'text-red font-bold  mt-1.5  '}   variant="h2" component={'p'}>OUR CARS</Typography> </Typography>
                        <Typography className={'text-white font-bold  mt-1.5  '}   variant="h3">Make your life easily..!</Typography>

                    </div>
                </div>
            </div>
        );
    }
}

export default Hero;