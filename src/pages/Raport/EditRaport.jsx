import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from "@mui/material";
import { useEffect, useState } from "react";

import {
    useGetNilaiQuery,
    useEditNilaiMutation,
} from "../../store/features/nilai/nilaiSlice";
import {
    useGetSikapQuery,
    useGetSaranQuery,
    useGetPrestasiQuery,
    useGetKehadiranQuery,
} from "../../store/features/sikap/sikapSlice";
import { useGetEskulQuery } from "../../store/features/eskul/eskulSlice";
import { useParams } from "react-router";
import Swal from "sweetalert2";

const EditRaport = () => {
    const { nisn } = useParams();
    const [loading, setLoading] = useState(true);
    const [edit] = useEditNilaiMutation();
    const [formSaran, setFormSaran] = useState("");
    const [formPrestasi, setFormPrestasi] = useState({
        kesenian: "",
        olahRaga: "",
    });
    const [formKehadiran, setFormKehadiran] = useState({
        sakit: 0,
        ijin: 0,
        tanpaKeterangan: 0,
    });
    const [formSikap, setFormSikap] = useState({ spiritual: "", sosial: "" });
    const [formEskul, setFormEskul] = useState({
        pramuka: "",
        komputer: "",
        menari: "",
        melukis: "",
        marchingBand: "",
        belaDiri: "",
        musik: "",
        karawitan: "",
        bola: "",
        hadroh: "",
        tilawah: "",
        paduan: "",
    });
    const [formNilai, setFormNilai] = useState({
        ipa: {
            ki3_1: "",
            ki4_1: "",
            ki3_2: "",
            ki4_2: "",
            mapel: "",
            alias: "",
        },
    });
    let semNilai = {};

    const { data: nilai } = useGetNilaiQuery(nisn, {
        refetchOnMountOrArgChange: true,
    });
    const { data: sikap } = useGetSikapQuery(nisn, {
        refetchOnMountOrArgChange: true,
    });
    const { data: saran } = useGetSaranQuery(nisn, {
        refetchOnMountOrArgChange: true,
    });
    const { data: prestasi } = useGetPrestasiQuery(nisn, {
        refetchOnMountOrArgChange: true,
    });
    const { data: kehadiran } = useGetKehadiranQuery(nisn, {
        refetchOnMountOrArgChange: true,
    });
    const { data: eskul } = useGetEskulQuery(nisn, {
        refetchOnMountOrArgChange: true,
    });
    if (nilai) {
        nilai.map((el, index) => {
            semNilai = {
                ...semNilai,
                [el.mapel.alias]: {
                    ki3_1: el.nilai_k3_smst1,
                    ki4_1: el.nilai_k4_smst1,
                    ki3_2: el.nilai_k3_smst2,
                    ki4_2: el.nilai_k4_smst2,
                    mapel: el.mapel.nama,
                    alias: el.mapel.alias,
                },
            };
        });
        if (Object.keys(formNilai).length == 1) {
            setFormNilai(semNilai);
            setLoading(false);
        }
    }

    if (sikap && eskul && saran && prestasi && kehadiran) {
        if (!formSikap.sosial && !formSikap.spiritual) {
            setFormSikap({
                sosial: sikap.data.sosial,
                spiritual: sikap.data.spiritual,
            });
            setFormEskul({
                pramuka: eskul.data.pramuka,
                komputer: eskul.data.komputer,
                menari: eskul.data.menari,
                melukis: eskul.data.melukis,
                marchingBand: eskul.data.marchingBand,
                belaDiri: eskul.data.belaDiri,
                musik: eskul.data.musik,
                karawitan: eskul.data.karawitan,
                bola: eskul.data.bola,
                hadroh: eskul.data.hadroh,
                tilawah: eskul.data.tilawah,
                paduan: eskul.data.paduan,
            });
            setFormSaran(saran.data.saran);
            setFormPrestasi({
                kesenian: prestasi.data.kesenian,
                olahRaga: prestasi.data.olahRaga,
            });
            setFormKehadiran({
                sakit: kehadiran.data.sakit,
                ijin: kehadiran.data.ijin,
                tanpaKeterangan: kehadiran.data.tanpaKehadiran,
            });
        }
    }

    const onChangeSaran = (e) => {
        e.preventDefault();
        setFormSaran(e.target.value);
    };

    const onChangePrestasi = (e) => {
        e.preventDefault();
        setFormPrestasi({ ...formPrestasi, [e.target.name]: e.target.value });
    };

    const onChangeKehadiran = (e) => {
        e.preventDefault();
        setFormKehadiran({ ...formKehadiran, [e.target.name]: e.target.value });
    };

    const onChangeSikap = (e) => {
        e.preventDefault();
        setFormSikap({ ...formSikap, [e.target.name]: e.target.value });
    };

    const onChangeEskul = (e) => {
        e.preventDefault();
        setFormEskul({ ...formEskul, [e.target.name]: e.target.value });
        console.log(formEskul);
    };

    const onChangeNilai = (e) => {
        e.preventDefault();
        if (e.target.value == "") {
            semNilai[e.target.attributes.getNamedItem("mapel").value][
                e.target.name
            ] = "";
            setFormNilai((prevState) => ({
                ...prevState,
                [e.target.attributes.getNamedItem("mapel").value]: {
                    ...prevState[
                        e.target.attributes.getNamedItem("mapel").value
                    ],
                    [e.target.name]: "",
                },
            }));
        } else if (e.target.value <= 100 && e.target.value >= 0) {
            semNilai[e.target.attributes.getNamedItem("mapel").value][
                e.target.name
            ] = +e.target.value;
            setFormNilai((prevState) => ({
                ...prevState,
                [e.target.attributes.getNamedItem("mapel").value]: {
                    ...prevState[
                        e.target.attributes.getNamedItem("mapel").value
                    ],
                    [e.target.name]: +e.target.value,
                },
            }));
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();
        Swal.fire({
            icon: "question",
            title: `Yakin untuk mengubah data?`,
            showCancelButton: true,
            confirmButtonText: "Ubah",
        }).then((response) => {
            if (response.isConfirmed) {
                // console.log({
                //     nilai: formNilai,
                //     sikap: formSikap,
                //     eskul: formEskul,
                //     nisn,
                // });
                edit({
                    nilai: formNilai,
                    sikap: formSikap,
                    eskul: formEskul,
                    saran: formSaran,
                    prestasi: formPrestasi,
                    kehadiran: formKehadiran,
                    nisn,
                })
                    .unwrap()
                    .then((result) => {
                        window.location.reload();
                        Swal.fire("Saved!", "", "success");
                    })
                    .catch((error) => {
                        Swal.fire({
                            icon: "error",
                            title: `Something is wrong`,
                        });
                    });
            }
        });
    };

    useEffect(() => {}, [formNilai, nilai, saran]);

    return (
        <form onSubmit={onSubmit} id="rapot">
            <center>
                <h1>{nilai ? nilai[0].siswa.nama : ""}</h1>
            </center>
            <h1>A. Sikap</h1>
            <Table style={{ marginTop: "2em", marginBottom: "2em" }}>
                <TableHead sx={{ bgcolor: "white" }}>
                    <TableCell>No</TableCell>
                    <TableCell>Sikap</TableCell>
                    <TableCell sx={{ width: "75%" }}>Deskripsi</TableCell>
                </TableHead>
                <TableBody>
                    <TableRow
                        sx={{
                            bgcolor: "rgba(145, 158, 171, 0.16)",
                        }}>
                        <TableCell>1</TableCell>
                        <TableCell>Sikap Spiritual</TableCell>
                        <TableCell>
                            <select
                                name="spiritual"
                                style={{
                                    width: "100%",
                                    boxSizing: "border-box",
                                }}
                                value={formSikap.spiritual}
                                onChange={onChangeSikap}>
                                <option value="">Select</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                                <option value="E">E</option>
                            </select>
                        </TableCell>
                    </TableRow>
                    <TableRow
                        sx={{
                            bgcolor: "rgba(145, 158, 171, 0.16)",
                        }}>
                        <TableCell>2</TableCell>
                        <TableCell>Sikap Sosial</TableCell>
                        <TableCell>
                            <select
                                name="sosial"
                                style={{
                                    width: "100%",
                                    boxSizing: "border-box",
                                }}
                                value={formSikap.sosial}
                                onChange={onChangeSikap}>
                                <option value="">Select</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                                <option value="E">E</option>
                            </select>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <h1>B. Nilai</h1>
            <Table style={{ marginTop: "2em", marginBottom: "2em" }}>
                <TableHead sx={{ bgcolor: "white" }}>
                    <TableCell>No</TableCell>
                    <TableCell>Mapel</TableCell>
                    <TableCell>KI 3 Smst 1</TableCell>
                    <TableCell>KI 4 Smst 1</TableCell>
                    <TableCell>KI 3 Smst 2</TableCell>
                    <TableCell>KI 4 Smst 2</TableCell>
                </TableHead>
                <TableBody>
                    {Object.keys(formNilai).length >= 1
                        ? Object.keys(formNilai).map((el, index) => (
                              <TableRow
                                  sx={{
                                      bgcolor:
                                          index % 2 == 0
                                              ? "rgba(145, 158, 171, 0.16)"
                                              : "rgba(145, 158, 171, 0.16)",
                                  }}>
                                  <TableCell>{index + 1}</TableCell>
                                  <TableCell>{formNilai[el].mapel}</TableCell>
                                  <TableCell style={{ fontSize: "1.5em" }}>
                                      <input
                                          max="100"
                                          min="0"
                                          type="number"
                                          style={{
                                              width: "2em",
                                              height: "100%",
                                              fontSize: "1em",
                                              borderTop: "0",
                                              borderLeft: "0",
                                              borderRight: "0",
                                              backgroundColor: "transparent",
                                          }}
                                          mapel={formNilai[el].alias}
                                          name="ki3_1"
                                          value={formNilai[el].ki3_1}
                                          onChange={onChangeNilai}></input>
                                      {!formNilai[el].ki3_1 ? (
                                          <span>/100</span>
                                      ) : (
                                          ""
                                      )}
                                  </TableCell>
                                  <TableCell style={{ fontSize: "1.5em" }}>
                                      <input
                                          max="100"
                                          min="0"
                                          type="number"
                                          style={{
                                              width: "2em",
                                              height: "100%",
                                              fontSize: "1em",
                                              borderTop: "0",
                                              borderLeft: "0",
                                              borderRight: "0",
                                              backgroundColor: "transparent",
                                          }}
                                          mapel={formNilai[el].alias}
                                          name="ki4_1"
                                          value={formNilai[el].ki4_1}
                                          onChange={onChangeNilai}></input>
                                      {!formNilai[el].ki4_1 ? (
                                          <span>/100</span>
                                      ) : (
                                          ""
                                      )}
                                  </TableCell>
                                  <TableCell style={{ fontSize: "1.5em" }}>
                                      <input
                                          max="100"
                                          min="0"
                                          type="number"
                                          style={{
                                              width: "2em",
                                              height: "100%",
                                              fontSize: "1em",
                                              borderTop: "0",
                                              borderLeft: "0",
                                              borderRight: "0",
                                              backgroundColor: "transparent",
                                          }}
                                          mapel={formNilai[el].alias}
                                          name="ki3_2"
                                          value={formNilai[el].ki3_2}
                                          onChange={onChangeNilai}></input>
                                      {!formNilai[el].ki3_2 ? (
                                          <span>/100</span>
                                      ) : (
                                          ""
                                      )}
                                  </TableCell>
                                  <TableCell style={{ fontSize: "1.5em" }}>
                                      <input
                                          max="100"
                                          min="0"
                                          type="number"
                                          style={{
                                              width: "2em",
                                              height: "100%",
                                              fontSize: "1em",
                                              borderTop: "0",
                                              borderLeft: "0",
                                              borderRight: "0",
                                              backgroundColor: "transparent",
                                          }}
                                          mapel={formNilai[el].alias}
                                          name="ki4_2"
                                          value={formNilai[el].ki4_2}
                                          onChange={onChangeNilai}></input>
                                      {!formNilai[el].ki4_2 ? (
                                          <span>/100</span>
                                      ) : (
                                          ""
                                      )}
                                  </TableCell>
                              </TableRow>
                          ))
                        : ""}
                </TableBody>
            </Table>
            <h1>C. Ekstrakulikuler</h1>
            <Table style={{ marginTop: "2em", marginBottom: "2em" }}>
                <TableHead sx={{ bgcolor: "white" }}>
                    <TableCell>No</TableCell>
                    <TableCell>Eksul</TableCell>
                    <TableCell sx={{ width: "75%" }}>Deskripsi</TableCell>
                </TableHead>
                <TableBody>
                    <TableRow
                        sx={{
                            bgcolor: "rgba(145, 158, 171, 0.16)",
                        }}>
                        <TableCell>1</TableCell>
                        <TableCell>Praja Muda Karana (Pramuka)</TableCell>
                        <TableCell>
                            <select
                                name="pramuka"
                                style={{
                                    width: "100%",
                                    boxSizing: "border-box",
                                }}
                                value={formEskul.pramuka}
                                onChange={onChangeEskul}>
                                <option value="">Select</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                                <option value="E">E</option>
                            </select>
                        </TableCell>
                    </TableRow>
                    <TableRow
                        sx={{
                            bgcolor: "rgba(145, 158, 171, 0.16)",
                        }}>
                        <TableCell>2</TableCell>
                        <TableCell>Komputer</TableCell>
                        <TableCell>
                            <select
                                name="komputer"
                                style={{
                                    width: "100%",
                                    boxSizing: "border-box",
                                }}
                                value={formEskul.komputer}
                                onChange={onChangeEskul}>
                                <option value="">Select</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                                <option value="E">E</option>
                            </select>
                        </TableCell>
                    </TableRow>
                    <TableRow
                        sx={{
                            bgcolor: "rgba(145, 158, 171, 0.16)",
                        }}>
                        <TableCell>3</TableCell>
                        <TableCell>Menari</TableCell>
                        <TableCell>
                            <select
                                name="menari"
                                style={{
                                    width: "100%",
                                    boxSizing: "border-box",
                                }}
                                value={formEskul.menari}
                                onChange={onChangeEskul}>
                                <option value="">Select</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                                <option value="E">E</option>
                            </select>
                        </TableCell>
                    </TableRow>
                    <TableRow
                        sx={{
                            bgcolor: "rgba(145, 158, 171, 0.16)",
                        }}>
                        <TableCell>4</TableCell>
                        <TableCell>Melukis</TableCell>
                        <TableCell>
                            <select
                                name="melukis"
                                style={{
                                    width: "100%",
                                    boxSizing: "border-box",
                                }}
                                value={formEskul.melukis}
                                onChange={onChangeEskul}>
                                <option value="">Select</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                                <option value="E">E</option>
                            </select>
                        </TableCell>
                    </TableRow>
                    <TableRow
                        sx={{
                            bgcolor: "rgba(145, 158, 171, 0.16)",
                        }}>
                        <TableCell>5</TableCell>
                        <TableCell>Marching Band</TableCell>
                        <TableCell>
                            <select
                                name="marchingBand"
                                style={{
                                    width: "100%",
                                    boxSizing: "border-box",
                                }}
                                value={formEskul.marchingBand}
                                onChange={onChangeEskul}>
                                <option value="">Select</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                                <option value="E">E</option>
                            </select>
                        </TableCell>
                    </TableRow>
                    <TableRow
                        sx={{
                            bgcolor: "rgba(145, 158, 171, 0.16)",
                        }}>
                        <TableCell>6</TableCell>
                        <TableCell>Bela Diri</TableCell>
                        <TableCell>
                            <select
                                name="belaDiri"
                                style={{
                                    width: "100%",
                                    boxSizing: "border-box",
                                }}
                                value={formEskul.belaDiri}
                                onChange={onChangeEskul}>
                                <option value="">Select</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                                <option value="E">E</option>
                            </select>
                        </TableCell>
                    </TableRow>
                    <TableRow
                        sx={{
                            bgcolor: "rgba(145, 158, 171, 0.16)",
                        }}>
                        <TableCell>7</TableCell>
                        <TableCell>Musik</TableCell>
                        <TableCell>
                            <select
                                name="musik"
                                style={{
                                    width: "100%",
                                    boxSizing: "border-box",
                                }}
                                value={formEskul.musik}
                                onChange={onChangeEskul}>
                                <option value="">Select</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                                <option value="E">E</option>
                            </select>
                        </TableCell>
                    </TableRow>
                    <TableRow
                        sx={{
                            bgcolor: "rgba(145, 158, 171, 0.16)",
                        }}>
                        <TableCell>8</TableCell>
                        <TableCell>Karawitan</TableCell>
                        <TableCell>
                            <select
                                name="karawitan"
                                style={{
                                    width: "100%",
                                    boxSizing: "border-box",
                                }}
                                value={formEskul.karawitan}
                                onChange={onChangeEskul}>
                                <option value="">Select</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                                <option value="E">E</option>
                            </select>
                        </TableCell>
                    </TableRow>
                    <TableRow
                        sx={{
                            bgcolor: "rgba(145, 158, 171, 0.16)",
                        }}>
                        <TableCell>9</TableCell>
                        <TableCell>Sepak Bola</TableCell>
                        <TableCell>
                            <select
                                name="bola"
                                style={{
                                    width: "100%",
                                    boxSizing: "border-box",
                                }}
                                value={formEskul.bola}
                                onChange={onChangeEskul}>
                                <option value="">Select</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                                <option value="E">E</option>
                            </select>
                        </TableCell>
                    </TableRow>
                    <TableRow
                        sx={{
                            bgcolor: "rgba(145, 158, 171, 0.16)",
                        }}>
                        <TableCell>10</TableCell>
                        <TableCell>Hadroh</TableCell>
                        <TableCell>
                            <select
                                name="hadroh"
                                style={{
                                    width: "100%",
                                    boxSizing: "border-box",
                                }}
                                value={formEskul.hadroh}
                                onChange={onChangeEskul}>
                                <option value="">Select</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                                <option value="E">E</option>
                            </select>
                        </TableCell>
                    </TableRow>
                    <TableRow
                        sx={{
                            bgcolor: "rgba(145, 158, 171, 0.16)",
                        }}>
                        <TableCell>11</TableCell>
                        <TableCell>Tilawah</TableCell>
                        <TableCell>
                            <select
                                name="tilawah"
                                style={{
                                    width: "100%",
                                    boxSizing: "border-box",
                                }}
                                value={formEskul.tilawah}
                                onChange={onChangeEskul}>
                                <option value="">Select</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                                <option value="E">E</option>
                            </select>
                        </TableCell>
                    </TableRow>
                    <TableRow
                        sx={{
                            bgcolor: "rgba(145, 158, 171, 0.16)",
                        }}>
                        <TableCell>12</TableCell>
                        <TableCell>Paduan Suara dan Seni Sejarah</TableCell>
                        <TableCell>
                            <select
                                name="paduan"
                                style={{
                                    width: "100%",
                                    boxSizing: "border-box",
                                }}
                                value={formEskul.paduan}
                                onChange={onChangeEskul}>
                                <option value="">Select</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                                <option value="E">E</option>
                            </select>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <h1>D. Saran Saran</h1>
            <textarea
                onChange={onChangeSaran}
                value={formSaran}
                className="form-control"
                style={{
                    marginTop: "2em",
                    marginBottom: "2em",
                    boxSizing: "border-box",
                }}
            />
            <h1>G. Prestasi</h1>
            <Table style={{ marginTop: "2em", marginBottom: "2em" }}>
                <TableHead sx={{ bgcolor: "white" }}>
                    <TableCell>No</TableCell>
                    <TableCell>Jenis</TableCell>
                    <TableCell sx={{ width: "75%" }}>Keterangan</TableCell>
                </TableHead>
                <TableBody>
                    <TableRow
                        sx={{
                            bgcolor: "rgba(145, 158, 171, 0.16)",
                        }}>
                        <TableCell>1</TableCell>
                        <TableCell>Kesenian</TableCell>
                        <TableCell>
                            <input
                                className="raport-input"
                                onChange={onChangePrestasi}
                                value={formPrestasi.kesenian}
                                name="kesenian"
                                style={{
                                    boxSizing: "border-box",
                                }}
                            />
                        </TableCell>
                    </TableRow>
                    <TableRow
                        sx={{
                            bgcolor: "rgba(145, 158, 171, 0.16)",
                        }}>
                        <TableCell>2</TableCell>
                        <TableCell>Olah Raga</TableCell>
                        <TableCell>
                            <input
                                className="raport-input"
                                onChange={onChangePrestasi}
                                value={formPrestasi.olahRaga}
                                name="olahRaga"
                                style={{
                                    boxSizing: "border-box",
                                }}
                            />
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <h1>H. Kehadiran</h1>
            <Table style={{ marginTop: "2em", marginBottom: "2em" }}>
                <TableHead sx={{ bgcolor: "white" }}>
                    <TableCell>No</TableCell>
                    <TableCell>Jenis</TableCell>
                    <TableCell sx={{ width: "75%" }}>
                        Keterangan (hari)
                    </TableCell>
                </TableHead>
                <TableBody>
                    <TableRow
                        sx={{
                            bgcolor: "rgba(145, 158, 171, 0.16)",
                        }}>
                        <TableCell>1</TableCell>
                        <TableCell>Sakit</TableCell>
                        <TableCell>
                            <input
                                className="raport-input"
                                onChange={onChangeKehadiran}
                                value={formKehadiran.sakit}
                                name="sakit"
                                type="number"
                                style={{
                                    boxSizing: "border-box",
                                }}
                                min="0"
                            />
                        </TableCell>
                    </TableRow>
                    <TableRow
                        sx={{
                            bgcolor: "rgba(145, 158, 171, 0.16)",
                        }}>
                        <TableCell>2</TableCell>
                        <TableCell>Ijin</TableCell>
                        <TableCell>
                            <input
                                className="raport-input"
                                onChange={onChangeKehadiran}
                                value={formKehadiran.ijin}
                                name="ijin"
                                type="number"
                                style={{
                                    boxSizing: "border-box",
                                }}
                                min="0"
                            />
                        </TableCell>
                    </TableRow>
                    <TableRow
                        sx={{
                            bgcolor: "rgba(145, 158, 171, 0.16)",
                        }}>
                        <TableCell>3</TableCell>
                        <TableCell>Tanpa Keterangan</TableCell>
                        <TableCell>
                            <input
                                className="raport-input"
                                onChange={onChangeKehadiran}
                                value={formKehadiran.tanpaKeterangan}
                                type="number"
                                name="tanpaKeterangan"
                                style={{
                                    boxSizing: "border-box",
                                }}
                                min="0"
                            />
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <center style={{ marginTop: "2em" }}>
                <button
                    type="submit"
                    className="btn-submit"
                    style={{
                        boxSizing: "border-box",
                    }}>
                    Simpan
                </button>
            </center>
        </form>
    );
};

export default EditRaport;
