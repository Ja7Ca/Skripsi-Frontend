import {
    Button,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from "@mui/material";

import _ from "lodash";

import { useGetSiswaQuery } from "../../store/features/siswa/siswaSlice";
import { Link } from "react-router-dom";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Download } from "./print/pdf-index";

const Raport = () => {
    const { data: siswa, isSuccess } = useGetSiswaQuery(
        {},
        { refetchOnMountOrArgChange: true }
    );

    return (
        <>
            <Table>
                <TableHead>
                    <TableRow sx={{ bgcolor: "white" }}>
                        <TableCell>NO</TableCell>
                        <TableCell>Nama</TableCell>
                        <TableCell>NISN</TableCell>
                        <TableCell>Raport Semester 1</TableCell>
                        <TableCell>Raport Semester 2</TableCell>
                        {/* <TableCell></TableCell> */}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {!_.isEmpty(siswa) &&
                        siswa.map((el, index) => (
                            <TableRow
                                key={index}
                                sx={{
                                    bgcolor:
                                        index % 2 === 0
                                            ? "rgba(145, 158, 171, 0.16)"
                                            : "rgba(145, 158, 171, 0.16)",
                                }}>
                                <TableCell>{index + 1}</TableCell>
                                <TableCell>{el.nama}</TableCell>
                                <TableCell>{el.nisn}</TableCell>
                                <TableCell>
                                    <Link to={`/dashboard/print/${el.nisn}/1`}>
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M3 3V21H21V3H3ZM19 19H5V7H19V19ZM13.5 13C13.5 13.83 12.83 14.5 12 14.5C11.17 14.5 10.5 13.83 10.5 13C10.5 12.17 11.17 11.5 12 11.5C12.83 11.5 13.5 12.17 13.5 13ZM12 9C9.27 9 6.94 10.66 6 13C6.94 15.34 9.27 17 12 17C14.73 17 17.06 15.34 18 13C17.06 10.66 14.73 9 12 9ZM12 15.5C11.337 15.5 10.7011 15.2366 10.2322 14.7678C9.76339 14.2989 9.5 13.663 9.5 13C9.5 12.337 9.76339 11.7011 10.2322 11.2322C10.7011 10.7634 11.337 10.5 12 10.5C12.663 10.5 13.2989 10.7634 13.7678 11.2322C14.2366 11.7011 14.5 12.337 14.5 13C14.5 13.663 14.2366 14.2989 13.7678 14.7678C13.2989 15.2366 12.663 15.5 12 15.5Z"
                                                fill="black"
                                            />
                                        </svg>
                                    </Link>
                                </TableCell>
                                <TableCell>
                                    <Link to={`/dashboard/print/${el.nisn}/2`}>
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M3 3V21H21V3H3ZM19 19H5V7H19V19ZM13.5 13C13.5 13.83 12.83 14.5 12 14.5C11.17 14.5 10.5 13.83 10.5 13C10.5 12.17 11.17 11.5 12 11.5C12.83 11.5 13.5 12.17 13.5 13ZM12 9C9.27 9 6.94 10.66 6 13C6.94 15.34 9.27 17 12 17C14.73 17 17.06 15.34 18 13C17.06 10.66 14.73 9 12 9ZM12 15.5C11.337 15.5 10.7011 15.2366 10.2322 14.7678C9.76339 14.2989 9.5 13.663 9.5 13C9.5 12.337 9.76339 11.7011 10.2322 11.2322C10.7011 10.7634 11.337 10.5 12 10.5C12.663 10.5 13.2989 10.7634 13.7678 11.2322C14.2366 11.7011 14.5 12.337 14.5 13C14.5 13.663 14.2366 14.2989 13.7678 14.7678C13.2989 15.2366 12.663 15.5 12 15.5Z"
                                                fill="black"
                                            />
                                        </svg>
                                    </Link>
                                </TableCell>
                                {/* <TableCell>
                                    <Button variant="contained" size="small">
                                        <PDFDownloadLink
                                            document={
                                                <Download
                                                    nama={el.nama}
                                                    nisn={el.nisn}
                                                    nis={el.nis}
                                                    kelas={el.kelas.nama}
                                                />
                                            }
                                            fileName={`${el.nama}.pdf`}
                                            style={{
                                                textDecoration: "none",
                                                color: "white",
                                                textTransform: "none",
                                            }}>
                                            {({ blob, url, loading, error }) =>
                                                loading
                                                    ? "Memuat document..."
                                                    : "Unduh Raport"
                                            }
                                        </PDFDownloadLink>
                                    </Button>
                                </TableCell> */}
                            </TableRow>
                        ))}
                </TableBody>
            </Table>
            <></>
        </>
    );
};

export default Raport;
