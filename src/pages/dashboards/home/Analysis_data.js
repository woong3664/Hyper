// 관리자용 분석 서비스
import React, {useEffect, useState} from 'react';
import Chart from 'react-apexcharts';
import {
    Card,
    CardBody,
    UncontrolledButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledAlert
} from 'reactstrap';

const RevenueChart2 = () => {
    const apexLineChartWithLables = {
        plotOptions: {
            bar: {
              dataLabels: {
                position: 'center', // top, center, bottom,
              },
            }
        },
        chart: {
            height: 400,
            type: 'line',
            toolbar: {
                show: false,
            },
        },
        // 선 그래프 줄 그어줌, 원래는 그래프 외곽선
        stroke: {
            show: true,
            width: 2,
        },
        fill: {
            //불투명도
            opacity: 1,
        },

        dataLabels: {
            enabled: true,
            style: {
              fontSize: '12px',
            },
            formatter: function (val) {
                if(val < 100){
                    return val + "%";
                }
                else{return val}
            },
        },
        markers: {
            size: 0.5,
        },
        colors: ['rgba(80, 95, 144, 0.85', 'rgba(113,142,164,0.80)', '#FEB019'],
        xaxis: {
            type: 'string',
            categories: ['산업용(갑)저압', '일반용(갑)저압', '농사용(을)저압', '주택용전력', '교육용(갑)저압', '농사용(갑)', '심야전력(갑)', '주택용전력', '일반용(갑)저압', '심야전력(갑)', '농사용(을)저압', '산업용(갑)저압', '농사용(갑)', '교육용(갑)저압'],
            tooltip: {
                enabled: false,
            },
            axisBorder: {
                show: false,
            },
        },
        yaxis: [
            {
                labels: {
                    formatter: function(val) {
                      return val.toFixed(0);
                    }
                },
                title: {
                    text: '전력 데이터 [개]',
                },
               min: 0,
               //보기 좋게 반올림 해줌
               forceNiceScale:true
            },
            {
                max: 3500,
                show : false},
            {
                labels: {
                    formatter: function(val) {
                      return val.toFixed(0);
                    }
                },
                opposite: true,
                axisTicks: {
                    show: false,
                },
                axisBorder: {
                    show: true,
                },
                title: {
                    text: "결측률[%]",
                    style: {
                    }
                }
            }
        ],
        tooltip: {
            shared: true,
            intersect: false,
            y: {
                formatter: function(y) {
                    if (typeof y !== 'undefined' && y > 100) {
                        // return y.toFixed(0) + '원';
                        return y.toFixed(0);
                    }
                    else if ( y < 100){
                        return y+'%';
                    }
                    return y;
                },
            },
        },
        grid: {
            // borderColor: '#f1f3fa',
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

    let apexLineChartWithLablesData = [
        
        {
            name: '정상 데이터',
            type: 'column',
            data: [2970.0,
                2970.0,
                2967.0,
                2969.0,
                2909.0,
                2969.0,
                2968.0,
                2969.0,
                2970.0,
                2968.0,
                2967.0,
                2970.0,
                2969.0,
                2909.0],
            // borderColor: 'rgba(225,116,103)',
        },
        {
            name: '누락된 데이터',
            type: 'column',
            data: [2699,
                2659,
                2428,
                2511,
                2709,
                2440,
                2618,
                2511,
                2659,
                2618,
                2428,
                2699,
                2440,
                2709
        ],
        },
        {
            name: '결측률',
            type: 'line',
            data: [12.7,
                14.89,
                21.8,
                27.7,
                14.1,
                49.4,
                21.6,
                27.7,
                14.8,
                21.6,
                21.8,
                12.7,
                49.4,
                14.0],
            color: 'rgba(255,0,0,0.9)'
        },
        
        
    ];

    const [jsonData] = useState(apexLineChartWithLablesData)
    const [jsonDatay] = useState(apexLineChartWithLables)

    async function myfetch(){
        let response = await fetch('http://192.168.1.6:8000/type');
        let myjson = await response.json()
        for(let i = 0; i < 14; i++){
            jsonData[0].data.push(myjson.total[i])
            jsonData[1].data.push(myjson.mean[i])
            jsonData[2].data.push(myjson.loss[i])
        }
    }

    myfetch()
    
    // useEffect(() => {
    //     const requestOptions = {
    //         method: 'GET',
    //         body: JSON.stringify()
    //     }
    //     fetch('http://localhost:5000/compare_yesterday', requestOptions)
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
    return (
        <Card>
            <CardBody>
                <h4 className="header-title mb-3">
                    계약종별 데이터 양 비교분석 서비스
                </h4>
                <UncontrolledAlert color="info">
                    요금의 차이와 데이터의 손실률을 보여줍니다.
                </UncontrolledAlert>
                <Chart
                    options={jsonDatay}
                    series={jsonData}
                    type="line"
                    className="apex-charts"
                    height={336}
                />
            </CardBody>
        </Card>
    );
};

export default RevenueChart2;
