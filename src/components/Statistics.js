import React, {Suspense, useContext} from 'react';
import {Box, Container, Divider, Grid, LinearProgress, Typography} from "@mui/material";
import SelectCountryButton from "./SelectCountryButton";
import ChartSection from "./ChartSection";
import StatsSection from "./StatsSection";
import createResource from "../resource";
import SelectTimeButton from "./SelectTimeButton";
import MyContext from "../Context/MyContext";


function Statistics() {
    const {country} = useContext(MyContext);
    const resource = createResource(country);

    const linearPreloader = () => (
        <Box sx={{width: '100%'}}>
            <LinearProgress/>
        </Box>
    );
    return (
        <Container maxWidth={"lg"}>
            <Grid container style={{margin: '30px 0 10px'}}>
                <Grid item>
                    <Typography variant={'body1'} fontSize={20}>
                        Statistics
                    </Typography>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item>
                    <Typography component={"span"} sx={{color: 'text.secondary', fontSize: '14px'}}>
                        From&nbsp;
                        <Typography component={'span'} sx={{color: 'text.primary', fontSize: '14px'}}>
                            Novel COVID API
                        </Typography>
                    </Typography>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item style={{marginTop: '20px'}}>
                    <SelectCountryButton/>
                </Grid>
                <Grid item style={{marginTop: '20px', marginLeft: '10px'}}>
                    <SelectTimeButton/>
                </Grid>
            </Grid>

            <Grid container sx={{margin: '30px 0 30px'}}>
                <Suspense fallback={linearPreloader()}>
                    <Grid item xs={12} md={8} order={{xs: 1, md: 0}} sx={{marginTop: {xs: '30px', md: 0}}}>
                        <ChartSection resource={resource}/>
                    </Grid>
                    <Divider orientation={"vertical"} flexItem/>
                    <Grid item xs={12} md={3} sx={{padding: '20px 0 0 20px'}}>
                        <StatsSection resource={resource}/>
                    </Grid>
                </Suspense>
            </Grid>
        </Container>
    );
}

export default Statistics;