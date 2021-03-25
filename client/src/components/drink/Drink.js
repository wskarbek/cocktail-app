import React, {useEffect, useState} from "react";

import DrinkComments from "./DrinkComments";
import DrinkStar from "./DrinkStars";

const createArray = length => [...Array(length)];

export default function DrinkView({drink, id}) {

    let tempStars = 0;
    if(drink.rating !== undefined) tempStars = drink.rating.score;

    const [stars, setStars] = useState(tempStars);

    console.log(stars);

    function exportToJson(d) {
        let filename = "export.json";
        let contentType = "application/json;charset=utf-8;";
        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
            var blob = new Blob([decodeURIComponent(encodeURI(JSON.stringify(d)))], { type: contentType });
            navigator.msSaveOrOpenBlob(blob, filename);
        } else {
            var a = document.createElement('a');
            a.download = filename;
            a.href = 'data:' + contentType + ',' + encodeURIComponent(JSON.stringify(d));
            a.target = '_blank';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
    }

    async function rateDrink(stars) {
        await fetch(`${process.env.REACT_APP_SERVER_URL}/drinks/${id}/${stars + 1}`)
        .then(res=> res.json())
            .then(res => {
            setStars(res.stars);
        });
    }

    return (
            <div className="Drink">
                <h3>{drink.name}</h3>
                <h5>{drink.type}</h5>
                {
                    createArray(5).map((n, i) => {
                        return <DrinkStar key={i} selected={stars > i} onSelect={() => rateDrink(i)}/>
                    })
                }
                Score: { Math.round(stars * 100) / 100 } / 5
                <br/>
                <img src={`${drink.photo}`} alt={drink.name}/>
                <h4>Best served in: {drink.glass}</h4>
                <ul>
                    {
                        drink.ingredients.map((ingredient, key) => {
                            return <li key={key}>{ingredient}</li>
                        })
                    }
                </ul>
                <p>{drink.recipe}</p>
                <button onClick={() => exportToJson(drink)}>Download to JSON file</button>
                <br/><br/>
                <DrinkComments id={id}/>
            </div>
        )
}