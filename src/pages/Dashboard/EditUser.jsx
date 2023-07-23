import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import {
    useGetOneUserQuery,
    useUpdatePassUserMutation,
} from "../../store/features/user/userSlice";
import { useNavigate, useParams } from "react-router";

const EditUser = () => {
    let regexPassword = /^[A-Za-z0-9 ]+$/;
    let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    const navigate = useNavigate();

    const { username } = useParams();

    const { data: user } = useGetOneUserQuery(username);
    const [editPass] = useUpdatePassUserMutation();

    const [password, setPassword] = useState("");

    const [errorMsg, setErrorMsg] = useState("");

    useEffect(() => {
        if (user) {
            if (user.data.length < 1) {
                Swal.fire({
                    icon: "warning",
                    title: "User tidak ditemukan",
                    text: "Jangan merubah url",
                });
                navigate("/dashboard");
            }
        }
    }, [user]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!errorMsg) {
            if (password) {
                if (password.match(regexPassword)) {
                    Swal.fire({
                        icon: "question",
                        title: `Yakin untuk mengubah data?`,
                        showCancelButton: true,
                        confirmButtonText: "Ubah",
                    }).then((result) => {
                        /* Read more about isConfirmed, isDenied below */
                        if (result.isConfirmed) {
                            editPass({ password, username })
                                .unwrap()
                                .then((result) => {
                                    window.location.reload();
                                    Swal.fire("Saved!", "", "success");
                                })
                                .catch((error) => {
                                    console.log(error.message);
                                });
                        }
                    });
                } else {
                    Swal.fire({
                        icon: "warning",
                        title: "Kesalahan Inputan",
                        text: "Jangan ada karakter spesial",
                    });
                }
            } else {
                Swal.fire({
                    icon: "warning",
                    title: "Kesalahan Inputan",
                    text: "Form harus terisi",
                });
            }
        } else {
            Swal.fire({
                icon: "warning",
                title: "Kesalahan Inputan",
                text: "Form harus terisi",
            });
        }
    };

    return (
        <div className="contanier">
            <center>
                <h1 className="form-title">Ganti Password User {username}</h1>
            </center>
            <form id="tambahMurid">
                <div className="form-input">
                    <label for="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        value={username}
                        contentEditable="false"
                        required
                    />
                </div>
                <div className="form-input">
                    <label for="password">New Password</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="btn-submit"
                    onClick={handleSubmit}>
                    Edit
                </button>
            </form>
        </div>
    );
};

export default EditUser;
