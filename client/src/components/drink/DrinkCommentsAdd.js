import React, {useState} from "react";

export default function DrinkCommentAdd({id}) {

    const [ comment, setComment ] = useState({id: id});

    function addComment(event) {
        fetch(`${process.env.REACT_APP_SERVER_URL}/drinkComments/`, {
            method: 'POST',
            body: JSON.stringify({comment}),
            headers: { 'Content-Type': 'application/json'},
        }).then(res=>console.log(res));
        setComment({id: id});
    }

    return (
        <div className="DrinkCommentAdd">
            <form onSubmit={addComment}>
                <label>
                    Author: <input
                    type="text"
                    name="author" id="author"
                    onChange={e => setComment({ ...comment, author: e.target.value })}
                />
                </label><br/>
                <label>
                    Comment: <input
                    type="text"
                    name="message" id="message"
                    onChange={e => setComment({ ...comment, message: e.target.value })}
                />
                </label>
                <br/>
                <input type="submit" value="Send"/>
            </form>
        </div>
    )
}