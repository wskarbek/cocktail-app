import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="Header">
            <ul>
                <li><img src={`${process.env.REACT_APP_PUBLIC_URL}/logo.png`} alt="Logo missing"/></li>
                <li><Link to="/">Drinks</Link></li>
                <li><Link to="/stats">Statistics</Link></li>
            </ul>
        </div>
    )
}