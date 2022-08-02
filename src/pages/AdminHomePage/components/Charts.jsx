import { Grid } from '@mui/material';
import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';




function Charts() {
    const data = [
        {
          name: 'Jan',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Feb',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Mar',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Apr',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'May',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Jun',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Jul',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
        {
          name: 'Aug',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Sep',
          uv: 3490,
          pv: 2300,
          amt: 2100,
        },
        {
          name: 'Oct',
          uv: 2090,
          pv: 4300,
          amt: 2100,
        },
        {
          name: 'Nov',
          uv: 3000,
          pv: 1398,
          amt: 1210,
        },
        {
          name: 'Dec',
          uv: 3000,
          pv: 8398,
          amt: 2210,
        },
      ];

  return (
    <div>
<Grid item xs={15} sm container>

<Grid item xs={12} sm container>
  <Grid item xs container direction="column" spacing={2}>
          <AreaChart width={1090} height={450} data={data}
  margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
  <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
</AreaChart>
</Grid>
</Grid>
</Grid>

    </div>
  )
}

export default Charts