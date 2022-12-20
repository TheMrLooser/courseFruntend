import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ChartWrap } from "./Chart.styles";

const Chart = ({ data }) => {
  return (
    <ChartWrap>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart width="100%" height={250} data={data}>
          <defs>
            <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0014ff" stopOpacity={0.4} />
              <stop offset="75%" stopColor="#0014ff" stopOpacity={0.05} />
            </linearGradient>
          </defs>
          <Area dataKey="total" stroke="#0014ff" fill="url(#color)" />
          <XAxis dataKey="name" axisLine={false} tickLine={false} />
          <YAxis dataKey="total" axisLine={false} tickLine={false} />
          <Tooltip />
          <CartesianGrid opacity={0.1} vertical={false} horizontal={false} />
        </AreaChart>
      </ResponsiveContainer>
    </ChartWrap>
  );
};

export default Chart;
