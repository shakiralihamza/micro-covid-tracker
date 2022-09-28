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

    let _deaths;
    let _cases;
    let _recovered;

    if (country === 'worldwide') {
        _deaths = data.TotalDeaths;
        _cases = data.TotalConfirmed;
        _recovered = data.TotalRecovered;
    } else {
        if (time === 'alltime') {
            _deaths = data.reduce((acc, item) => acc + item.Deaths, 0);
            _cases = data.reduce((acc, item) => acc + item.Confirmed, 0);
            _recovered = data.reduce((acc, item) => acc + item.Recovered, 0);
        } else {
            _deaths = data[data.length - 1].Deaths;
            _cases = data[data.length - 1].Confirmed;
            _recovered = data[data.length - 1].Recovered;
        }
    }

    useEffect(() => {
        setCases(_cases);
        setDeaths(_deaths);
        setRecovered(_recovered);
    }, [time, country, _cases, _deaths, _recovered])

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
                </Typography>
            </Grid>
        </Grid>
    );
}

export default StatsSection;
