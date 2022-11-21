// TOU, 누진제 중 요금제 추천
import React, {useEffect, useState} from 'react';
import {Card, CardBody, Button, Table, Progress, UncontrolledAlert} from 'reactstrap';

const Channels = () => {
 const apexBarChartData = [{
        name : '누진제',
        fee:"367,076 ₩"
    },
    {
        name : 'TOU',
        fee:"199,432 ₩"
    }]
    const [jsonData] = useState(apexBarChartData)

    // function getTitle(){
    //   const response = fetch("https://jsonplaceholder.typicode.com/posts");
    //   return response.then(res => res.json());
    // }
    // async function myfetch(){
    //  let response = await fetch('http://192.168.1.6:8000/predict/fee');
    
    //  let myJson = await response.json()
    //     jsonData[0].fee = myJson.fee
    //     jsonData[1].fee = myJson.T_fee

    // }
    // function test() {
    //     let example = fetch('http://192.168.1.6:8000/predict/fee').then((res) => {
    //         let myjson = example.json()
    //         jsonData[0].fee = myjson.fee
    //         jsonData[1].fee = myjson.T_fee
    //     });
    //   }

    // myfetch()
    // test()

    let select_name = () =>
    {
        if (jsonData[0].fee > jsonData[1].fee)
            return jsonData[1].fee
        else
            return jsonData[0].fee

    }
    // const compare = () =>
    // {
    //     if (jsonData[0].data > jsonData[1].data)
    //         return jsonData[1].name + "가 "+jsonData[1].data - jsonData[0].data + "만큼 더 저렴합니다."
    //     else
    //         return jsonData[0].name + "가 "+jsonData[1].data - jsonData[0].data + "만큼 더 저렴합니다."
    // }
    return (
        <Card>
            <CardBody>
                <h4 className="header-title mb-2">요금제 추천</h4>
                <UncontrolledAlert color="info">
                    고객님의 전력사용패턴을 분석하여 경제적인 요금제를 추천해 드립니다.
                </UncontrolledAlert>

                <Table responsive className="table-sm table-centered mb-0 font-14">
                    <thead className="thead-light">
                        <tr>
                           <th>요금제</th>
                            <th>요금비교</th>
                            <th style={{ width: '40%' }}>&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>TOU요금제</td>
                            <td>{jsonData[0].fee}</td>
                            <td>
                                <Progress value={100} style={{ height: '3px'}}/>
                            </td>
                        </tr>
                        <tr>
                            <td>누진제</td>
                            <td>{jsonData[1].fee}</td>
                            <td>
                                <Progress value={0} style={{ height: '3px'}} color="info"/>
                            </td>
                        </tr>
                        <tr>
                           <th>추천요금제</th>
                            <th>
                                {select_name()}
                            </th>
                        </tr>
                    </tbody>
                </Table>
            </CardBody>
        </Card>
    );
};

export default Channels;
