import React, { useState, useEffect } from 'react';

export default function AdminManageComments() {

    const [ comments, setComments ] = useState();
    const [ reload, setReload ] = useState(false);

    async function getComments() {
        await fetch(`${process.env.REACT_APP_SERVER_URL}/drinkComments/`)
            .then(res => res.json())
            .then(res => res !== null ? setComments(res): setComments({}))
            .catch((err) => console.log(err));
    }

    async function delComment(id, message) {
        await fetch(`${process.env.REACT_APP_SERVER_URL}/drinkComments/${id}/${message}`, {
            method: 'DELETE',
        }).then(res => console.log(res));
    }

    useEffect(() => getComments(), [reload]);

    if(comments !== undefined) {
        return (
            <div className="AdminManageComments">
                <table>
                    <tr>
                        <th>Drink ID</th>
                        <th>Message</th>
                        <th>Remove</th>
                    </tr>
                    {
                        Object.keys(comments).map((commentId) => {
                            return comments[commentId].map((comment) => {
                                return (
                                    <tr>
                                        <td>{commentId}</td>
                                        <td>{comment.message}</td>
                                        <td><button onClick={() => {
                                            delComment(commentId, comment.message);
                                            setReload(!reload);
                                        }
                                        }>X</button></td>
                                    </tr>
                                )
                            });
                        })
                    }
                </table>
                <input type="button" onClick={() => setReload(!reload)} value="Reload"/>
            </div>
        )
    } else {
        return (
            <p>Drink list is loading... If it takes long time, database server is probably down.</p>
        )
    }
}