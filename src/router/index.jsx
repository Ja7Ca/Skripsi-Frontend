import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import PrivateRoute from "./PrivateRoute";
import Home from "../pages/Dashboard/Home";
import Sidebar from "../component/Sidebar";
import Login from "../pages/Login/Login";
import Murid from "../pages/Dashboard/Murid";
import AddMurid from "../pages/Dashboard/AddMurid";
import EditMurid from "../pages/Dashboard/EditMurid";
import Raport from "../pages/Dashboard/Raport";
import EditRaport from "../pages/Raport/EditRaport";

export default function SetupRouter() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<ProtectedRoute />}>
                        <Route path="/" element={<Login />} />
                    </Route>
                    <Route path="/" element={<PrivateRoute />}>
                        <Route path="/" element={<Sidebar />}>
                            <Route path="/dashboard" element={<Home />} />
                            <Route
                                path="/dashboard/murid"
                                element={<Murid />}
                            />
                            <Route
                                path="/dashboard/murid/:nisn"
                                element={<EditMurid />}
                            />
                            <Route
                                path="/dashboard/murid/add"
                                element={<AddMurid />}
                            />
                            <Route
                                path="/dashboard/raport"
                                element={<Raport />}
                            />
                            <Route
                                path="/raport/:nisn"
                                element={<EditRaport />}
                            />
                            <Route path="/profile" element={""} />
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
