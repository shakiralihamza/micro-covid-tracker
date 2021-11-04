import React from 'react';
import {Container, Divider, Grid, Typography} from "@mui/material";

function Symptoms() {
    return (
        <Container maxWidth={"lg"}>
            <Grid container style={{margin: '30px 0 10px', padding: '0 50px'}}>
                <Grid item>
                    <Typography variant={'body1'} fontSize={20}>
                        Symptoms
                    </Typography>
                </Grid>
            </Grid>
            <Grid container style={{marginTop: '20px', padding: '0 50px'}}>
                <Grid item sx={{color: 'text.secondary'}} xs={8}>
                    COVID-19 affects different people in different ways. Most infected people will develop mild to
                    moderate illness and recover without hospitalization.
                    <br/>
                    <Divider style={{margin:'20px 0'}}/>
                    <Typography fontSize={14}>
                        Most common symptoms:
                        <ul style={{margin: 0, padding: '0 0 0 20px'}}>
                            <li>fever</li>
                            <li>cough</li>
                            <li>tiredness</li>
                            <li>loss of taste or smell</li>
                        </ul>
                        <br/>
                        Less common symptoms
                        <ul style={{margin: 0, padding: '0 0 0 20px'}}>
                            <li>sore throat</li>
                            <li>headache</li>
                            <li>aches and pains</li>
                            <li>diarrhoea</li>
                            <li>a rash on skin, or discolouration of fingers or toes</li>
                            <li>red or irritated eyes</li>
                        </ul>
                        <br/>
                        Serious symptoms:
                        <ul style={{margin: 0, padding: '0 0 0 20px'}}>
                            <li>difficulty breathing or shortness of breath</li>
                            <li>loss of speech or mobility, or confusion</li>
                            <li>chest pain</li>
                        </ul>
                        <p>Seek immediate medical attention if you have serious symptoms. Always call before visiting
                            your doctor or health facility.</p>
                        <p>People with mild symptoms who are otherwise healthy should manage their symptoms at home.</p>
                        <p>On average it takes 5–6 days from when someone is infected with the virus for symptoms to
                            show, however it can take up to 14 days.
                        </p>
                        <Typography gutterBottom fontSize={14} sx={{color: 'text.disabled'}}>For informational purposes only. Consult your local medical authority for advice.</Typography>
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Symptoms;