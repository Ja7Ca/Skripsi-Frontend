import { useState } from "react";
import Swal from "sweetalert2";
import {
    useLazyCekNisQuery,
    useLazyCekNisnQuery,
    useAddSiswaMutation,
} from "../../store/features/siswa/siswaSlice";
import check from "../../assets/img/check.png";
import { useNavigate } from "react-router";

const AddMurid = () => {
    let regexAlpabet = /^[A-Z a-z]+$/;

    const navigate = useNavigate();

    const [getNisn, resNisn] = useLazyCekNisnQuery();
    const [getNis, resNis] = useLazyCekNisQuery();
    const [addSiswa, resSiswa] = useAddSiswaMutation();

    const [form, setForm] = useState({
        nisn: "",
        nama: "",
        nis: "",
        tempat: "",
        tanggal: "",
    });

    const [errorMsg, setErrorMsg] = useState({
        nisn: true,
        nama: "",
        nis: true,
        tempat: "",
        tanggal: "",
    });

    const handleNisn = async (e) => {
        e.preventDefault();
        await getNisn(form.nisn).then(async (response) => {
            if (response.data) {
                setErrorMsg({ ...errorMsg, nisn: true });
                Swal.fire({
                    icon: "error",
                    title: "Failed",
                    text: `NISN Sudah dipakai ${response.data.nama}`,
                });
            } else {
                setErrorMsg({ ...errorMsg, nisn: false });
                Swal.fire({
                    icon: "success",
                    title: "Sucess",
                    text: `NISN siap dipakai`,
                });
            }
        });
    };

    const handleNis = async (e) => {
        e.preventDefault();
        await getNis(form.nis).then(async (response) => {
            console.log(response);
            if (response.data) {
                setErrorMsg({ ...errorMsg, nis: true });
                Swal.fire({
                    icon: "error",
                    title: "Failed",
                    text: `NIS Sudah dipakai ${response.data.nama}`,
                });
            } else {
                setErrorMsg({ ...errorMsg, nis: false });
                Swal.fire({
                    icon: "success",
                    title: "Sucess",
                    text: `NIS siap dipakai`,
                });
            }
        });
    };

    const handleChange = async (e) => {
        e.preventDefault();
        if (e.target.name == "nis" || [e.target.name] == "nisn") {
            if (e.target.name == "nis") {
                setErrorMsg({ ...errorMsg, nis: true });
            } else if (e.target.name == "nisn") {
                setErrorMsg({ ...errorMsg, nisn: true });
            }
            if (+e.target.value) {
                setForm({ ...form, [e.target.name]: e.target.value });
            }
        } else {
            setForm({ ...form, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (
            !errorMsg.nama &&
            !errorMsg.nis &&
            !errorMsg.nisn &&
            !errorMsg.tempat &&
            !errorMsg.tanggal
        ) {
            if (
                form.nama &&
                form.nis &&
                form.nisn &&
                form.tempat &&
                form.tanggal
            ) {
                console.log(form.nama.match(regexAlpabet), form.nama);
                console.log(form.tempat.match(regexAlpabet), form.tempat);
                if (
                    form.nama.match(regexAlpabet) &&
                    form.tempat.match(regexAlpabet)
                ) {
                    await addSiswa(form).then((result) => {
                        Swal.fire({
                            icon: "success",
                            title: "Berhasil",
                            text: "Siswa berhasil ditambahkan",
                            confirmButtonText: "Saved",
                        }).then((result) => {
                            if (result.isConfirmed) {
                                // window.location.reload(false);
                                navigate("/dashboard/murid");
                            }
                        });
                    });
                } else {
                    if (errorMsg.nisn && errorMsg.nis) {
                        Swal.fire({
                            icon: "warning",
                            title: "Kesalahan Inputan",
                            text: "NISN dan NIS harus tervalidasi",
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
            if (errorMsg.nisn && errorMsg.nis) {
                Swal.fire({
                    icon: "warning",
                    title: "Kesalahan Inputan",
                    text: "NISN dan NIS harus tervalidasi",
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
                <h1 className="form-title">Tambah Murid</h1>
            </center>
            <form id="tambahMurid">
                <div className="form-input">
                    <label for="nisn">
                        NISN <span style={{ color: "red" }}>*</span>
                    </label>
                    <div className="wrap-input-btn">
                        <input
                            type="text"
                            name="nisn"
                            value={form.nisn}
                            onChange={handleChange}
                            required
                        />
                        {errorMsg.nisn ? (
                            <button className="btn-check" onClick={handleNisn}>
                                Check NISN
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
                    <label for="nis">
                        NIS <span style={{ color: "red" }}>*</span>
                    </label>
                    <div className="wrap-input-btn">
                        <input
                            type="text"
                            name="nis"
                            value={form.nis}
                            onChange={handleChange}
                            required
                        />
                        {errorMsg.nis ? (
                            <button className="btn-check" onClick={handleNis}>
                                Check NIS
                            </button>
                        ) : (
                            <img src={check} style={{ width: "3em" }} />
                        )}
                    </div>
                </div>
                <div className="form-input">
                    <label for="tempat">
                        Tempat Lahir <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                        type="text"
                        name="tempat"
                        value={form.tempat}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-input">
                    <label for="tanggal">
                        Tanggal Lahir <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                        type="date"
                        name="tanggal"
                        value={form.tanggal}
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

export default AddMurid;
