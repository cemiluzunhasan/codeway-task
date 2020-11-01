import React from 'react';
import { Layout, Row, Col } from 'antd';
import Graph from '../../components/Chart';
import HedwigHeader from '../../components/Layout/HedwigHeader';
import StatCard from '../../components/StatCard';

export default () => {
  const { Header, Content } = Layout;
  return (
    <div className="Dashboard">
      <Header className="d-flex a-center">
        <HedwigHeader />
      </Header>
      <Content className="full-content height-vh">
        <Row gutter={30}>
          <Col lg={6} md={12} xs={24} className="StatCard">
            <StatCard url="rt/activeUsers" stateKey="activeUsers" icon={<i className="StatIcon fas fa-user bg-deepblush text-white" />} title="Active Users" amount={1234} refreshText="Live user count" />
          </Col>
          <Col lg={6} md={12} xs={24} className="StatCard">
            <StatCard url="rt/downloads" stateKey="downloads" icon={<i className="StatIcon fas fa-download bg-deepblush bg-pink text-white" />} title="Downloads" amount={1234} refreshText="Total install count" />
          </Col>
          <Col lg={6} md={12} xs={24} className="StatCard">
            <StatCard url="rt/sessionDuration" stateKey="avgSessionDuration" icon={<i className="StatIcon fas fa-eye bg-lightblue text-white" />} title="Avg. Session Duration" amount={1234} refreshText="Total view count" />
          </Col>
          <Col lg={6} md={12} xs={24} className="StatCard">
            <StatCard url="rt/paidUsers" stateKey="paidUsers" icon={<i className="StatIcon fas fa-download bg-red text-white" />} title="Paying Users" amount={1234} refreshText="Total paying user count" />
          </Col>
        </Row>
        <Row className="mb-30" gutter={30}>
          <Col span={24}>
            <Graph id="activeChart" label="Daily Active Users" url="daily/activeUsers" stateKey="chartActiveUsers" />
          </Col>
        </Row>
        <Row className="mb-30" gutter={30}>
          <Col span={24}>
            <Graph id="installChart" label="Daily Installs" url="daily/downloads" stateKey="chartDownloads" />
          </Col>
        </Row>
      </Content>
    </div>
  );
}