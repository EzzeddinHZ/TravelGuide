import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import "../styles/Form.css"
import LoadingIndicator from "./LoadingIndicator";

function Form({ route, method }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const name = method === "login" ? "Login" : "Register";

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();

        try {
            const res = await api.post(route, { username, password })
            if (method === "login") {
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
                navigate("/")
            } else {
                navigate("/login")
            }
        } catch (error) {
            alert(error)
        } finally {
            setLoading(false)
        }
    };

    return (
        <div className="form_bg">
            <form onSubmit={handleSubmit} className="form_main">
                <h1>{name}</h1>
                <div className="inputcontainer">
                    <input
                        className="form-input"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                    />
                    <input
                        className="form-input"
                        type="text"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Trip Code"
                    />
                </div>
                {loading && <LoadingIndicator />}
                <button className="form-button" type="submit">
                    {name}
                </button>
                <p>This website is for Demo purposes only.</p>
                <p>Please use</p>
                <p>username = "user" </p>
                <p>Trip code = "DSGFD" </p>
                <p>to view website</p>
            </form>
        </div>
    );
}

export default Form