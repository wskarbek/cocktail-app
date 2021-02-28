import React, {useState} from "react";

export default function AdminAddDrink() {

    const [drink, setDrink] = useState({type: "Alcoholic"});

    function addDrink(event) {
        event.preventDefault();
        fetch(`${process.env.REACT_APP_SERVER_URL}/drinks/`, {
            method: 'POST',
            body: JSON.stringify({drink}),
            headers: { 'Content-Type': 'application/json' },
        }).then(res=>console.log(res));
        setDrink({type: "Alcoholic"});
    }

    function readFromFile(e) {
        let fileReader = new FileReader();
        fileReader.onloadend = () => {
            const content = fileReader.result;
            fetch(`${process.env.REACT_APP_SERVER_URL}/drinks/file`, {
                method: 'POST',
                body: content,
                headers: { 'Content-Type': 'application/json' },
            }).then(res=>console.log(res));
        }

        fileReader.readAsText(e.target.files[0]);
    }
    return (
        <div className="AdminAddDrinkForm">
            <form onSubmit={addDrink}>
                <label>
                    ID (use ID of existing drink to edit it):<br/>
                    <input
                        type="text"
                        name="id" id="id"
                        onChange={e => setDrink({ ...drink, id: e.target.value})}
                    />
                </label><br/>
                <label>
                    Name:<br/>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        onChange={e => setDrink({ ...drink, name: e.target.value})}
                    />
                </label><br/>
                <label>
                    Type:<br/>
                    <select name="type" id="type" value={drink.type} onChange={e => {setDrink({ ...drink, type: e.target.value})}}>
                        <option value="Alcoholic">Alcoholic</option>
                        <option value="Non-alcoholic">Non-alcoholic</option>
                    </select>
                </label><br/>
                <label>
                    Photo:<br/>
                    <input
                        type="text"
                        name="photo"
                        id="photo"
                        onChange={e => setDrink({ ...drink, photo: e.target.value})}
                    />
                </label><br/>
                <label>
                    Glass:<br/>
                    <input
                        type="text"
                        name="glass"
                        id="glass"
                        onChange={e => setDrink({ ...drink, glass: e.target.value})}
                    />
                </label><br/>
                <label>
                    Ingredients:<br/>
                    <input
                        type="text"
                        name="ingredients"
                        id="ingredients"
                        onChange={e => {
                            let ingredients = e.target.value.split(',');
                            setDrink({ ...drink, ingredients: ingredients});
                        }}
                    />
                </label><br/>
                <label>
                    Recipe:<br/>
                    <input
                        type="text"
                        name="recipe"
                        id="recipe"
                        onChange={e => setDrink({ ...drink, recipe: e.target.value})}
                    />
                </label><br/>
                <input type="submit" value="Send"/>
            </form>
            <br/>
            <div className="AdminAddDrinkFile">
                <label>
                    Add drinks from JSON file:<br/>
                    <input type="file" onChange={e => readFromFile(e)}/>
                </label>
            </div>
        </div>
    )
}