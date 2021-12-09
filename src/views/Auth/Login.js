import React, { useState } from "react";
import "./Login.css";
import logo from '../../assets/img/uiib-logo.png';
import { useHistory } from "react-router-dom";
import axios from "axios";
import { CircularProgress } from "@material-ui/core";

function Login() {
    const history = useHistory();
    const [login, setLogin] = useState({ userName: "", password: "" });
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    JSON.parse(localStorage.getItem("profile"));

    const handleChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            setLoading(true);

            const credentials = await axios.post(
                "https://app.uiib.us/api//user/signin",
                { user: login.userName, password: login.password }
            );
            setUser(credentials?.data);
            localStorage.setItem("profile", JSON.stringify(credentials.data));
            setLogin({ userName: "", password: "" });
            setLoading(false);
            history.push("/admin/");
        } catch (error) {
            console.log(error);
        }
    };
    // useEffect(() => {
    //   const user = JSON.parse(localStorage.getItem("profile"));
    //   if (user) {
    //     history.push("/admin");
    //   }
    // }, []);
    console.log(user)

    return (
        <>
            <hgroup>
                <img src={logo} alt="UIIB_LOGO" />
            </hgroup>
            <form onSubmit={handleSubmit}>
                <div className="group">
                    <input
                        type="text"
                        name="userName"
                        value={login.userName}
                        onChange={handleChange}
                    />
                    <span className="highlight"></span>
                    <span className="bar"></span>

                    <label>User Id</label>
                </div>
                <div className="group">
                    <input
                        type="password"
                        name="password"
                        value={login.password}
                        onChange={handleChange}
                    />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label>Password</label>
                </div>

                <div className="btn-loader">
                    <button type="submit" className="button buttonBlue">
                        Login
                        <div className="ripples buttonRipples">
                            <span className="ripplesCircle"></span>
                        </div>
                    </button>

                    {loading && <CircularProgress />}
                </div>
            </form>
            <footer>
                <p>
                    © 2021 United Independent Insurance Brokers (UIIB) - All rights
                    reserved
                </p>
            </footer>
        </>
    );
}

export default Login;
