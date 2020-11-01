import React from 'react';
import { useHistory } from 'react-router-dom';
import { Menu, Dropdown } from 'antd';
import AuthProxy from '../../proxies/AuthProxy';

export default () => {
  const history = useHistory();
  const menu = (
    <Menu>
      <Menu.Item className="pl-20 pr-20" onClick={() => history.push('/dashboard/profile') }>
        <i className="fas fa-user mr-5" />
        Profile
      </Menu.Item>
      <Menu.Item className="pl-20 pr-20" onClick={() => new AuthProxy().logout()}>
        <i className="fas fa-sign-out-alt mr-5" />
        Logout
      </Menu.Item>
    </Menu>
  );

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