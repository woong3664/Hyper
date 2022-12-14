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
                    return val + 'kWh';
                },
                offsetX: -15,
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
            data: [],
        },
    ];

    const[jsonData] = useState(apexBarChartData)
    const[jsonDatay] = useState(apexBarChartOpts)

    async function fetch_JSON() {
      let response = await fetch('http://168.115.8.49:8000/pdata');
      
      let json = await response.json();

      for(let i = 0; i < 30; i++){
        //   jsonData[0].data[i] = json.days[i];
          jsonData[0].data.push(json.days[i])
      }
      
    //   for(let i = 0; i < 30; i++){
    //       console.log(jsonData[0].data[i])

    //   }
    }

    fetch_JSON().then(response => {
        // jsonData[0].data = response.data
        // jsonDatay.xaxis.categories = response.day + "day"
    });
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
