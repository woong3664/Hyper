// @flow
import React, {useEffect, useState, PropTypes} from 'react';
import Chart from 'react-apexcharts';
import {
    Row,
    Col,
    Card,
    CardBody,
    UncontrolledButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem, UncontrolledAlert,
} from 'reactstrap';
const RevenueChart = () => {

    const apexLineChartWithLables = {
        chart: {
            height: 400,
            type: 'bar',
            // dropShadow: {
            //     enabled: true,
            //     opacity: 0.1,
            //     blur: 7,
            //     left: -7,
            //     top: 7,
            // },
            parentHeightOffset: 0,
            stacked: true,
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
        grid: {
            padding: {
                left: 0,
                right: 0,
            }
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            show: true,
            width: 2,
        },
        zoom: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        colors: ['#8ca4d2', '#0acf97', '#fa5c7c', '#ffbc00'],
        xaxis: {
            type: 'string',
            categories: ['1월', '2월', '3월','4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
            tooltip: {
                enabled: false,
            },
            axisBorder: {
                show: false,
            },
        },
        yaxis: {
            labels: {
                formatter: function (val) {
                    return val + '원';
                },
            },
        },
        
    };

    let apexLineChartWithLablesData = [{
        name: '누락된 요금',
        data: [31710,21180,11560,9180,16600,24970,35580,47400,29550,22080,31020,41120]
    }]

    const [jsonData] = useState(apexLineChartWithLablesData)
    const [jsonDatay] = useState(apexLineChartWithLables)
    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            body: JSON.stringify()
        }
        fetch('http://localhost:5000/show_data', requestOptions)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                jsonData[0].data = response.data
                jsonData[0].name = response.name
                jsonDatay.xaxis.categories = response.time
                console.log(jsonData)
                console.log(jsonDatay)
            })
    },);

    return (
        <Card>
            <CardBody>
                <UncontrolledButtonDropdown className="float-right">
                    <DropdownToggle tag="button" className="btn btn-link arrow-none card-drop p-0">
                        <i className="mdi mdi-dots-vertical"></i>
                    </DropdownToggle>

                    <DropdownMenu right>
                        <DropdownItem>Sales Report</DropdownItem>
                        <DropdownItem>Export Report</DropdownItem>
                        <DropdownItem>Profit</DropdownItem>
                        <DropdownItem>Action</DropdownItem>
                    </DropdownMenu>
                </UncontrolledButtonDropdown>

                <h4 className="header-title mb-3">누락된 요금</h4>
                <UncontrolledAlert color="info">
                    월별 누락된 요금을 나타냅니다.(Sample Data)
                </UncontrolledAlert>
                <Chart
                    options={jsonDatay}
                    series={jsonData}
                    type="bar"
                    className="apex-charts mt-3"
                    height={364}
                />
            </CardBody>
        </Card>
    );
};

export default RevenueChart;
