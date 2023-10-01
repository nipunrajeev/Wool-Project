import React, { Component } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export class Price extends Component {
  render() {
    const data = [
      { name: "	Sep-13	", value: "	738.16	" },
      { name: "	Oct-13	", value: "	738.79	" },
      { name: "	Nov-13	", value: "	745.97	" },
      { name: "	Dec-13	", value: "	742.23	" },
      { name: "	Jan-14	", value: "	712.84	" },
      { name: "	Feb-14	", value: "	695.85	" },
      { name: "	Mar-14	", value: "	656.96	" },
      { name: "	Apr-14	", value: "	656.69	" },
      { name: "	May-14	", value: "	650.9	" },
      { name: "	Jun-14	", value: "	640.82	" },
      { name: "	Jul-14	", value: "	647.58	" },
      { name: "	Aug-14	", value: "	651.43	" },
      { name: "	Sep-14	", value: "	643.23	" },
      { name: "	Oct-14	", value: "	640.48	" },
      { name: "	Nov-14	", value: "	642.66	" },
      { name: "	Dec-14	", value: "	635.84	" },
      { name: "	Jan-15	", value: "	600.87	" },
      { name: "	Feb-15	", value: "	587.35	" },
      { name: "	Mar-15	", value: "	580.44	" },
      { name: "	Apr-15	", value: "	623.6	" },
      { name: "	May-15	", value: "	711.22	" },
      { name: "	Jun-15	", value: "	733.2	" },
      { name: "	Jul-15	", value: "	650.57	" },
      { name: "	Aug-15	", value: "	665.48	" },
      { name: "	Sep-15	", value: "	640.13	" },
      { name: "	Oct-15	", value: "	622.16	" },
      { name: "	Nov-15	", value: "	662.12	" },
      { name: "	Dec-15	", value: "	683.18	" },
      { name: "	Jan-16	", value: "	681.92	" },
      { name: "	Feb-16	", value: "	694.32	" },
      { name: "	Mar-16	", value: "	694.61	" },
      { name: "	Apr-16	", value: "	723.14	" },
      { name: "	May-16	", value: "	733.55	" },
      { name: "	Jun-16	", value: "	736.2	" },
      { name: "	Jul-16	", value: "	765.02	" },
      { name: "	Aug-16	", value: "	764.75	" },
      { name: "	Sep-16	", value: "	765.8	" },
      { name: "	Oct-16	", value: "	792.35	" },
      { name: "	Nov-16	", value: "	803.09	" },
      { name: "	Dec-16	", value: "	819	" },
      { name: "	Jan-17	", value: "	889.23	" },
      { name: "	Feb-17	", value: "	916.25	" },
      { name: "	Mar-17	", value: "	958.96	" },
      { name: "	Apr-17	", value: "	903.79	" },
      { name: "	May-17	", value: "	923.42	" },
      { name: "	Jun-17	", value: "	904.57	" },
      { name: "	Jul-17	", value: "	906.26	" },
      { name: "	Aug-17	", value: "	940.68	" },
      { name: "	Sep-17	", value: "	921.61	" },
      { name: "	Oct-17	", value: "	952.63	" },
      { name: "	Nov-17	", value: "	984.7	" },
      { name: "	Dec-17	", value: "	1001.55	" },
      { name: "	Jan-18	", value: "	1078.16	" },
      { name: "	Feb-18	", value: "	1083.97	" },
      { name: "	Mar-18	", value: "	1045.49	" },
      { name: "	Apr-18	", value: "	1050.05	" },
      { name: "	May-18	", value: "	1113.72	" },
      { name: "	Jun-18	", value: "	1179.37	" },
      { name: "	Jul-18	", value: "	1160.42	" },
      { name: "	Aug-18	", value: "	1210	" },
      { name: "	Sep-18	", value: "	1263.17	" },
      { name: "	Oct-18	", value: "	1216.42	" },
      { name: "	Nov-18	", value: "	1124.02	" },
      { name: "	Dec-18	", value: "	1135.31	" },
      { name: "	Jan-19	", value: "	1164.33	" },
      { name: "	Feb-19	", value: "	1203.23	" },
      { name: "	Mar-19	", value: "	1153.67	" },
      { name: "	Apr-19	", value: "	1136.3	" },
      { name: "	May-19	", value: "	1088.45	" },
      { name: "	Jun-19	", value: "	1021.7	" },
      { name: "	Jul-19	", value: "	975.9	" },
      { name: "	Aug-19	", value: "	871.73	" },
      { name: "	Sep-19	", value: "	840.05	" },
      { name: "	Oct-19	", value: "	864.82	" },
      { name: "	Nov-19	", value: "	872.01	" },
      { name: "	Dec-19	", value: "	859.8	" },
      { name: "	Jan-20	", value: "	895.29	" },
      { name: "	Feb-20	", value: "	874.69	" },
      { name: "	Mar-20	", value: "	792.29	" },
      { name: "	Apr-20	", value: "	714.14	" },
      { name: "	May-20	", value: "	680.55	" },
      { name: "	Jun-20	", value: "	693.56	" },
      { name: "	Jul-20	", value: "	672.14	" },
      { name: "	Aug-20	", value: "	598.32	" },
      { name: "	Sep-20	", value: "	533.62	" },
      { name: "	Oct-20	", value: "	685.9	" },
      { name: "	Nov-20	", value: "	750.47	" },
      { name: "	Dec-20	", value: "	771.62	" },
      { name: "	Jan-21	", value: "	806.93	" },
      { name: "	Feb-21	", value: "	891.62	" },
      { name: "	Mar-21	", value: "	889.38	" },
      { name: "	Apr-21	", value: "	911.08	" },
      { name: "	May-21	", value: "	922.42	" },
      { name: "	Jun-21	", value: "	984.37	" },
      { name: "	Jul-21	", value: "	975.53	" },
      { name: "	Aug-21	", value: "	903.93	" },
      { name: "	Sep-21	", value: "	893.14	" },
      { name: "	Oct-21	", value: "	919.07	" },
      { name: "	Nov-21	", value: "	890.94	" },
      { name: "	Dec-21	", value: "	903.62	" },
      { name: "	Jan-22	", value: "	911.32	" },
      { name: "	Feb-22	", value: "	926.63	" },
      { name: "	Mar-22	", value: "	946.77	" },
      { name: "	Apr-22	", value: "	946.25	" },
      { name: "	May-22	", value: "	946.46	" },
      { name: "	Jun-22	", value: "	978.41	" },
      { name: "	Jul-22	", value: "	920.96	" },
      { name: "	Aug-22	", value: "	894.83	" },
      { name: "	Sep-22	", value: "	856.58	" },
      { name: "	Oct-22	", value: "	827.3	" },
      { name: "	Nov-22	", value: "	834.94	" },
      { name: "	Dec-22	", value: "	873.95	" },
      { name: "	Jan-23	", value: "	945.41	" },
      { name: "	Feb-23	", value: "	984.99	" },
      { name: "	Mar-23	", value: "	926.4	" },
    ];
    return (
      <div>
        <h2>Price History</h2>
        <LineChart
          width={1300}
          height={600}
          data={data}
          margin={{
            top: 150,
            right: 30,
            left: 20,
            bottom: 100,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </div>
    );
  }
}

export default Price;
