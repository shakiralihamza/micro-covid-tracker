import React, {useContext} from 'react';
import {Divider, Grid, Typography} from "@mui/material";
import MyContext from "../Context/MyContext";
import NumberFormat from "react-number-format";

function StatsSection({resource}) {
    const {time} = useContext(MyContext);
    const data = resource.read();

    let found, cases, deaths, recovered;
    if (data.cases) {
        found = true;
        if (time === 'alltime') {
            cases = data.cases;
            deaths = data.deaths;
            recovered = data.recovered;
        } else if (time === 'today') {
            cases = data.todayCases;
            deaths = data.todayDeaths;
            recovered = data.todayRecovered;
        }
    } else {
        found = false
    }

    if (found) {
        return (
            <Grid container spacing={0}>
                <Grid item xs={5}>
                    <Typography sx={{color: 'text.secondary'}} fontSize={11}>Cases</Typography>
                    <Typography fontSize={15}>
                        <NumberFormat
                            value={cases}
                            displayType="text"
                            thousandSeparator={true}
                        />
                    </Typography>
                </Grid>
                <Divider orientation={"vertical"} flexItem/>

                <Grid item xs={5} style={{paddingLeft: '10px'}}>
                    <Typography sx={{color: 'text.secondary'}} fontSize={11}>Deaths</Typography>
                    <Typography fontSize={15}>
                        <NumberFormat
                            value={deaths}
                            displayType="text"
                            thousandSeparator={true}
                        />
                    </Typography>
                </Grid>

                <Grid item xs={12} style={{marginTop: '10px'}}>
                    <Typography sx={{color: 'text.secondary'}} fontSize={11}>Recovered</Typography>
                    <Typography fontSize={15}>
                        <NumberFormat
                            value={recovered}
                            displayType="text"
                            thousandSeparator={true}
                        />
                    </Typography>
                </Grid>
            </Grid>
        );
    } else {
        return "Data not found"
    }
}
export default StatsSection;