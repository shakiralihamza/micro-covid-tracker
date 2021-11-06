import React from 'react';
import {Container, Divider, Grid, Typography} from "@mui/material";
import SelectCountryButton from "./SelectCountryButton";
import ChartSection from "./ChartSection";
import StatsSection from "./StatsSection";

function Statistics() {
    return (
        <Container maxWidth={"lg"}>
            <Grid container style={{margin: '30px 0 10px', padding: '0 50px'}}>
                <Grid item>
                    <Typography variant={'body1'} fontSize={20}>
                        Statistics
                    </Typography>
                </Grid>
            </Grid>
            <Grid container style={{padding: '0 50px'}}>
                <Grid item>
                    <Typography component={"span"} sx={{color: 'text.secondary', fontSize: '14px'}}>
                        From&nbsp;
                        <Typography component={'span'} sx={{color: 'text.primary', fontSize: '14px'}}>
                            this data api
                        </Typography>
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography component={"span"} sx={{color: 'text.secondary', fontSize: '14px'}}>
                        &nbsp;&nbsp;-&nbsp;
                        Last updated: 3 days ago
                    </Typography>
                </Grid>
                <Grid item xs={12} style={{marginTop: '20px'}}>
                    <SelectCountryButton/>
                </Grid>
            </Grid>
            <Grid container style={{margin: '30px 0 10px', padding: '0 50px', height:'500px'}}>
                <Grid item xs={8}>
                    <ChartSection/>
                </Grid>
                <Divider orientation={"vertical"} flexItem/>
                <Grid item xs={3} style={{padding: '20px 0 0 20px'}}>
                   <StatsSection/>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Statistics;