// TOU의 누락 전후 비교
import React, {useEffect, useState} from 'react';
import Chart from 'react-apexcharts';
import {Card, CardBody, Button, Table, Progress, UncontrolledAlert} from 'reactstrap';


const RevenueChart = () => {
    const apexLineChartWithLables = {
        chart: {
            height: 400,
            type: 'line',
            toolbar: {
                show: false,
            },
        },
        stroke: {
            curve: 'smooth',
            width: 5,
        },
        fill: {
            type: 'solid',
            opacity: [0, 1],
        },
        labels: [],
        markers: {
            size: 0.5,
        },
        colors: ['#0a554c', '#ffd563'],
        xaxis: {
            type: 'string',
            categories: ['1일', '2일', '3일', '4일', '5일', '6일', '7일', '8일', '9일', '10일', '11일', '12일', '13일', '14일', '15일', '16일', '17일', '18일', '19일', '20일', '21일', '22일', '23일', '24일', '25일', '26일', '27일', '28일', '29일', '30일'],
            tooltip: {
                enabled: false,
            },
            axisBorder: {
                show: false,
            },
        },
        yaxis: [
            {
                title: {
                    text: '',
                },
               min: 0,
            },
        ],
        tooltip: {
            shared: true,
            intersect: false,
            y: {
                formatter: function(y) {
                    if (typeof y !== 'undefined') {
                        return y.toFixed(0) + '원';
                    }
                    return y;
                },
            },
        },
        grid: {
            borderColor: '#f1f3fa',
        },
        legend: {
            fontSize: '14px',
            fontFamily: '14px',
            offsetY: 10,
        },
        responsive: [
            {
                breakpoint: 600,
                options: {
                    yaxis: {
                        show: false,
                    },
                    legend: {
                        show: false,
                    },
                },
            },
        ],
    };

    // let apexLineChartWithLablesData = [
    //     {
    //         name: 'TOU 요금제',
    //         type: 'area',
    //         data: ""
    //     },
    //     {
    //         name: '누락된 TOU요금제',
    //         type: 'line',
    //         data: ""
    //     },
    // ];
    const apexBarChartData = [{
        name : '보간된 TOU 요금제',
        fee:"199432.91492199787"
    },
    {
        name : '누락된 TOU 요금제',
        fee:"118041.1087999999"
    }]

    const [jsonData] = useState(apexBarChartData)
    const [jsonDatay] = useState(apexLineChartWithLables)
    // useEffect(() => {
    //     const requestOptions = {
    //         method: 'GET',
    //         body: JSON.stringify()
    //     }
    //     fetch('http://168.115.8.49:8000/pdata', requestOptions)
    //         .then(response => response.json())
    //         .then(response => {
    //             console.log(response)
    //             jsonData[0].data = response.yesterday_data
    //             jsonData[0].name = '어제 ' + response.name

    //             jsonData[1].data = response.today_data
    //             jsonData[1].name = '오늘 ' + response.name
    //             jsonDatay.labels = response.time

    //             console.log(jsonData)
    //             console.log(jsonDatay)
    //         })
    // },);
    // async function myfetch(){
    //     let response = await fetch('http://192.168.1.6:8000/predict/nfee');
    //     let myjson = await response.json()
    //     jsonData[0].fee = myjson.T_fee
    //     jsonData[1].fee = myjson.I_fee
    // }
    // function test() {
    //     let example = fetch('http://192.168.1.6:8000/predict/nfee').then((res) => {
    //         let myjson = example.json()
    //         jsonData[0].fee = myjson.T_fee
    //         jsonData[1].fee = myjson.I_fee
    //     });
    // }

    // myfetch()
    // test()
    
    return (
        <Card>
            <CardBody>
                <h4 className="header-title mb-3">
                    TOU 요금제의 누락 전후 비교서비스
                </h4>
                <UncontrolledAlert color="info">
                    실제 요금과 데이터가 누락된 사용량 차이를 비교해줍니다.
                </UncontrolledAlert>
                {/* <Chart
                    options={jsonDatay}
                    series={jsonData}
                    type="line"
                    className="apex-charts"
                    height={336}
                /> */}
                <Table responsive className="table-sm table-centered mb-0 font-14">
                    <thead className="thead-light">
                        <tr>
                           <th>요금제</th>
                            <th>요금비교</th>
                            <th style={{ width: '00%' }}>&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>보간된 TOU요금제</td>
                            <td>{jsonData[0].fee}</td>
                            <td>
                                {/* <Progress value={100} style={{ height: '3px'}}/> */}
                            </td>
                        </tr>
                        <tr>
                            <td>누락된 TOU요금제</td>
                            <td>{jsonData[1].fee}</td>
                            <td>
                                {/* <Progress value={0} style={{ height: '3px'}} color="info"/> */}
                            </td>
                        </tr>
                        
                    </tbody>
                </Table>
            </CardBody>
        </Card>
    );
};

export default RevenueChart;
