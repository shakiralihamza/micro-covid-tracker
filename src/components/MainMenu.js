import React from 'react';
import {Container, Grid, Stack, Typography} from "@mui/material";
import MenuButton from "./MenuButton";

function MainMenu() {
    return (
        <Container maxWidth="md">
            <Grid container style={{marginTop: '200px'}} spacing={3}>
                <Grid item>
                    <Typography variant={"h5"}>Coronavirus Disease</Typography>
                </Grid>
                <Grid item>
                    <Stack spacing={2} direction="row">
                        <MenuButton menuName={'statistics'}/>
                        <MenuButton menuName={'symptoms'}/>
                        <MenuButton menuName={'precautions'}/>
                    </Stack>
                </Grid>
            </Grid>
        </Container>
    );
}

export default MainMenu;