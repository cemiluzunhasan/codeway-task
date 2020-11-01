import React, { useEffect, useRef, useState } from 'react';
import { chartOptions } from '../../helpers/constants';
import useGet from '../../hooks/useGet';
import { get } from 'lodash';
import { Line } from 'react-chartjs-2';
import { Spin } from 'antd';

export default ({ label, url, stateKey }) => {

  const { data, loading, refresh } = useGet({ url, key: stateKey });
  const chartRef = useRef(null);

  const [chartData, setChartData] = useState((canvas) => ({}));


  useEffect(() => {
    const chartData = () => {
      const canvas = document.createElement('canvas').getContext("2d");
      const gradient = canvas.createLinearGradient(0, 10, 0, 700);
      gradient.addColorStop(0, 'rgba(52, 54, 107, 1)');
      gradient.addColorStop(1, 'transparent');

      return {
        labels: Object.keys(get(data, 'payload.data', [])).map(x => {
          let year = x.substring(0, 4);
          let month = x.substring(4, 6);
          let day = x.substring(6, 8);
          return `${day}/${month}/${year}`;
        }),
        datasets: [
          {
            label,
            backgroundColor: gradient,
            borderColor: "#BB54F5",
            borderWidth: 2,
            data: Object.values(get(data, 'payload.data', []))
          }
        ]
      }
    }
    setChartData(chartData);
  }, data);

  return (
    <div className="Chart full-width bg-card p-20 h-400">
      <div className="ChartHeader d-flex">
        <i class="fas fa-chart-bar mr-10 text-pink"></i>
        <p className="text-xl text-white fw-200 ls-1">{label}</p>
      </div>
      <Spin spinning={loading}>
        <Line
          legend={false}
          height={45}
          ref={chartRef}
          data={chartData}
          options={chartOptions}
        />
      </Spin>
    </div>
  )
}