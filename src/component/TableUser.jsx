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
    useGetAllUserQuery,
    useDeleteUserMutation,
} from "../store/features/user/userSlice";

import _ from "lodash";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const TableUser = () => {
    const { data: user, isSuccess } = useGetAllUserQuery(
        {},
        { refetchOnMountOrArgChange: true }
    );

    const [hapus] = useDeleteUserMutation();

    const [open, setOpen] = useState(null);

    const handleCloseMenu = () => {
        setOpen(null);
    };

    return (
        <Table>
            <TableHead>
                <TableRow sx={{ bgcolor: "white" }}>
                    <TableCell>NO</TableCell>
                    <TableCell>Nama</TableCell>
                    <TableCell>NIP</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Kelas</TableCell>
                    <TableCell>Aksi</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {!_.isEmpty(user)
                    ? user.data.map((el, index) => (
                          <TableRow
                              sx={{
                                  bgcolor:
                                      index % 2 == 0
                                          ? "rgba(145, 158, 171, 0.16)"
                                          : "rgba(145, 158, 171, 0.16)",
                              }}>
                              <TableCell>{index + 1}</TableCell>
                              <TableCell>{el.nama}</TableCell>
                              <TableCell>{el.nip}</TableCell>
                              <TableCell>{el.username}</TableCell>
                              <TableCell>{el.email}</TableCell>
                              <TableCell>
                                  {el.wali[0] ? el.wali[0].rombel : ""}
                              </TableCell>
                              <TableCell>
                                  <div className="wrap-menu-aksi">
                                      <Link
                                          to={`/dashboard/user/${el.username}`}>
                                          <button className="btn-edit">
                                              Ganti Password
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
                                                  confirmButtonText: "Delete",
                                                  confirmButtonColor: "red",
                                              }).then((result) => {
                                                  if (result.isConfirmed) {
                                                      hapus(el.id)
                                                          .unwrap()
                                                          .then((result) => {
                                                              Swal.fire({
                                                                  icon: "success",
                                                                  title: `Berhasil Menghapus`,
                                                                  confirmButtonText:
                                                                      "Saved",
                                                              }).then(
                                                                  (result) => {
                                                                      if (
                                                                          result.isConfirmed
                                                                      ) {
                                                                          window.location.reload(
                                                                              false
                                                                          );
                                                                      }
                                                                  }
                                                              );
                                                          });
                                                  }
                                              });
                                          }}>
                                          Hapus
                                      </button>
                                  </div>
                              </TableCell>
                          </TableRow>
                      ))
                    : ""}
            </TableBody>
        </Table>
    );
};

export default TableUser;
