import React, {Suspense, useContext} from 'react';
import {Container, Divider, Grid, Typography} from "@mui/material";
import SelectCountryButton from "./SelectCountryButton";
import ChartSection from "./ChartSection";
import StatsSection from "./StatsSection";
import createResource from "../resource";
import SelectTimeButton from "./SelectTimeButton";
import MyContext from "../Context/MyContext";


function Statistics() {
    const {country} = useContext(MyContext);
    const resource = createResource(country);

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
                <Grid item xs={12}>
                    <Typography component={"span"} sx={{color: 'text.secondary', fontSize: '14px'}}>
                        From&nbsp;
                        <Typography component={'span'} sx={{color: 'text.primary', fontSize: '14px'}}>
                            NovelCOVID API
                        </Typography>
                    </Typography>
                </Grid>
                <Grid item style={{marginTop: '20px'}}>
                    <SelectCountryButton/>
                </Grid>
                <Grid item style={{marginTop: '20px', marginLeft: '10px'}}>
                    <SelectTimeButton/>
                </Grid>
            </Grid>
            <Grid container style={{margin: '30px 0 30px', padding: '0 50px'}}>
                <Grid item xs={8}>
                    <Suspense fallback={"Loading..."}>
                        <ChartSection resource={resource} />
                    </Suspense>
                </Grid>
                <Divider orientation={"vertical"} flexItem/>
                <Grid item xs={3} style={{padding: '20px 0 0 20px'}}>
                    <Suspense fallback={"Loading..."}>
                        <StatsSection resource={resource} />
                    </Suspense>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Statistics;