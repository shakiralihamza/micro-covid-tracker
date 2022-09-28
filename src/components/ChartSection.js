import React, {useContext} from 'react';
import {Bar} from "react-chartjs-2";
import MyContext from "../Context/MyContext";

function ChartSection({resource}) {
    const {time, country} = useContext(MyContext);
    const data = resource.read();

    let deaths;
    let cases;
    let recovered;

    if (country === 'worldwide') {
        deaths = data.TotalDeaths;
        cases = data.TotalConfirmed;
        recovered = data.TotalRecovered;
    } else {
        if (time === 'alltime') {
            deaths = data.reduce((acc, item) => acc + item.Deaths, 0);
            cases = data.reduce((acc, item) => acc + item.Confirmed, 0);
            recovered = data.reduce((acc, item) => acc + item.Recovered, 0);
        } else {
            deaths = data[data.length - 1].Deaths;
            cases = data[data.length - 1].Confirmed;
            recovered = data[data.length - 1].Recovered;
        }
    }
    return (
        <>
            <Bar
                data={{
                    labels: ['Cases', 'Recovered', 'Deaths'],
                    datasets: [
                        {
                            label: 'Number of people',
                            backgroundColor: ['rgba(0, 0, 255, 0.1)', 'rgba(0, 255, 0, 0.1)', 'rgba(255, 0, 0, 0.1)'],
                            borderColor: ['rgba(0, 0, 255)', 'rgba(0, 255, 0)', 'rgba(255, 0, 0)'],
                            data: [cases, recovered, deaths],
                            borderWidth: 0.7
                        },
                    ],
                }}
                options={{
                    legend: {display: false},
                    title: { display: true, text: `Current state in ${country}` },
                }}
                type={"bar"}/>
        </>
    );
}

export default ChartSection;
