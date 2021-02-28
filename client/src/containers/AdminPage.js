import React, { useState } from "react";

import AdminAddDrink from "../components/admin/AdminAddDrink";
import AdminManageDrink from "../components/admin/AdminManageDrink";
import AdminManageComments from "../components/admin/AdminManageComments";

export default function AdminPage() {

    const [admin, setAdmin] = useState(false);
    const [key, setKey] = useState();

    async function verifyAdmin() {
        await fetch(`${process.env.REACT_APP_SERVER_URL}/admin/${key}`)
            .then(res=> res.json())
            .then(res => {
                setAdmin(res.admin);
            });
    }

    if(!admin) {
        return (
            <div className="AdminPage">
                <label>Please enter key to admin panel:
                    <input type="password" name="key" value={key} onChange={e => setKey(e.target.value)}/>
                    <button onClick={() => verifyAdmin()}>Login</button>
                </label>
            </div>
        )
    } else {
        return (
            <div className="AdminPage">
                <AdminAddDrink/>
                <AdminManageDrink/>
                <AdminManageComments/>
            </div>
        )
    }
}