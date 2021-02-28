import React, {useEffect, useState} from "react";

import DrinkCommentAdd from "./DrinkCommentsAdd";

export default function DrinkComments({id}) {

    const [ drinkComments, setDrinkComments ] = useState();


    async function getDrinkComments() {
        await fetch(`${process.env.REACT_APP_SERVER_URL}/drinkComments/${id}`)
            .then(res => res.json())
            .then(res => res !== null ? setDrinkComments(res): setDrinkComments({}))
            .catch((err) => console.log(err));
    }

    useEffect(()=>getDrinkComments(), [id]);

    if(drinkComments !== undefined && drinkComments.length > 0) {
        return (
            <div className="DrinkComments">
                <DrinkCommentAdd id={id}/>
                <hr/>
                <ul>
                    {
                        drinkComments.map((comment, key) => {
                            return (
                                <li key={key}>
                                    <div className="DrinkComment">
                                        <p>{comment.author}: {comment.message}</p>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    } else {
        return (
            <div className="DrinkComments">
                <DrinkCommentAdd id={id}/>
                <hr/>
                This drink has no comments yet..
            </div>
        )
    }

}