import React from 'react';
import {Container, Divider, Grid, Typography} from "@mui/material";
import SelectCountryButton from "./SelectCountryButton";

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
                    Chart
                </Grid>
                <Divider orientation={"vertical"} flexItem/>
                <Grid item xs={3} style={{padding: '20px 0 0 20px'}}>
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
                </Grid>
            </Grid>
        </Container>
    );
}

export default Statistics;