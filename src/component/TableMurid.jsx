import {
    Popover,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";

import "../assets/css/table.css";

import {
    useGetSiswaQuery,
    useDeleteSiswaMutation,
} from "../store/features/siswa/siswaSlice";

import _ from "lodash";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const TableMurid = () => {
    const { data: siswa, isSuccess } = useGetSiswaQuery(
        {},
        { refetchOnMountOrArgChange: true }
    );

    const [hapus] = useDeleteSiswaMutation();

    const [open, setOpen] = useState(null);
    const handleOpenMenu = (event) => {
        setOpen(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setOpen(null);
    };

    const handleDelete = (e) => {
        e.preventDefault();
    };

    return (
        <Table>
            <TableHead>
                <TableRow sx={{ bgcolor: "white" }}>
                    <TableCell>NO</TableCell>
                    <TableCell>Nama</TableCell>
                    <TableCell>NISN</TableCell>
                    <TableCell>NIS</TableCell>
                    <TableCell>Kelas</TableCell>
                    <TableCell>Tempat</TableCell>
                    <TableCell>Tanggal Lahir</TableCell>
                    <TableCell>Raport</TableCell>
                    <TableCell>Aksi</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {!_.isEmpty(siswa)
                    ? siswa.map((el, index) => (
                          <TableRow
                              sx={{
                                  bgcolor:
                                      index % 2 == 0
                                          ? "rgba(145, 158, 171, 0.16)"
                                          : "rgba(145, 158, 171, 0.16)",
                              }}>
                              <TableCell>{index + 1}</TableCell>
                              <TableCell>{el.nama}</TableCell>
                              <TableCell>{el.nisn}</TableCell>
                              <TableCell>{el.nis}</TableCell>
                              <TableCell>{el.kelas.rombel}</TableCell>
                              <TableCell>{el.tempatLahir}</TableCell>
                              <TableCell>{el.tanggalLahir}</TableCell>
                              <TableCell>
                                  <Link to={`/raport/${el.nisn}`}>
                                      <svg
                                          width="22"
                                          height="22"
                                          viewBox="0 0 22 22"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg">
                                          <path
                                              d="M19.25 4.58333C18.2325 4.2625 17.1142 4.125 16.0417 4.125C14.2542 4.125 12.3292 4.49167 11 5.5C9.67084 4.49167 7.74584 4.125 5.95834 4.125C4.17083 4.125 2.24583 4.49167 0.916668 5.5V18.9292C0.916668 19.1583 1.14583 19.3875 1.375 19.3875C1.46667 19.3875 1.5125 19.3417 1.60417 19.3417C2.84167 18.7458 4.62917 18.3333 5.95834 18.3333C7.74584 18.3333 9.67084 18.7 11 19.7083C12.2375 18.9292 14.4833 18.3333 16.0417 18.3333C17.5542 18.3333 19.1125 18.6083 20.3958 19.2958C20.4875 19.3417 20.5333 19.3417 20.625 19.3417C20.8542 19.3417 21.0833 19.1125 21.0833 18.8833V5.5C20.5333 5.0875 19.9375 4.8125 19.25 4.58333ZM19.25 16.9583C18.2417 16.6375 17.1417 16.5 16.0417 16.5C14.4833 16.5 12.2375 17.0958 11 17.875V7.33333C12.2375 6.55417 14.4833 5.95833 16.0417 5.95833C17.1417 5.95833 18.2417 6.09583 19.25 6.41667V16.9583Z"
                                              fill="currentColor"
                                          />
                                          <path
                                              d="M16.0417 9.625C16.8483 9.625 17.6275 9.7075 18.3333 9.86333V8.47C17.6092 8.3325 16.83 8.25 16.0417 8.25C14.4833 8.25 13.0717 8.51583 11.9167 9.01083V10.5325C12.9525 9.94583 14.3917 9.625 16.0417 9.625Z"
                                              fill="currentColor"
                                          />
                                          <path
                                              d="M11.9167 11.4492V12.9708C12.9525 12.3842 14.3917 12.0633 16.0417 12.0633C16.8483 12.0633 17.6275 12.1458 18.3333 12.3017V10.9083C17.6092 10.7708 16.83 10.6883 16.0417 10.6883C14.4833 10.6883 13.0717 10.9633 11.9167 11.4492Z"
                                              fill="currentColor"
                                          />
                                          <path
                                              d="M16.0417 13.1358C14.4833 13.1358 13.0717 13.4017 11.9167 13.8967V15.4183C12.9525 14.8317 14.3917 14.5108 16.0417 14.5108C16.8483 14.5108 17.6275 14.5933 18.3333 14.7492V13.3558C17.6092 13.2092 16.83 13.1358 16.0417 13.1358Z"
                                              fill="currentColor"
                                          />
                                      </svg>
                                  </Link>
                              </TableCell>
                              <TableCell>
                                  <button
                                      onClick={handleOpenMenu}
                                      className="btn-transparent">
                                      Open Menu
                                  </button>
                                  <Popover
                                      open={Boolean(open)}
                                      anchorEl={open}
                                      onClose={handleCloseMenu}
                                      anchorOrigin={{
                                          vertical: "top",
                                          horizontal: "left",
                                      }}
                                      transformOrigin={{
                                          vertical: "top",
                                          horizontal: "right",
                                      }}>
                                      <div className="wrap-menu-aksi">
                                          <Link
                                              to={`/dashboard/murid/${el.nisn}`}>
                                              <button
                                                  className="btn-edit"
                                                  style={{ width: "100%" }}>
                                                  Edit
                                              </button>
                                          </Link>

                                          <button
                                              className="btn-delete"
                                              onClick={() => {
                                                  handleCloseMenu();
                                                  Swal.fire({
                                                      icon: "warning",
                                                      title: `Yakin untuk menghapus ${el.nama}`,
                                                      showCancelButton: true,
                                                      confirmButtonText:
                                                          "Delete",
                                                      confirmButtonColor: "red",
                                                  }).then((result) => {
                                                      if (result.isConfirmed) {
                                                          hapus(el.nisn)
                                                              .unwrap()
                                                              .then(
                                                                  (result) => {
                                                                      Swal.fire(
                                                                          {
                                                                              icon: "success",
                                                                              title: `Berhasil Menghapus`,
                                                                              confirmButtonText:
                                                                                  "Saved",
                                                                          }
                                                                      ).then(
                                                                          (
                                                                              result
                                                                          ) => {
                                                                              if (
                                                                                  result.isConfirmed
                                                                              ) {
                                                                                  window.location.reload(
                                                                                      false
                                                                                  );
                                                                              }
                                                                          }
                                                                      );
                                                                  }
                                                              );
                                                      }
                                                  });
                                              }}>
                                              Hapus
                                          </button>
                                      </div>
                                  </Popover>
                              </TableCell>
                          </TableRow>
                      ))
                    : ""}
            </TableBody>
        </Table>
    );
};

export default TableMurid;
