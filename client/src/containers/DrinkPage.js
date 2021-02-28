import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Drink from "../components/drink/Drink";

export default function DrinkPage() {
    const { id } = useParams();

    const [ drink, setDrink ] = useState();

    async function getDrink() {
        await fetch(`${process.env.REACT_APP_SERVER_URL}/drinks/${id}`)
            .then(res => res.json())
            .then(res => res !== null ? setDrink(res): setDrink({}))
            .catch((err) => console.log(err));
    }

    useEffect(()=>getDrink(), [id]);

    if(drink !==undefined) {
        return (
            <Drink drink={drink} id={id}/>
        )
    } else {
        return (
            <p>Drink is loading...</p>
        )
    }

}