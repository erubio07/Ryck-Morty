import React from "react";
import { useState } from "react";
import validations from "./validations"


export default function Form (props){
    
    const [userData, setuserData] = useState({
        username : "",
        password : "",
    });

    const [errors, setErrors] = useState({
        username : "",
        password : "",
    });

    const handleInputChange = (e) =>{
        setErrors (validations({
            ...userData,
            [e.target.name] : e.target.value
        })
        );
        setuserData({
            ...userData,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.login(userData);
    }


    return <div>
        <Form onSubmit={handleSubmit}>
        <label htmlFor="name">Username:</label>
        <input type="text" name="username" value={userData.username} onChange={handleInputChange}/>
        <p>{errors.username && errors.username}</p>
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" value={userData.password} onChange={handleInputChange}/>
        <p>{errors.password && errors.password}</p>
        <button type="submit">Submit</button>
        </Form>
    </div>
}