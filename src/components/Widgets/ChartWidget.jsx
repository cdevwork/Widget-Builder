import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const data = [
  { name: "Jan", uv: 400 },
  { name: "Feb", uv: 300 },
  { name: "Mar", uv: 200 },
  { name: "Apr", uv: 278 },
  { name: "May", uv: 189 },
];

const ChartWidget = () => {
  return (
    <div className="w-full h-60 bg-white rounded shadow p-4">
      <h2 className="text-lg font-semibold mb-4">Sales Overview</h2>
      <ResponsiveContainer width="100%" height="80%">
        <LineChart data={data}>
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="uv" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartWidget;
