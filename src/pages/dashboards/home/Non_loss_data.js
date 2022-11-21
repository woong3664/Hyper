// 데이터의 누락의 빈도
import React, {useEffect} from 'react';
import Chart from 'react-apexcharts';
import { Card, CardBody, UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledAlert} from 'reactstrap';
import {useState} from "react";
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
                columnWidth: '20%',
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent'],
        },
        zoom: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        colors: ['#4578a1', 'rgba(205,217,227,0.83)'],
        xaxis: {
            categories: ['산업용(갑)저압', '입반용(갑)저압', '농사용(을)저압', '농사용(갑)저압', '농사용(갑)', '심야전력(갑)', '주택용전력'],
            axisBorder: {
                show: false,
            },
        },
        yaxis: {
            labels: {
                formatter: function(val) {
                    return val;
                },
            },
        },
        fill: {
            opacity: 1,
        },
        tooltip: {
            y: {
                formatter: function(val) {
                    return '' + val + '개';
                },
            },
        },
        annotations: {
            yaxis: [
              {
                y: 2976,
                borderColor: '#00E396',
                label: {
                  borderColor: '#00E396',
                  style: {
                    color: '#fff',
                    background: '#00E396'
                  },
                  text: '정상 입력 빈도 수'
                }
              }
            ]
          }
        
    };

    const apexBarChartData = [
        {
            name: '입력된 데이터',
            data: [2450.6, 2552.7, 2272.0, 2822.0, 1804.5, 2614.7, 1964.2]
        }
    ];
    const [jsonData] = useState(apexBarChartData)
    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            body: JSON.stringify()
        }
        fetch('http://localhost:5000/tou', requestOptions)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                jsonData[0].data = response.price
                jsonData[0].name = '가격'
                // jsonDatay.xaxis.categories = response.time
                console.log(jsonData)
                // console.log(jsonDatay)
            })
    },);

    return (
        <Card>
            <CardBody>
                <h4 className="header-title mb-3">무손실 데이터의 양</h4>
                <UncontrolledAlert color="info">
                    각 항목의 데이터의 빈도를 나타냅니다.
                </UncontrolledAlert>
                <Chart
                    options={apexBarChartOpts}
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
