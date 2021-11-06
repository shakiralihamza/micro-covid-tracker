import React from 'react';
import {Avatar, Box, Container, Grid, Paper, Typography} from "@mui/material";

function Prevention() {
    return (
        <Container maxWidth={"lg"}>
            <Grid container style={{margin: '30px 0 10px'}}>
                <Grid item>
                    <Typography variant={'body1'} fontSize={20}>
                        Prevention
                    </Typography>
                </Grid>
            </Grid>
            <Grid container style={{marginTop: '20px'}}>
                <Grid item xs={12} sm={11} md={10} lg={8}>
                    <Paper variant={"outlined"} sx={{width: '100%', padding: '20px 0'}}>
                        <Grid container justifyContent={"center"} direction={"column"} alignItems={"center"} spacing={1}>
                            <Grid item>
                                <Avatar sx={{width: 80, height: 80}} src="https://www.gstatic.com/healthricherkp/campaigns/wear-mask-save-lives/UZ9ZuX.svg" />
                            </Grid>
                            <Grid item>
                                <Typography variant={'h4'} gutterBottom sx={{color: 'text.secondary'}} fontWeight={900}>
                                    <Box component={"span"} sx={{display: {xs: 'none', sm: 'inline'}}}>Wear a mask.&nbsp;</Box>
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