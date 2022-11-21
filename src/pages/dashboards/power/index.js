// @flow
import React from 'react';
import { Row, Col } from 'reactstrap';
import PageTitle from '../../../components/PageTitle';
import TOU_Difference from './TOU_Difference';
import Statistics2 from './Statistics2';
import RevenuChart2 from './RevenuChart2.js';
import PerformanceChart2 from './PerformanceChart2.js';
import Predict_Used from './Predict_Used';

const CRMDashboardPage = () => {
    return (
        <React.Fragment>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Dashboard', path: '/dashboard/power' },
                    { label: '전력사용량', path: '/dashboard/power', active: true },
                ]}
                title={'전력사용량'}
            />
            <Row>
                <Col xl={12}>
                    <TOU_Difference />
                </Col>
            </Row>
            {/* <Row>
                 <Col xl={12}>
                    <RevenuChart2 />
                </Col>
            </Row> */}
            {/* <Row>
                 <Col xl={12}>
                    <Statistics2 />
                </Col>
            </Row> */}
            {/* <Row>
                 <Col xl={12}>
                    <PerformanceChart2 />
                </Col>
            </Row> */}
            <Row>
                <Col xl={12}>
                    <Predict_Used />
                </Col>
            </Row>
            

        </React.Fragment>
    );
};

export default CRMDashboardPage;
