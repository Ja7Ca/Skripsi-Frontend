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

        if (!errorMsg) {
            await login({ username, password })
                .unwrap()
                .then((result) => {
                    if (!isLoading) {
                        console.log(result);
                        if (result.success) {
                            navigate("/dashboard");
                            Swal.fire({
                                icon: "success",
                                title: "Sukses Login",
                                text: "Selamat Datang",
                            });
                        } else {
                            Swal.fire({
                                icon: "error",
                                title: "Gagal Login",
                                text: "User atau password salah",
                            });
                        }
                    }
                })
                .catch((err) => {
                    console.log(err);
                    console.log("Something Is Wrong");
                });
        }
    };

    const [login, { isLoading }] = useLoginMutation();

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
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn-login">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
