import React, { useState } from "react";

function Personal() {
    const [data, setData] = useState("")
    const getData = (e) => {
        setData(e.target.value)
    }
    return (
        <>

            <form>
                <select value={data} onChange={getData}>
                    <option>Mr.</option>
                    <option>Miss.</option>
                </select>
                <label htmlFor="name">name:</label>
                <input type="text" />
                <label htmlFor="MiddleName">MiddleName:</label>
                <input type="text" />
                <label htmlFor="Lastname">Lastname:</label>
                <input type="text" />
            </form>

        </>
    )

}

export default Personal