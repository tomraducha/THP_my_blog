import React, { useState } from 'react';
import useFetch from '../../../tools/useFetch';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [form, setForm] = useState({
        email: "",
        password: "",
    })

    const navigate = useNavigate()

    function handleChange(e) {
        setForm({
            ...form.user,
            user: {
                [e.target.id]: e.target.value,
            }
        })
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const sendData = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        }
        const data = await useFetch('http://localhost:3000/users/sign_in', sendData)
        const token = await data.token
        Cookies.set("user_token", token)
        console.log("🚀 ~ file: index.jsx:29 ~ handleSubmit ~ data:", data)

        navigate("/")
    };

    return (
        <form onSubmit={handleSubmit}>
            
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    onChange={handleChange}
                />
            
            
                <label htmlFor="password">Mot de passe:</label>
                <input
                    type="password"
                    id="password"
                    onChange={handleChange}
                />
            
            <button type="submit">Se connecter</button>
        </form>
    );
}