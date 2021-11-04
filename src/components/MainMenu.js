import React from 'react';
import {Container, Grid, Stack, Typography} from "@mui/material";
import MenuButton from "./MenuButton";

function MainMenu() {
    return (
        <Container maxWidth="lg">
            <Grid container style={{margin: '50px 0', padding: '0 40px'}} spacing={3} justifyContent={"space-between"}>
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