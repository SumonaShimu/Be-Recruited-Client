import React from 'react';
import {
    Radar,
    RadarChart,
    PolarGrid,
    Legend,
    PolarAngleAxis,
    PolarRadiusAxis
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
        <div className='w-[100%] h-[100vh]'>
            <RadarChart
            cx="50%" cy="50%"
            outerRadius='80%'
            width={800}
            height={600}
            data={data}
            className='mx-auto'
        >
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis domain={[0, 60]} />
            <Radar
                name="Optained Mark"
                dataKey="optainedMark:"
                stroke="#8884d8"
                fill="#8884d8"
                fillOpacity={0.3}
            />
            <Radar
                name="Total Marks"
                dataKey="fullMark"
                stroke="#82ca9d"
                fill="#82ca9d"
                fillOpacity={0.5}
            />
            <Legend />
        </RadarChart>
        </div>
        
    );
};

export default Statistics;




/**
import "./styles.css";
import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis
} from "recharts";

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

export default function App() {
  return (
    <RadarChart
      cx={300}
      cy={250}
      outerRadius={150}
      width={500}
      height={500}
      data={data}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis angle={45} domain={[0, 60]} />
      <Radar
        name="optained Mark:"
        dataKey="optainedMark:"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.3}
      />
      <Radar
        name="TotalMarks"
        dataKey="fullMark"
        stroke="#82ca9d"
        fill="#82ca9d"
        fillOpacity={0.3}
      />
      <Legend />
    </RadarChart>
  );
}

 */