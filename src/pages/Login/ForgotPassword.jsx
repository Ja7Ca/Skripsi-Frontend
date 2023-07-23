import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useForgotMutation } from "../../store/features/user/userSlice";
import Swal from "sweetalert2";

const ForgotPassword = () => {
    const [forgot, { isSuccess }] = useForgotMutation();
    const [form, setForm] = useState({ username: "", email: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (form.username && form.email) {
            await forgot(form)
                .unwrap()
                .then((result) => {
                    console.log(result.success);
                    if (result.success) {
                        Swal.fire({
                            icon: "success",
                            title: "Send Email",
                            text: `Silahkan cek email ${form.email}`,
                        });
                    } else {
                        console.log("B");
                        Swal.fire({
                            icon: "error",
                            title: "User tidak ditemukan",
                            text: result.message,
                        });
                    }
                })
                .catch((err) => {
                    console.log("Something Is Wrong");
                });
        }
    };

    return (
        <div className="section login">
            <div className="container login">
                <h1 className="login-title">Forgot Password</h1>
                <form onSubmit={handleSubmit} className="form-login">
                    <div className="wrap-input">
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={form.username}
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    [e.target.name]: e.target.value,
                                })
                            }
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={form.email}
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    [e.target.name]: e.target.value,
                                })
                            }
                        />
                    </div>
                    <button type="submit" className="btn-login">
                        Forgot
                    </button>
                    <center style={{ marginTop: "1em" }}>
                        <Link to={"/"}>Login?</Link>
                    </center>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;
