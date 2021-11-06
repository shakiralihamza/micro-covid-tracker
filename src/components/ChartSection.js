import React, {useContext} from 'react';
import {Bar} from "react-chartjs-2";
import MyContext from "../Context/MyContext";

function ChartSection({resource}) {
    const {time} = useContext(MyContext);
    const data = resource.read();

    let cases, deaths, recovered;
    if (time === 'alltime') {
        cases = data.cases;
        deaths = data.deaths;
        recovered = data.recovered;
    } else if (time === 'today') {
        cases = data.todayCases;
        deaths = data.todayDeaths;
        recovered = data.todayRecovered;
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
                    legend: { display: false },
                    // title: { display: true, text: `Current state in ${country}` },
                    title: { display: true, text: `Current state in ${"italy"}` },
                }}
             type={"bar"}/>
        </>
    );
}

export default ChartSection;