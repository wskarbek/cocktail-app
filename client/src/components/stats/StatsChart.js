import React from "react";
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';

export default function StatsChart({s}) {

    const data = [
        {
            name: 'Alcoholic', count: s.alcoholic
        },
        {
            name: 'Non-alcoholic', count: s.nonalcoholic
        },
        {
            name: 'Highball glass', count: s.highball
        },
        {
            name: 'Old fashioned', count: s.oldfashioned
        },
        {
            name: 'Martini glass', count: s.martini
        },
        {
            name: 'Unicorn', count: s.unicorn
        }
    ];

    return (
        <div className="StatsChart">
            <BarChart
                width={700}
                height={300}
                data={data}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#DC143C" />
            </BarChart>
        </div>
    )
}