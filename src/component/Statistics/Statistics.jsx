import React from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer
} from "recharts";

const Statistics = () => {

  const data = [
    {
      subject: "Assignment-1",
      optainedMark: 60,
      fullMark: 60
    },
    {
      subject: "Assignment-2",
      optainedMark: 60,
      fullMark: 60
    },
    {
      subject: "Assignment-3",
      optainedMark: 60,
      fullMark: 60
    },
    {
      subject: "Assignment-4",
      optainedMark: 60,
      fullMark: 60
    },
    {
      subject: "Assignment-5",
      optainedMark: 60,
      fullMark: 60
    },
    {
      subject: "Assignment-6",
      optainedMark: 60,
      fullMark: 60
    },
    {
      subject: "Assignment-7",
      optainedMark: 60,
      fullMark: 60
    },
    {
      subject: "Assignment-8",
      optainedMark: 60,
      fullMark: 60
    }
  ];
  return (
    <div>
      <div className='header'>
        <h1 className='text-center'>Statistics</h1>
      </div>
      <ResponsiveContainer width="100%"
        height={550}>
        <RadarChart
          cx="50%" cy="50%"
          outerRadius='70%'
          data={data}
        >
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={45} domain={[0, 60]} />
          <Radar
            name="Optained Mark"
            dataKey="optainedMark"
            stroke='#ff0000c7'
            fill="#ff0000c7"
            fillOpacity={0.3}
          />
          <Radar
            name="Total Mark"
            dataKey="fullMark"
            stroke="#0000ff82"
            fill="#0000ff82"
            fillOpacity={0.5}
          />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;