import React from "react";

export default function Drink({drink}) {
    return (
        <div className="DrinkSmall">
            <img src={`${drink.photo}`} alt="{drink.name}"/>
            <hr/>
            <h3>{drink.name}</h3>
            <h5>{drink.type}</h5>
        </div>
    )
}