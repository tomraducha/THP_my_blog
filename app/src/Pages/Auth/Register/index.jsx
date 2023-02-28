import React, { useState } from "react";
import useFetch from "../../../tools/useFetch";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";
export default function Register() {
    const [form, setForm] = useState({
        user: {
            email: " ",
            password: " ",
        },
    });
    const navigate = useNavigate();

    function handleChange(e) {
        setForm({
            ...form,
            user: {
                ...form.user,
                [e.target.id]: e.target.value,
            },
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const sendData = {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(form),
        };

        const data = await useFetch("http://localhost:3000/users/", sendData);
        const token = await data.token;

        Cookies.set("user_token", token);
        navigate("/");
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input type="email" name="" id="email" onChange={handleChange} />

                <label>Password</label>
                <input type="password" name="" id="password" onChange={handleChange} />

                <button type="submit">S'inscrire</button>
            </form>
        </>
    );
}
