import {
  ResponsiveContainer,
  ComposedChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line
} from "recharts";

const data = [
  {
    name: "공복",
    수치: 300
  },
  {
    name: "아침식전",
    수치: 100
  },
  {
    name: "아침식후",
    수치: 110
  },
  {
    name: "점심식전",
    수치: 90
  },
  {
    name: "점심식후",
    수치: 120
  },
  {
    name: "저녁식전",
    수치: 120
  },
  {
    name: "저녁식후",
    수치: 140
  },
  {
    name: "취침전",
    수치: 142
  }
];

const ReportChart = () => {
  return (
    <ResponsiveContainer height={400}>
      <ComposedChart className="chart" data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis
          domain={[0, (dataMax: number) => dataMax + 200]}
          label={{ value: "mg/dl", angle: -90, position: "insideLeft" }}
        />
        <Tooltip />
        <Legend verticalAlign="top" height={30} />
        <Line
          type="linear"
          dataKey="수치"
          stroke="#4990d2"
          dot={{ fill: "#4990d2", strokeWidth: 5 }}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default ReportChart;
