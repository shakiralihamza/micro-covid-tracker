import React, {useContext, useEffect, useState} from 'react';
import {Grid, Typography} from "@mui/material";
import MyContext from "../Context/MyContext";
import NumberFormat from "react-number-format";

function StatsSection({resource}) {
    const {time, country} = useContext(MyContext);
    const data = resource.read();

    const [cases, setCases] = useState(0);
    const [deaths, setDeaths] = useState(0);
    const [recovered, setRecovered] = useState(0);

    const found = !!data.cases // set found to true/false depending on data.cases

    useEffect(() => {
        if (time === 'alltime') {
            setCases(data.cases);
            setDeaths(data.deaths);
            setRecovered(data.recovered);
        } else if (time === 'today') {
            setCases(data.todayCases);
            setDeaths(data.todayDeaths);
            setRecovered(data.todayRecovered);
        }
    }, [time, country, data.cases, data.deaths, data.recovered, data.todayCases, data.todayDeaths, data.todayRecovered])

    if (found) {
        return (
            <Grid container spacing={3} justifyContent={"center"}>
                <Grid item xs={"auto"} md={12}>
                    <Typography sx={{color: 'text.secondary'}} fontSize={11}>Cases</Typography>
                    <Typography fontSize={15}>
                          <NumberFormat
                            value={cases}
                            displayType="text"
                            thousandSeparator={true}
                        />
                        {/*{cases}*/}
                    </Typography>
                </Grid>
                <Grid item xs={"auto"} md={12}>
                    <Typography sx={{color: 'text.secondary'}} fontSize={11}>Deaths</Typography>
                    <Typography fontSize={15}>
                          <NumberFormat
                            value={deaths}
                            displayType="text"
                            thousandSeparator={true}
                        />
                        {/*{deaths}*/}
                    </Typography>
                </Grid>
                <Grid item xs={"auto"} md={12}>
                    <Typography sx={{color: 'text.secondary'}} fontSize={11}>Recovered</Typography>
                    <Typography fontSize={15}>
                        <NumberFormat
                            value={recovered}
                            displayType="text"
                            thousandSeparator={true}
                        />
                        {/*{recovered}*/}
                    </Typography>
                </Grid>
            </Grid>
        );
    } else {
        return "Data not found"
    }
}

export default StatsSection;