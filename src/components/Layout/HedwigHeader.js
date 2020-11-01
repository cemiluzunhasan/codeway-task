import React from 'react';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const menu = (
  <Menu>
    <Menu.Item className="pl-20 pr-20">
      Logout
    </Menu.Item>
  </Menu>
);

export default () => {
  return (
    <div className="d-flex full-width full-height j-between a-center">
      <img src="/assets/hedwig-logo.png" className="w-150" />
      <Dropdown overlay={menu} trigger="click">
        <a className="ant-dropdown-link d-flex a-center full-height" onClick={e => e.preventDefault()}>
          <i className="fas fa-user text-pink text-xxl" />
          <i className="fas fa-sort-down text-pink ml-10 text-xxl" style={{ position: 'relative', top: -2 }} />
        </a>
      </Dropdown>
    </div>
  );
};