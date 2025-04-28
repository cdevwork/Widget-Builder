import { useState, useEffect } from "react";
import GridLayout from "react-grid-layout";
import ChartWidget from "./Widgets/ChartWidget";
import TableWidget from "./Widgets/TableWidget";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const DashboardContent = () => {
  const [layout, setLayout] = useState(
    JSON.parse(localStorage.getItem("dashboard-layout")) || []
  );
  const [widgets, setWidgets] = useState(
    JSON.parse(localStorage.getItem("dashboard-widgets")) || []
  );

  useEffect(() => {
    localStorage.setItem("dashboard-layout", JSON.stringify(layout));
    localStorage.setItem("dashboard-widgets", JSON.stringify(widgets));
  }, [layout, widgets]);

  const addWidget = (type) => {
    const newWidget = {
      i: Date.now().toString(),
      type,
      x: (widgets.length * 2) % 12,
      y: Infinity,
      w: 4,
      h: 4,
    };
    setWidgets([...widgets, newWidget]);
    setLayout([...layout, newWidget]);
  };

  const removeWidget = (id) => {
    setWidgets(widgets.filter((w) => w.i !== id));
    setLayout(layout.filter((l) => l.i !== id));
  };

  const generateWidget = (widget) => {
    switch (widget.type) {
      case "chart":
        return <ChartWidget />;
      case "table":
        return <TableWidget />;
      case "text":
        return <setWidgets />;
      default:
        return <div>Unknown Widget</div>;
    }
  };
  return (
    <div className="p-4">
      <div className="flex gap-4 mb-4">
        <button
          onClick={() => addWidget("chart")}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Chart
        </button>
        {/* <button onClick={() => addWidget("table")} className="bg-green-500 text-white px-4 py-2 rounded">Add Table</button> */}
        {/* <button onClick={() => addWidget("text")} className="bg-purple-500 text-white px-4 py-2 rounded">Add Text</button> */}
      </div>

      <GridLayout
        className="layout"
        layout={layout}
        cols={12}
        rowHeight={30}
        width={1200}
        onLayoutChange={(newLayout) => setLayout(newLayout)}
        draggableHandle=".drag-handle"
      >
        {widgets.map((widget) => (
          <div
            key={widget.i}
            className="bg-white dark:bg-gray-800 p-4 rounded shadow"
          >
            <div className="flex justify-between items-center mb-2">
              <div className="drag-handle cursor-move font-semibold">:::</div>
              <button
                onClick={() => removeWidget(widget.i)}
                className="text-red-500"
              >
                X
              </button>
            </div>
            {generateWidget(widget)}
          </div>
        ))}
      </GridLayout>
    </div>
  );
};

export default DashboardContent;
