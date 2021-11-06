import React from 'react';
import {Divider, Grid, Typography} from "@mui/material";

function StatsSection() {
    return (
        <Grid container spacing={0}>
            <Grid item xs={3}>
                <Typography sx={{color: 'text.secondary'}} fontSize={11}>Cases</Typography>
                <Typography fontSize={15}>441K</Typography>
            </Grid>
            <Divider orientation={"vertical"} flexItem/>

            <Grid item xs={4} style={{paddingLeft: '10px'}}>
                <Typography sx={{color: 'text.secondary'}} fontSize={11}>Deaths</Typography>
                <Typography fontSize={15}>12,936</Typography>
            </Grid>
            <Divider orientation={"vertical"} flexItem/>

            <Grid item xs={4} style={{paddingLeft: '10px'}}>
                <Typography sx={{color: 'text.secondary'}} fontSize={11}>Recovered</Typography>
                <Typography fontSize={15}>12,93688768</Typography>
            </Grid>
        </Grid>
    );
}

export default StatsSection;