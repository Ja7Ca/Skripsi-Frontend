import { Link } from "react-router-dom";
import TableMurid from "../../component/TableMurid";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import * as xlsx from "xlsx";
import { useState } from "react";
import Swal from "sweetalert2";

import {
    useLazyCekNisQuery,
    useLazyCekNisnQuery,
    useAddUploadFileMutation,
} from "../../store/features/siswa/siswaSlice";

const Murid = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [errMessage, setErrMessage] = useState(null);

    const [getNisn, resNisn] = useLazyCekNisnQuery();
    const [getNis, resNis] = useLazyCekNisQuery();
    const [addFile, resFile] = useAddUploadFileMutation();

    const checkKeyJson = (data) => {
        let el = data[0];
        console.log(
            el.hasOwnProperty("NISN"),
            el.hasOwnProperty("NIS"),
            el.hasOwnProperty("Nama"),
            el.hasOwnProperty("Tempat Lahir"),
            el.hasOwnProperty("Tanggal Lahir")
        );
        if (
            el.hasOwnProperty("NISN") &&
            el.hasOwnProperty("NIS") &&
            el.hasOwnProperty("Nama") &&
            el.hasOwnProperty("Tempat Lahir") &&
            el.hasOwnProperty("Tanggal Lahir")
        ) {
            return true;
        }
    };

    const handleJSON = async (e) => {
        e.preventDefault();
        if (selectedFile.name.slice(-5) === ".xlsx") {
            const reader = new FileReader();
            reader.onload = (e) => {
                const data = e.target.result;
                const workbook = xlsx.read(data, { type: "array" });
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                const json = xlsx.utils.sheet_to_json(worksheet);
                for (let i = 0; i < json.length; i++) {
                    if (errMessage == null) {
                        getNisn(json[i].NISN).then(async (response) => {
                            if (await response.data) {
                                Swal.fire({
                                    icon: "error",
                                    title: "Failed",
                                    text: `NISN ${response.data.nis} Sudah dipakai ${response.data.nama}`,
                                });
                                setErrMessage(
                                    "Beberapa data sudah dipakai, silahkan revisi data"
                                );
                                setSelectedFile(null);
                                return false;
                            }
                        });
                        getNis(json[i].NIS).then(async (response) => {
                            if (await response.data) {
                                Swal.fire({
                                    icon: "error",
                                    title: "Failed",
                                    text: `NIS ${response.data.nis} Sudah dipakai ${response.data.nama}`,
                                });
                                setErrMessage(
                                    "Beberapa data sudah dipakai, silahkan revisi data"
                                );
                                setSelectedFile(null);
                                return false;
                            }
                        });
                    }
                }
                if (checkKeyJson(json) && !errMessage) {
                    addFile(json)
                        .then((result) => {
                            Swal.fire({
                                icon: "success",
                                title: "Berhasil",
                                text: "Siswa berhasil ditambahkan",
                                confirmButtonText: "Saved",
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    window.location.reload(true);
                                }
                            });
                        })
                        .catch((err) => {
                            Swal.fire({
                                icon: "error",
                                title: "Gagal",
                                text: "Something Is Wrong",
                            });
                        });
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Gagal",
                        text: "Format Tidak Sesuai",
                    });
                }
            };
            reader.readAsArrayBuffer(selectedFile);
        } else {
            Swal.fire({
                icon: "warning",
                title: "Kesalahan Inputan",
                text: "File belum terupload atau Ekstensi file tidak sesuai",
            });
        }
    };

    return (
        <>
            <div
                className="wrap-add-murid"
                style={{ display: "flex", gap: "1em" }}>
                <Link to={"/dashboard/murid/add"}>
                    <button className="btn-tambah">Tambah +</button>
                </Link>
                <Popup
                    trigger={
                        <button className="btn-tambah"> Upload Excel </button>
                    }
                    modal>
                    <div style={{ textAlign: "center", padding: "2em" }}>
                        <h2>Silahkan Upload file excel</h2>
                        <form
                            style={{ marginTop: "2em", marginBottom: "1em" }}
                            onSubmit={handleJSON}>
                            <input
                                style={{
                                    display: "block",
                                    border: "1px solid grey",
                                    width: "100%",
                                    marginBottom: "1em",
                                }}
                                onChange={(e) => {
                                    setSelectedFile(e.target.files[0]);
                                    setErrMessage(null);
                                }}
                                name="uploadFile"
                                type="file"
                                accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                                required
                            />
                            <input className="btn-submit" type="submit" />
                        </form>
                        <a
                            href={
                                process.env.PUBLIC_URL +
                                "/file/Format_Murid.xlsx"
                            }
                            target="_blank"
                            download>
                            Belum Punya File?
                        </a>
                    </div>
                </Popup>
            </div>
            <TableMurid />
        </>
    );
};

export default Murid;
