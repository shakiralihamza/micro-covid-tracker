import React from 'react';
import {Line} from "react-chartjs-2";

function ChartSection() {
    return (
        <>
            <Line data={{
                labels: ['pipo1', 'pipo2', 'pipo2', 'pipo2', 'pipo2'],
                datasets: [{
                    data: [5, 8, 34, 756],
                    label: 'confirmed',
                    borderColor: '#3333ff',
                    fill: false
                }, {
                    data: [5, 454654, 34, 7566456, 4565464],
                    label: 'deaths',
                    borderColor: '#93457f',
                    fill: true
                }, {
                    data: [5, 5654, 34, 756, 456546],
                    label: 'deaths',
                    borderColor: '#2f8dbe',
                    fill: true
                }, {
                    data: [5, 4554, 6546, 756, 456],
                    label: 'deaths',
                    borderColor: '#3a9f3b',
                    fill: true
                }, {
                    data: [556, 4554, 34, 756, 456456],
                    label: 'deaths',
                    borderColor: '#ec4747',
                    fill: true
                }]
            }} type={"line"}/>
        </>
    );
}

export default ChartSection;