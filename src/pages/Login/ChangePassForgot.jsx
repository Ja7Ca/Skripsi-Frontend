import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import {
    useGetUserKeyQuery,
    useChangeForgotPassMutation,
} from "../../store/features/user/userSlice";
import Swal from "sweetalert2";

const ChangePassForgot = () => {
    const [password, setPassword] = useState("");
    const { key } = useParams();
    const [change] = useChangeForgotPassMutation();
    const { data: user } = useGetUserKeyQuery(key);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password) {
            await change({ key, newPassword: password })
                .unwrap()
                .then((result) => {
                    console.log(result.success);
                    if (result.success) {
                        console.log("A");
                        Swal.fire({
                            icon: "success",
                            title: "Berhasil ganti password",
                            text: `Silahkan Login kembali`,
                            confirmButtonText: "Oke",
                        }).then((result) => {
                            if (result.isConfirmed) {
                                // window.location.reload(false);
                                navigate("/dashboard/murid");
                            }
                        });
                    } else {
                        console.log("B");
                        Swal.fire({
                            icon: "error",
                            title: "Something is wrong",
                            text: result.message,
                        });
                    }
                })
                .catch((err) => {
                    console.log(err);
                    console.log("Something Is Wrong");
                });
        }
    };

    useEffect(() => {}, [user]);

    return (
        <div className="section login">
            <div className="container login">
                <h1 className="login-title">Change New Password</h1>
                <form onSubmit={handleSubmit} className="form-login">
                    <div className="wrap-input">
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={user ? user.data.username : ""}
                            editable="false"
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="New Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn-login">
                        Change Password
                    </button>
                    <center style={{ marginTop: "1em" }}>
                        <Link to={"/"}>Login?</Link>
                    </center>
                </form>
            </div>
        </div>
    );
};

export default ChangePassForgot;
