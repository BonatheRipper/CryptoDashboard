import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
export const SmoothLineGraph = ({ data }) => {
  return (
    <div className="h-96 py-12 w-full shadow rounded-lg border border-gray-50  bg-white mt-8">
      <h6
        style={{ fontWeight: "300" }}
        className=" text-gray-800 text-sm md:text-lg  mb-4 w-full mx-5"
      >
        Smooth Line Chart
      </h6>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={10} />
          <XAxis
            tick={{ fontSize: 10 }}
            dataKey="name"
            padding={{ left: 20, right: 20 }}
          />
          <YAxis
            tick={{ fontSize: 10 }}
            padding={{ left: 30, right: 30, top: 30 }}
          />
          {/* <Tooltip /> */}
          <Area
            type="monotone"
            dataKey="uv"
            strokeWidth={2}
            strokeLinecap
            stroke="#4c7ffe"
            fill="#fff"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
