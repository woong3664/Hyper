// @flow
import React from 'react';
import { Row, Col } from 'reactstrap';
import TOU_NTOU_Recommand from './TOU_NTOU_Recommand';
import PerformanceChart from "../home";
import Month_Used from './Month_Used.js';


const AnalyticsDashboardPage = () => {
    return (
        <React.Fragment>
            <Row>
                <Col>
                    <div className="page-title-box">
                        <div className="page-title-right">
                        </div>
                        <h4 className="page-title">전력 소모량 예측</h4>
                    </div>
                </Col>
            </Row>

            {/* <Row>
                <Col xl={12}>
                    <SessionsChart />
                </Col>
            </Row> */}
            <Row>
                 <Col xl={12}>
                    <Month_Used />
                </Col>
            </Row>

            {/* <Row>
                <Col xl={12}>
                    <PerformanceChart />
                </Col>
            </Row> */}
            
            <Row>
                <Col xl={12}>
                    <TOU_NTOU_Recommand />
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default AnalyticsDashboardPage;
