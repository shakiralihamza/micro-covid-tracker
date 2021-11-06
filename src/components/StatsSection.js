import React from 'react';
import {Divider, Grid, Typography} from "@mui/material";

function StatsSection() {
    return (
        <Grid container spacing={0}>
            <Grid item xs={8}>
                <Typography sx={{color: 'text.secondary'}} fontSize={11}>Total cases</Typography>
                <Typography fontSize={15}>441K</Typography>
            </Grid>
            <Divider orientation={"vertical"} flexItem/>

            <Grid item xs={3} style={{paddingLeft: '10px'}}>
                <Typography sx={{color: 'text.secondary'}} fontSize={11}>Deaths</Typography>
                <Typography fontSize={15}>12,936</Typography>
            </Grid>
        </Grid>
    );
}

export default StatsSection;