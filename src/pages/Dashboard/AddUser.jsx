import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import {
    useLazyCekUsernameQuery,
    useAddUserMutation,
} from "../../store/features/user/userSlice";
import { useGetKelasKosongQuery } from "../../store/features/kelas/kelasSlice";
import check from "../../assets/img/check.png";
import { useNavigate } from "react-router";

const AddUser = () => {
    let regexAlpabet = /^^[a-zA-Z0-9]{4,10}$/;
    let regexEmail = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;

    const navigate = useNavigate();

    const [getUsername, resUsername] = useLazyCekUsernameQuery();
    const { data: kelas } = useGetKelasKosongQuery(
        {},
        {
            refetchOnMountOrArgChange: true,
        }
    );
    const [addUser, resUser] = useAddUserMutation();

    const [form, setForm] = useState({
        username: "",
        nama: "",
        nip: "",
        email: "",
        kelas: "",
        password: "",
    });

    const [errorMsg, setErrorMsg] = useState({
        username: true,
        nama: "",
        nip: "",
        email: "",
        kelas: "",
        password: "",
    });

    useEffect(() => {}, [kelas]);

    const handleUsername = async (e) => {
        e.preventDefault();
        await getUsername(form.username).then(async (response) => {
            if (!response.data.success) {
                setErrorMsg({ ...errorMsg, username: true });
                Swal.fire({
                    icon: "error",
                    title: "Failed",
                    text: `Username Sudah dipakai ${response.data.data.nama}`,
                });
            } else {
                setErrorMsg({ ...errorMsg, username: false });
                Swal.fire({
                    icon: "success",
                    title: "Sucess",
                    text: `Username siap dipakai`,
                });
            }
        });
    };

    const handleChange = async (e) => {
        e.preventDefault();
        if (e.target.name == "username") {
            setErrorMsg({ ...errorMsg, username: true });
        }
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        console.log(form);
        e.preventDefault();
        if (
            !errorMsg.username &&
            !errorMsg.nama &&
            !errorMsg.nip &&
            !errorMsg.email &&
            !errorMsg.password
        ) {
            if (
                form.username &&
                form.nama &&
                form.nip &&
                form.email &&
                form.password
            ) {
                console.log(form.nama.match(regexAlpabet), form.nama);
                console.log(regexEmail.test(form.email), form.email);
                if (
                    form.nama.match(regexAlpabet) &&
                    form.email.match(regexEmail)
                ) {
                    await addUser(form).then((result) => {
                        Swal.fire({
                            icon: "success",
                            title: "Berhasil",
                            text: "User berhasil ditambahkan",
                            confirmButtonText: "Saved",
                        }).then((result) => {
                            if (result.isConfirmed) {
                                // window.location.reload(true);
                                navigate("/dashboard/user");
                            }
                        });
                    });
                } else {
                    if (errorMsg.username) {
                        Swal.fire({
                            icon: "warning",
                            title: "Kesalahan Inputan",
                            text: "Username harus tervalidasi",
                        });
                    } else {
                        Swal.fire({
                            icon: "warning",
                            title: "Kesalahan Inputan",
                            text: "Form harus terisi dengan benar",
                        });
                    }
                }
            } else {
                Swal.fire({
                    icon: "warning",
                    title: "Kesalahan Inputan",
                    text: "Form harus terisi dengan benar",
                });
            }
        } else {
            console.log(errorMsg);
            if (errorMsg.username) {
                Swal.fire({
                    icon: "warning",
                    title: "Kesalahan Inputan",
                    text: "Username harus tervalidasi",
                });
            } else {
                Swal.fire({
                    icon: "warning",
                    title: "Kesalahan Inputan",
                    text: "Form harus terisi dengan benar",
                });
            }
        }
    };

    return (
        <div className="contanier">
            <center>
                <h1 className="form-title">Tambah User</h1>
            </center>
            <form id="tambahMurid">
                <div className="form-input">
                    <label for="username">
                        Username <span style={{ color: "red" }}>*</span>
                    </label>
                    <div className="wrap-input-btn">
                        <input
                            type="text"
                            name="username"
                            value={form.username}
                            onChange={handleChange}
                            required
                        />
                        {errorMsg.username ? (
                            <button
                                className="btn-check"
                                onClick={handleUsername}>
                                Check Username
                            </button>
                        ) : (
                            <img src={check} style={{ width: "3em" }} />
                        )}
                    </div>
                </div>
                <div className="form-input">
                    <label for="nama">
                        Nama <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                        type="text"
                        name="nama"
                        value={form.nama}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-input">
                    <label for="nip">
                        Nip <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                        type="text"
                        name="nip"
                        value={form.nip}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-input">
                    <label for="email">
                        Email <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-input">
                    <label for="kelas">Kelas</label>
                    <select
                        name="kelas"
                        onChange={handleChange}
                        value={form.kelas}
                        required>
                        <option value="">Select</option>
                        {kelas
                            ? kelas.data.map((el) => (
                                  <option value={el.id}>{el.nama}</option>
                              ))
                            : ""}
                    </select>
                </div>
                <div className="form-input">
                    <label for="password">
                        Password <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="btn-submit"
                    onClick={handleSubmit}>
                    Tambah
                </button>
            </form>
        </div>
    );
};

export default AddUser;
