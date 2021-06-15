import React from 'react';
import {
  VictoryChart,
  VictoryLine,
  VictoryTheme,
  VictoryContainer,
  VictoryLegend,
} from 'victory';

const Chart: React.FC = () => {
  return (
    <VictoryChart
      maxDomain={{ x: 1.5, y: 1.5 }}
      minDomain={{ x: -0.5, y: -0.5 }}
      theme={VictoryTheme.material}
      containerComponent={<VictoryContainer responsive={false} />}
      width={800}
      height={800}
    >
      <VictoryLegend
        x={250}
        y={50}
        orientation="horizontal"
        gutter={20}
        itemsPerRow={2}
        data={[
          {
            name: 'Graph of a function',
            symbol: { fill: 'd00f50' },
            labels: { fill: 'd00f50' },
          },
          {
            name: 'Approximate solution (d1 = h^2)',
            symbol: { fill: '0f3fd0' },
            labels: { fill: '0f3fd0' },
          },
          {
            name: 'Approximate solution (d1 = 0)',
            symbol: { fill: '0fd022' },
            labels: { fill: '0fd022' },
          },
        ]}
      />
      <VictoryLine
        data={func}
        animate={{ duration: 1500 }}
        style={{
          data: {
            stroke: '#d00f50',
          },
        }}
      />
      <VictoryLine
        data={f1}
        animate={{ duration: 1500 }}
        style={{
          data: {
            stroke: '#0f3fd0',
          },
        }}
      />
      <VictoryLine
        data={f2}
        animate={{ duration: 1500 }}
        style={{
          data: {
            stroke: '#0fd022',
          },
        }}
      />
    </VictoryChart>
  );
};

export default Chart;
