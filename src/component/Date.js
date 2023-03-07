import React, { useEffect, useState } from "react";

function Child({ brithDate }) {
    const [bool, setBool] = useState(false)
    const [year, setYear] = useState("");
    const [month, setMonth] = useState("");
    const [day, setDay] = useState("");
    const [fromData, setFromData] = useState({});
    const getDate = (e) => {
        let name = e.target.name
        setFromData((old) => { return { ...old, [name]: e.target.value } });
        setBool(true);
        brithDate(e.target.value)
    }

    useEffect(() => {
        if (bool) {
            let brithDate = new Date(fromData.brithDate);
            let today = new Date();
            let yearAge = (Number(today.getFullYear()) - Number(brithDate.getFullYear())) - 1;
            let monthAge = 12 - Number(brithDate.getMonth()) + 1;
            let currenDate = new Date().getDate()
            let bod = brithDate.getDate()
            let sub = currenDate - bod
            var days = 31 + sub;
            setYear(yearAge)
            setMonth(monthAge)
            setDay(days)
        }
    }, [bool]);


    return (
        <>
            <input type="date" name="brithDate" onChange={getDate} />
            <p>year:{year} Month:{month} Day:{day}</p>
        </>
    )


}

export default Child