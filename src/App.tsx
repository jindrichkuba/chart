import { useQuery } from "react-query";
import "./App.css";
import AxiosCustomFetch from "./helpers/AxiosCustomFetch";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { DataTypes, SortOrderEnum, SortTypeEnum } from "./types";

function App() {
  const pg = 1;
  const tvl_min = 50000;
  const farms_tvl_staked_gte = 10000000;

  const { data } = useQuery<DataTypes, Error>(["chart"], async () => {
    const { data } = await AxiosCustomFetch.get<DataTypes>(
      `https://api.multifarm.fi/jay_flamingo_random_6ix_vegas/get_assets?pg=${pg}&tvl_min=${tvl_min}&sort=${SortTypeEnum.tvlStaked}&sort_order=${SortOrderEnum.desc}&farms_tvl_staked_gte=${farms_tvl_staked_gte}`
    );

    return data;
  });

  return (
    <div className="App">
      {data?.data && (
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={300}
            data={data?.data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="dateAdded" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="aprDaily" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
          </AreaChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}

export default App;
