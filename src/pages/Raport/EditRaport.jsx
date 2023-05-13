import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from "@mui/material";
import { useState } from "react";

import {
    useGetNilaiQuery,
    useEditNilaiMutation,
} from "../../store/features/nilai/nilaiSlice";
import { useNavigate, useParams } from "react-router";
import Swal from "sweetalert2";

const EditRaport = () => {
    const navigate = useNavigate();
    const { nisn } = useParams();
    console.log(nisn);
    const [loading, setLoading] = useState(true);
    const [edit] = useEditNilaiMutation();
    const [form, setForm] = useState({
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

    const { data: nilai, isSuccess } = useGetNilaiQuery(nisn, {
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
        if (Object.keys(form).length == 1) {
            setForm(semNilai);
            setLoading(false);
        }
    }

    const onChange = (e) => {
        e.preventDefault();
        if (e.target.value == "") {
            semNilai[e.target.attributes.getNamedItem("mapel").value][
                e.target.name
            ] = 0;
            setForm((prevState) => ({
                ...prevState,
                [e.target.attributes.getNamedItem("mapel").value]: {
                    ...prevState[
                        e.target.attributes.getNamedItem("mapel").value
                    ],
                    [e.target.name]: 0,
                },
            }));
        } else if (e.target.value <= 100 && e.target.value >= 0) {
            semNilai[e.target.attributes.getNamedItem("mapel").value][
                e.target.name
            ] = +e.target.value;
            setForm((prevState) => ({
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
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                edit({ nilai: form, nisn })
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
    };
    return (
        <form onSubmit={onSubmit}>
            <center>
                <h1>{nilai ? nilai[0].siswa.nama : ""}</h1>
            </center>
            <Table style={{ marginTop: "2em" }}>
                <TableHead sx={{ bgcolor: "white" }}>
                    <TableCell>No</TableCell>
                    <TableCell>Mapel</TableCell>
                    <TableCell>KI 3 Smst 1</TableCell>
                    <TableCell>KI 4 Smst 1</TableCell>
                    <TableCell>KI 3 Smst 2</TableCell>
                    <TableCell>KI 4 Smst 2</TableCell>
                </TableHead>
                {/* {Object.keys(form).length > 1 ? (
                    <TableBody>
                        <TableRow
                            sx={{
                                bgcolor: "rgba(145, 158, 171, 0.16)",
                            }}>
                            <TableCell>1</TableCell>
                            <TableCell>{form.ipa.mapel}</TableCell>
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
                                    mapel="ipa"
                                    name="ki3_1"
                                    value={form.ipa.ki3_1}
                                    onChange={onChange}></input>
                                {!form.ipa.ki3_1 ? <span>/100</span> : ""}
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
                                    mapel="ipa"
                                    name="ki4_1"
                                    value={form.ipa.ki4_1}
                                    onChange={onChange}></input>
                                {!form.ipa.ki4_1 ? <span>/100</span> : ""}
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
                                    mapel="ipa"
                                    name="ki3_2"
                                    value={form.ipa.ki3_2}
                                    onChange={onChange}></input>
                                {!form.ipa.ki3_2 ? <span>/100</span> : ""}
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
                                    mapel="ipa"
                                    name="ki4_2"
                                    value={form.ipa.ki4_2}
                                    onChange={onChange}></input>
                                {!form.ipa.ki4_2 ? <span>/100</span> : ""}
                            </TableCell>
                        </TableRow>
                        <TableRow
                            sx={{
                                bgcolor: "rgba(145, 158, 171, 0.16)",
                            }}>
                            <TableCell>1</TableCell>
                            <TableCell>{form.ips.mapel}</TableCell>
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
                                    mapel="ips"
                                    name="ki3_1"
                                    value={form.ips.ki3_1}
                                    onChange={onChange}></input>
                                {!form.ips.ki3_1 ? <span>/100</span> : ""}
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
                                    mapel="ips"
                                    name="ki4_1"
                                    value={form.ips.ki4_1}
                                    onChange={onChange}></input>
                                {!form.ips.ki4_1 ? <span>/100</span> : ""}
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
                                    mapel="ips"
                                    name="ki3_2"
                                    value={form.ips.ki3_2}
                                    onChange={onChange}></input>
                                {!form.ips.ki3_2 ? <span>/100</span> : ""}
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
                                    mapel="ips"
                                    name="ki4_2"
                                    value={form.ips.ki4_2}
                                    onChange={onChange}></input>
                                {!form.ips.ki4_2 ? <span>/100</span> : ""}
                            </TableCell>
                        </TableRow>
                    </TableBody>
                ) : (
                    ""
                )} */}
                <TableBody>
                    {Object.keys(form).length >= 1
                        ? Object.keys(form).map((el, index) => (
                              <TableRow
                                  sx={{
                                      bgcolor:
                                          index % 2 == 0
                                              ? "rgba(145, 158, 171, 0.16)"
                                              : "rgba(145, 158, 171, 0.16)",
                                  }}>
                                  {console.log(form[el])}
                                  <TableCell>{index + 1}</TableCell>
                                  <TableCell>{form[el].mapel}</TableCell>
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
                                          mapel={form[el].alias}
                                          name="ki3_1"
                                          value={form[el].ki3_1}
                                          onChange={onChange}></input>
                                      {!form[el].ki3_1 ? <span>/100</span> : ""}
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
                                          mapel={form[el].alias}
                                          name="ki4_1"
                                          value={form[el].ki4_1}
                                          onChange={onChange}></input>
                                      {!form[el].ki4_1 ? <span>/100</span> : ""}
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
                                          mapel={form[el].alias}
                                          name="ki3_2"
                                          value={form[el].ki3_2}
                                          onChange={onChange}></input>
                                      {!form[el].ki3_2 ? <span>/100</span> : ""}
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
                                          mapel={form[el].alias}
                                          name="ki4_2"
                                          value={form[el].ki4_2}
                                          onChange={onChange}></input>
                                      {!form[el].ki4_2 ? <span>/100</span> : ""}
                                  </TableCell>
                              </TableRow>
                          ))
                        : ""}
                </TableBody>
            </Table>
            <center style={{ marginTop: "2em" }}>
                <button type="submit" className="btn-submit">
                    Simpan
                </button>
            </center>
        </form>
    );
};

export default EditRaport;
