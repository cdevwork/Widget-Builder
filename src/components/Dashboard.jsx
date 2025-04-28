import React from 'react';
import GridLayout from 'react-grid-layout';
import ChartWidget from './ChartWidget';
import TableWidget from './TableWidget';
import CardWidget from './CardWidget';
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const DashboardPage = () => {
  const layout = [
    { i: 'chart', x: 0, y: 0, w: 6, h: 4 },
    { i: 'table', x: 6, y: 0, w: 6, h: 4 },
    { i: 'card', x: 0, y: 4, w: 12, h: 2 },
  ];

  return (
    <div className="dashboard-container">
      <GridLayout
        className="layout"
        layout={layout}
        cols={12}
        rowHeight={30}
        width={1200}
        draggableHandle=".widget-header"
      >
        <div key="chart">
          <div className="widget">
            <div className="widget-header">Chart Widget</div>
            <ChartWidget />
          </div>
        </div>
        <div key="table">
          <div className="widget">
            <div className="widget-header">Table Widget</div>
            <TableWidget />
          </div>
        </div>
        <div key="card">
          <div className="widget">
            <div className="widget-header">Card Widget</div>
            <CardWidget />
          </div>
        </div>
      </GridLayout>
    </div>
  );
};

export default DashboardPage;
