import React from "react";
import {FaStar} from "react-icons/fa";

export default function DrinkStar({ selected = false, onSelect = f => f }) {
    return <FaStar color={selected ? "red" : "grey"} onClick={onSelect}/>
};