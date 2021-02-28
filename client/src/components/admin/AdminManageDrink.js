import React, {useEffect, useState} from "react";

export default function AdminAddDrink() {
    const [ drinks, setDrinks ] = useState();
    const [ reload, setReload ] = useState();

    async function getDrinks() {
        await fetch(`${process.env.REACT_APP_SERVER_URL}/drinks/`)
            .then(res => res.json())
            .then(res => res !== null ? setDrinks(res): setDrinks({}))
            .catch((err) => console.log(err));
    }

    async function deleteDrink(id) {
        fetch(`${process.env.REACT_APP_SERVER_URL}/drinks/${id}`, {
            method: 'DELETE',
        }).then(res=>console.log(res));
    }

    useEffect(()=>getDrinks(), [reload]);

    if(drinks !== undefined) {
        return (
            <div className="AdminManageDrink">
                <table>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>Settings</th>
                    </tr>
                    {
                        Object.keys(drinks).map((drinkId, key) => {
                            return (
                                <tr>
                                    <td>{drinkId}</td>
                                    <td>{drinks[drinkId].name}</td>
                                    <td><button onClick={() => {
                                        deleteDrink(drinkId);
                                        setReload(!reload);
                                    }
                                    }>X</button></td>
                                </tr>
                            )
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