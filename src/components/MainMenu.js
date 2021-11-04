import React from 'react';
import {Container, Grid, Stack, Typography} from "@mui/material";
import MenuButton from "./MenuButton";

function MainMenu() {
    return (
        <Container maxWidth="lg">
            <Grid container style={{margin: '50px 0 30px', padding: '0 50px'}} justifyContent={"space-between"}>
                <Grid item>
                    <Typography variant={"h5"}>Coronavirus Disease</Typography>
                </Grid>
                <Grid item>
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