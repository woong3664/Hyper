// @flow
import React, {useEffect, useState} from 'react';
import Chart from 'react-apexcharts';
import {
    Card,
    CardBody,
    UncontrolledButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledAlert,
} from 'reactstrap';

const SessionsChart = () => {
    const colors = ['#ffa200'];

    const apexBarChartOpts = {
        grid: {
            padding: {
                left: 0,
                right: 0,
            },
        },
        chart: {
            height: 309,
            type: 'bar',
            parentHeightOffset: 0,
            stacked: true,
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: 'smooth',
            width: 7,
        },
        zoom: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        colors: colors,
        xaxis: {
            type: 'string',
            categories: ['1일', '2일', '3일', '4일', '5일', '6일', '7일', '8일', '9일', '10일', '11일', '12일', '13일', '14일', '15일', '16일', '17일', '18일', '19일', '20일', '21일', '22일', '23일', '24일', '25일', '26일', '27일', '28일', '29일', '30일'],
            tooltip: {
                enabled: false,
            },
            axisBorder: {
                show: false,
            },
            labels: {},
        },
        yaxis: {
            labels: {
                formatter: function(val) {
                    return val + 'kW';
                },
                offsetX: -15,
            },
        },
        tooltip: {
            shared: true,
            intersect: false,
            y: {
                formatter: function(val) {
                    return '' + val.toFixed(2) + 'kW';
                },
            },
            
            },
        
        fill: {
            type: 'gradient',
            gradient: {
                type: 'vertical',
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.45,
                opacityTo: 0.1,
                stops: [45, 100],
            },
        },
    };
    
    const apexBarChartData = [
        {
            name: '예측 전력량',
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
          ],
        },
    ];

    const[jsonData] = useState(apexBarChartData)
    const[jsonDatay] = useState(apexBarChartOpts)

    // async function fetch_JSON() {
    //   let response = await fetch('http://192.168.1.6:8000/pdata');
      
    //   let json = await response.json();

    //   for(let i = 0; i < 30; i++){
    //       jsonData[0].data.push(json.days[i])
    //   }
      
    // }

    // fetch_JSON()
    // fetch_JSON().then(response => {
    //     // jsonData[0].data = response.data
    //     // jsonDatay.xaxis.categories = response.day + "day"
    // });
    // console.log("hi");
    // var a = 0;
    // for (let i = 0; i < jsonData.length; i++) {
    //     if(jsonData[0].data[i] > a){
    //         a = jsonData[0].data[i];
    //     }
        
    // }
    // console.log(a);

    // console.log(jsonData[0].data[2]);
    // console.log('bye');
    return (
        <Card>
            <CardBody>

                <h4 className="header-title mb-3">예측 전력량</h4>

                <UncontrolledAlert color="info">
                    전력사용량은 예측모델을 통해 계산된 값입니다.
                </UncontrolledAlert>
                <Chart
                    options={jsonDatay}
                    series={jsonData}
                    type="area"
                    className="apex-charts mt-3"
                    height={308}
                />
            </CardBody>
        </Card>
    );
};

export default SessionsChart;
