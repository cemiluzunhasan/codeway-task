import React, { useEffect } from 'react';
import { Col, Divider, Spin } from 'antd';
import useGet from '../../hooks/useGet';
import { get } from 'lodash';

export default ({ span, icon, title, url, stateKey, amountKey, info = '', refreshText }) => {
  
  const { data, loading, refresh } = useGet({ url, key: stateKey });

  return (
    <div className="bg-card pt-15 pb-15 pl-20 pr-20">
      <div className="Stats d-flex j-between">
        {icon}
        <div className="d-flex fd-column a-end">
          <p className="text-grey mb-10">{title}</p>
          <Spin spinning={loading}>
            <p className="text-white text-xxl mb-0">{get(data, `payload[${stateKey}]`)} {info}</p>
          </Spin>
        </div>
      </div>
      <Divider />
      <div className="c-pointer" onClick={() => refresh()}>
        <i className="fas fa-redo text-grey mr-10" />
        <span className="text-grey text-md mb-0">{refreshText}</span>
      </div>
    </div>
  );
}