import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import {
    useWhoamiQuery,
    useUpdateUserMutation,
} from "../../../store/features/user/userSlice";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";

const EditProfile = () => {
    let regexAlpabet = /^[A-Z a-z , .]+$/;
    let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    const navigate = useNavigate();

    const { nisn } = useParams();

    const { data: user } = useWhoamiQuery();
    const [edit] = useUpdateUserMutation();

    const [form, setForm] = useState({
        nama: "",
        nip: "",
        email: "",
    });

    if (user && !form.nama && !form.nip && !form.email) {
        setForm({
            nama: user.nama,
            nip: user.nip,
            email: user.email,
        });
    }

    const [errorMsg, setErrorMsg] = useState({
        email: "",
        nama: "",
        nip: "",
    });

    const handleChange = async (e) => {
        e.preventDefault();
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(form, errorMsg);
        if (!errorMsg.nama && !errorMsg.nip && !errorMsg.email) {
            if (form.nama && form.nip && form.email) {
                console.log(
                    form.nama.match(regexAlpabet),
                    form.email.match(regexEmail)
                );
                if (
                    form.nama.match(regexAlpabet) &&
                    form.email.match(regexEmail)
                ) {
                    Swal.fire({
                        icon: "question",
                        title: `Yakin untuk mengubah data?`,
                        showCancelButton: true,
                        confirmButtonText: "Ubah",
                    }).then((result) => {
                        /* Read more about isConfirmed, isDenied below */
                        if (result.isConfirmed) {
                            edit(form)
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
                        text: "Form harus terisi dengan benar",
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
                <h1 className="form-title">Edit Profile</h1>
            </center>
            <form id="tambahMurid">
                <div className="form-input">
                    <label for="nama">Nama dan Gelar</label>
                    <input
                        type="text"
                        name="nama"
                        value={form.nama}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-input">
                    <label for="nip">nip</label>
                    <input
                        type="text"
                        name="nip"
                        value={form.nip}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-input">
                    <label for="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
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
            {user ? (
                user.username == "admin" ? (
                    <center style={{ marginTop: "1em" }}>
                        <Link to={`/dashboard/user/${user.username}`}>
                            Ganti Password?
                        </Link>
                    </center>
                ) : (
                    ""
                )
            ) : (
                ""
            )}
        </div>
    );
};

export default EditProfile;
