import React from 'react';
import { Row, Col, Layout, Card } from 'antd';
import HedwigHeader from '../../components/Layout/HedwigHeader';
import { useSelector } from 'react-redux';
import { get } from 'lodash';

export default () => {
  const { data } = useSelector(state => state.global.profile);
  const { Header, Content } = Layout;

  return (
    <div className="Dashboard">
      <Header className="d-flex a-center">
        <HedwigHeader />
      </Header>
      <Content className="full-content height-vh">
        <Row gutter={30} justify="center">
          <Col lg={6} md={12} xs={24}>
            <Card
            className="bg-card"
              hoverable
            >
              <Card.Meta className="text-white" title="Email" description={get(data, 'email', '-')} />
            </Card>
          </Col>
        </Row>
      </Content>
    </div>
  );
};