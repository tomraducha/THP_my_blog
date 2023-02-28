import React, { useState } from 'react';
import useFetch from '../../../tools/useFetch';

export default function Login() {
    const [form, setForm] = useState({
        email: "",
        password: "",
    })

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
        console.log("🚀 ~ file: index.jsx:29 ~ handleSubmit ~ data:", data)
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="password">Mot de passe:</label>
                <input
                    type="password"
                    id="password"
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Se connecter</button>
        </form>
    );
}