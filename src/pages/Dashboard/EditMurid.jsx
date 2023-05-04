import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import {
    useLazyCekNisQuery,
    useLazyCekNisnQuery,
    useGetOneSiswaQuery,
    useGetSiswaQuery,
    useGuruEditSiswaMutation,
} from "../../store/features/siswa/siswaSlice";
import check from "../../assets/img/check.png";
import { useNavigate, useParams } from "react-router";

const EditMurid = () => {
    let regexAlpabet = /^[A-Z a-z]+$/;

    const navigate = useNavigate();

    const { nisn } = useParams();

    const [getNisn, resNisn] = useLazyCekNisnQuery();
    const [getNis, resNis] = useLazyCekNisQuery();
    const { data: siswa, isSuccess } = useGetOneSiswaQuery(nisn);
    const [edit] = useGuruEditSiswaMutation();

    const [form, setForm] = useState({
        nama: "",
        tempat: "",
        tanggal: "",
        nisn: "",
    });

    if (siswa && !form.nama && !form.tempat && !form.tanggal) {
        console.log(siswa);
        setForm({
            nama: siswa.nama,
            tempat: siswa.tempatLahir,
            tanggal: siswa.tanggalLahir,
            nisn: siswa.nisn,
        });
    }

    const [errorMsg, setErrorMsg] = useState({
        nisn: false,
        nama: "",
        nis: false,
        tempat: "",
        tanggal: "",
    });

    const handleChange = async (e) => {
        e.preventDefault();
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(form, errorMsg);
        if (!errorMsg.nama && !errorMsg.tempat && !errorMsg.tanggal) {
            if (form.nama && form.tempat && form.tanggal && form.nisn) {
                if (
                    form.nama.match(regexAlpabet) &&
                    form.tempat.match(regexAlpabet)
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
                                    Swal.fire("Saved!", "", "success");
                                    navigate("/dashboard/murid");
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
                <h1 className="form-title">Edit Murid</h1>
            </center>
            <form id="tambahMurid">
                <div className="form-input">
                    <label for="nama">Nama</label>
                    <input
                        type="text"
                        name="nama"
                        value={form.nama}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-input">
                    <label for="tempat">Tempat Lahir</label>
                    <input
                        type="text"
                        name="tempat"
                        value={form.tempat}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-input">
                    <label for="tanggal">Tanggal Lahir</label>
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
                    Edit
                </button>
            </form>
        </div>
    );
};

export default EditMurid;
