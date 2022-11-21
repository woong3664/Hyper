// @flow
import React from 'react';
import { Row, Col } from 'reactstrap';

import Non_loss_data from './Non_loss_data';
import Analysis_data from './Analysis_data';
const EcommerceDashboardPage = () => {
    return (
        <React.Fragment>
            <Row>
                <Col>
                    <div className="page-title-box">
                        <h4 className="page-title">관리자</h4>
                    </div>
                </Col>
            </Row>
            <Row>
                    <Col xl={12}>
                        <Analysis_data />
                    </Col>
            </Row>
            <Row>
                 <Col xl={12}>
                    <Non_loss_data />
                </Col>
            </Row>
            
            {/* <Row>
                    <Col xl={12}>
                        <RevenueChart />
                    </Col>
            </Row> */}
            
            {/* <Row>
                <Col xl={12}>
                    <Statistics />
                </Col>
            </Row> */}
            
            

        </React.Fragment>
    );
};

export default EcommerceDashboardPage;
