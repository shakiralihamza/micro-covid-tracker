import React from 'react';
import {Avatar, Container, Grid, Paper, Typography} from "@mui/material";

function Prevention() {
    return (
        <Container maxWidth={"lg"}>
            <Grid container style={{margin: '30px 0 10px', padding: '0 50px'}}>
                <Grid item>
                    <Typography variant={'body1'} fontSize={20}>
                        Prevention
                    </Typography>
                </Grid>
            </Grid>
            <Grid container style={{marginTop: '20px', padding: '0 50px'}}>
                <Grid item xs={8}>
                    <Paper variant={"outlined"} sx={{width: '100%', padding: '20px 0'}}>
                        <Grid container justifyContent={"center"} direction={"column"} alignItems={"center"} spacing={1}>
                            <Grid item>
                                <Avatar sx={{width: 80, height: 80}} src="https://www.gstatic.com/healthricherkp/campaigns/wear-mask-save-lives/UZ9ZuX.svg" />
                            </Grid>
                            <Grid item>
                                <Typography variant={'h4'} gutterBottom sx={{color: 'text.secondary'}} fontWeight={900}>
                                    Wear a mask.
                                    Save lives.
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant={'body2'} sx={{color: 'text.secondary'}} fontSize={25}>Wear a mask</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant={'body2'} sx={{color: 'text.secondary'}} fontSize={25}>Clean your hands</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant={'body2'} sx={{color: 'text.secondary'}} fontSize={25}>Keep a safe distance</Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Prevention;