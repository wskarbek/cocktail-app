import React, {useEffect, useState} from "react";

import StatsTable from "../components/stats/StatsTable";
import StatsChart from "../components/stats/StatsChart";

export default function StatsPage() {
    const [ stats, setStats ] = useState({});

    function calcStats(res) {
        let stats = {};
        Object.keys(res).map((drinkId) => {
            if(res[drinkId].type === "Alcoholic") {
                if(stats.hasOwnProperty("alcoholic")) {
                    stats["alcoholic"]++;
                } else {
                    stats["alcoholic"]=1;
                }
            } else {
                if(stats.hasOwnProperty("nonalcoholic"))
                    stats["nonalcoholic"]++;
                else
                    stats["nonalcoholic"]=1;
            }
            if(res[drinkId].glass === "Highball glass") {
                if(stats.hasOwnProperty("highball")) {
                    stats["highball"]++;
                } else {
                    stats["highball"]=1;
                }
            }
            if(res[drinkId].glass === "Martini glass") {
                if(stats.hasOwnProperty("martini")) {
                    stats["martini"]++;
                } else {
                    stats["martini"]=1;
                }
            }
            if(res[drinkId].glass === "Old Fashioned Glass") {
                if(stats.hasOwnProperty("oldfashioned")) {
                    stats["oldfashioned"]++;
                } else {
                    stats["oldfashioned"]=1;
                }
            }
            if(res[drinkId].glass === "Unicorn cup") {
                if(stats.hasOwnProperty("unicorn")) {
                    stats["unicorn"]++;
                } else {
                    stats["unicorn"]=1;
                }
            }
            return res[drinkId];
        });
        setStats(stats);
    }

    async function getStats() {
        await fetch(`${process.env.REACT_APP_SERVER_URL}/drinks/`)
            .then(res => res.json())
            .then(res => res !== null ? calcStats(res): calcStats({}))
            .catch((err) => console.log(err));
    }

    useEffect(()=>getStats(), []);

    return (
        <div className="StatsPage">
            <StatsChart s={stats}/>
            <StatsTable s={stats}/>
        </div>
    )
}