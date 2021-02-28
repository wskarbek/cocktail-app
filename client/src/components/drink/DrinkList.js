import React, { useState } from "react";
import { Link } from "react-router-dom";

import DrinkSmall from "./DrinkSmall";


export default function DrinkList({drinks}) {

    const [search, setSearch] = useState("");

    function searchDrink(e) {
        setSearch(e.target.value);
    }

    return (
        <div className="DrinkList">
            <div className="DrinkSearch">
                <label>Search for drink:
                    <input type="text"onChange={(e)=>searchDrink(e)}/>
                </label>
            </div>
            <ul>
                {
                    Object.keys(drinks).filter((drink) => {
                        if(search == null) {
                            return drink;
                        } else if(drinks[drink].name.toLowerCase().includes(search.toLowerCase())) {
                            return drink;
                        }
                        return null;
                    }).map((drinkId, key) => {
                        return (
                            <Link key={key} to={`/drink/${drinkId}`}>
                                <li key={key}>
                                    <DrinkSmall drink={drinks[drinkId]}/>
                                </li>
                            </Link>
                        )
                    })
                }
            </ul>
        </div>
    )
}