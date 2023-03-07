import React, { useState, useEffect, useRef } from "react";
import { actionForm } from "../services/Action/Action";
import { useDispatch, useSelector } from "react-redux";
import Date from "./Date";

function Home() {
    let callRef = useRef();

    const dispatch = useDispatch();
    const data = useSelector((state) => state.Reducers);

    const [value, setValue] = useState("");
    const [gender, setGender] = useState("");
    const [fromData, setFromData] = useState({});
    const [bool, setBool] = useState(false)


    // get the form data

    const getFromData = (e) => {
        let name = e.target.name;
        setFromData((old) => { return { ...old, [name]: e.target.value } });
    }

    // Tab button event
    window.addEventListener("keydown", (e) => {
        if (e.key === "Tab") {
            let fname = fromData.name;
            let Mname = fromData.middleName;
            let Lname = fromData.lastname;
            let firstname = fname.slice(0, 1).toUpperCase() + fname.slice(1);
            let middleName = Mname.slice(0, 1).toUpperCase() + Mname.slice(1);
            let lastname = Lname.slice(0, 1).toUpperCase() + Lname.slice(1);
            callRef.current.value = gender + " " + firstname + " " + middleName + " " + lastname;
        }
    });

    const getDataFromChild = (props) => {
        console.log(props)
        setFromData((old) => { return { ...old, "brithDate": props } })
    }

    const personalForm = (e) => {
        setValue(e.target.value);
        let personal = <form>
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
                <option>gender</option>
                <option>Mr.</option>
                <option>Miss.</option>
            </select> &nbsp;&nbsp;
            <label htmlFor="name" >name:</label>&nbsp;&nbsp;
            <input type="text" name="name" onChange={getFromData} />&nbsp;&nbsp;
            <label htmlFor="MiddleName" >MiddleName:</label>&nbsp;&nbsp;
            <input type="text" name="middleName" onChange={getFromData} />&nbsp;&nbsp;
            <label htmlFor="Lastname" >Lastname:</label>&nbsp;&nbsp;
            <input type="text" name="lastname" onChange={getFromData} />&nbsp;&nbsp;<br /><br />
            <label htmlFor="fullname">fullname:</label>
            <input type="text" ref={callRef} /><br /><br /><br />
            <label htmlFor="age">Brith of date:</label>
            <Date brithDate={getDataFromChild} />
        </form>

        if (e.target.value === "personal") {
            dispatch(actionForm(personal))
        } else {
            dispatch(actionForm(""))
        }
    }
    console.log(fromData)

    return (
        <>
            <h1>select your from </h1>
            select: <select value={value} onChange={personalForm} >
                <option >selectdata</option>
                <option >personal</option>
                <option>bussines</option>

            </select><br /><br />
            {
                data.map((item, i) => {
                    return <div key={i}>{item}</div>
                })
            }
        </>
    )
}

export default Home