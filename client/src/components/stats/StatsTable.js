import React from "react";

export default function StatsTable({s}) {
    return (
        <div className="StatsTable">
            Statistics:
            <table>
                <tbody>
                    <tr>
                        <td colSpan={2}>Types</td>
                    </tr>
                    <tr>
                        <td>Alcoholic:</td>
                        <td>{s.alcoholic}</td>
                    </tr>
                    <tr>
                        <td>Non-alcoholic:</td>
                        <td>{s.nonalcoholic}</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>Glasses</td>
                    </tr>
                    <tr>
                        <td>Highball glass</td>
                        <td>{s.highball}</td>
                    </tr>
                    <tr>
                        <td>Old fashioned</td>
                        <td>{s.oldfashioned}</td>
                    </tr>
                    <tr>
                        <td>Martini glass</td>
                        <td>{s.martini}</td>
                    </tr>
                    <tr>
                        <td>Unicorn cup</td>
                        <td>{s.unicorn}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}