import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useLoginMutation } from "../../store/features/user/userSlice";
import Swal from "sweetalert2";

const regex = /^[A-Za-z0-9 ]+$/;

const Login = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (regex.test(username) || regex.test(password)) {
            setErrorMsg("Tidak boleh ada character spesial");
        }
        console.log(username, password);
        console.log(errorMsg);
        if (!errorMsg) {
            login({ username, password })
                .unwrap()
                .then((result) => {
                    console.log(result);
                    if (result.success) {
                        navigate("/dashboard");
                        Swal.fire({
                            icon: "success",
                            title: "Sukses Login",
                            text: "Selamat Datang",
                        });
                    } else {
                        setUsername("");
                        setPassword("");
                        setErrorMsg("");
                        Swal.fire({
                            icon: "error",
                            title: "Gagal Login",
                            text: "User atau password salah",
                        });
                    }
                })
                .catch((err) => {
                    console.log(err);
                    console.log("Something Is Wrong");
                });
        } else {
            setErrorMsg("");
            Swal.fire({
                icon: "error",
                title: "Form Error",
                text: "Tidak Boleh Ada yang kosong",
            });
        }
    };

    const [login] = useLoginMutation();

    return (
        <div className="section login">
            <div className="container login">
                <h1 className="login-title">Sign In to E-Raport</h1>
                <form onSubmit={handleSubmit} className="form-login">
                    <div className="wrap-input">
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn-login">
                        Login
                    </button>
                    <center style={{ marginTop: "1em" }}>
                        <Link to={"/forgot"}>Forgot password?</Link>
                    </center>
                </form>
            </div>
        </div>
    );
};

export default Login;
