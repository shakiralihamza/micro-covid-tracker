import React from 'react';
import {Container, Grid, Stack, Typography} from "@mui/material";
import MenuButton from "./MenuButton";

function MainMenu() {
    return (
        <Container maxWidth="lg">
            <Grid container style={{margin: '50px 0 30px'}} justifyContent={"space-between"}>
                <Grid item xs={12} md>
                    <Typography variant={"h5"}>Coronavirus Disease</Typography>
                </Grid>
                <Grid item sx={{marginTop: {xs: '10px', md: 0}}}>
                    <Stack spacing={2} direction="row">
                        <MenuButton menuName={'statistics'}/>
                        <MenuButton menuName={'symptoms'}/>
                        <MenuButton menuName={'prevention'}/>
                    </Stack>
                </Grid>
            </Grid>
        </Container>
    );
}

export default MainMenu;