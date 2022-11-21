// 한달간 전력 사용량
import React, {useEffect, useState} from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';
import {
    Card,
    CardBody,
    UncontrolledButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledAlert
} from 'reactstrap';
const PerformanceChart = () => {
    const apexBarChartOpts = {
        grid: {
            padding: {
                left: 0,
                right: 0,
            },
        },
        chart: {
            height: 260,
            type: 'bar',
            stacked: true,
            parentHeightOffset: 0,
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '40%',
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            show: true,
            width: 0.5,
            colors: ['transparent'],
        },
        zoom: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        colors: ['#bacd59', '#e3eaef'],
        xaxis: {
            categories: ['1일', '2일', '3일', '4일', '5일', '6일', '7일', '8일', '9일', '10일', '11일', '12일', '13일', '14일', '15일', '16일', '17일', '18일', '19일', '20일', '21일', '22일', '23일', '24일', '25일', '26일', '27일', '28일', '29일', '30일'],
            axisBorder: {
                show: false,
            },
        },
        yaxis: {
            labels: {
                formatter: function(val) {
                    return val + 'kW';
                },
            },
        },
        fill: {
            opacity: 1,
        },
        tooltip: {
            // y: {
            //     formatter: function(y) {
            //         if (typeof y !== 'undefined' && y > 100) {
            //             // return y.toFixed(0) + '원';
            //             return y.toFixed(0);
            //         }
            //         else if ( y < 100){
            //             return y+'%';
            //         }
            //         return y;
            //     },
            // },
            y: {
                formatter: function(val) {
                    return '' + val.toFixed(2) + 'kW';
                },
            },
        },
    };

    const apexBarChartData = [
        {
            name: '전력사용량',
            data: [59.472877999999994,
                63.841999999999985,
                62.104000000000006,
                50.438,
                61.78400000000001,
                48.17199999999999,
                44.467999999999996,
                12.687999999999986,
                60.125999999999976,
                54.301999999999985,
                53.93399999999999,
                57.339999999999996,
                36.167999999999985,
                40.168,
                53.30000000000001,
                19.705999999999996,
                59.71400000000002,
                62.59999999999999,
                47.70599999999999,
                36.21200000000001,
                58.63599999999997,
                34.08199999999997,
                50.344,
                41.49200000000001,
                41.910000000000025,
                51.66999999999999,
                46.039999999999985,
                46.637999999999984,
                44.76199999999997,
                34.166
          ]
        },

    ];
    const [jsonData] = useState(apexBarChartData)
    const[jsonDatay] = useState(apexBarChartOpts)
    //
    // useEffect(() => {
    //     const requestOptions = {
    //         method: 'GET',
    //         body: JSON.stringify()
    //     }
    //     fetch('http://localhost:5000/year_used', requestOptions)
    //         .then(response => response.json())
    //         .then(response => {
    //             jsonData[0].data = response.data
    //             console.log(jsonData)
    //         })
    // },);

//     async function fetch_JSON() {
//       let response = await fetch('http://192.168.1.6:8000/pdata');
//       let json = await response.json();
      
//       for(let i = 0;i < 30; i++){
//         jsonData[0].data.push(json.days[i])
//       }
//     }
  
//   fetch_JSON()
    // fetch_JSON().then(response => {
    //     jsonData[0].data = response.data
    // });

    return (
        <Card>
            <CardBody>
                <h4 className="header-title mb-3">일별간 전력사용량</h4>

                <UncontrolledAlert color="info">
                    지난 한달의 일별 전력 사용량입니다.
                </UncontrolledAlert>

                <Chart
                    options={jsonDatay}
                    series={jsonData}
                    type="bar"
                    className="apex-charts"
                    height={260}
                />
            </CardBody>
        </Card>
    );
};

export default PerformanceChart;
