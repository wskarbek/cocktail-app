import React, { useState, useEffect } from "react";

import DrinkList from "../components/drink/DrinkList";

export default function DrinksPage() {

    const [ drinks, setDrinks ] = useState();

    async function getDrinks() {
        await fetch(`${process.env.REACT_APP_SERVER_URL}/drinks/`)
            .then(res => res.json())
            .then(res => res !== null ? setDrinks(res): setDrinks({}))
            .catch((err) => console.log(err));
    }

    useEffect(()=>getDrinks(), []);

    if(drinks !== undefined) {
        return (
            <DrinkList drinks={drinks}/>
        )
    } else {
        return (
            <p>Drink list is loading... If it takes long time, database server is probably down.</p>
        )
    }

}