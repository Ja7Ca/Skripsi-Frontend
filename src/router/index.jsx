import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import PrivateRoute from "./PrivateRoute";
import Home from "../pages/Dashboard/Home";
import Sidebar from "../component/Sidebar";
import Login from "../pages/Login/Login";
import ForgotPassword from "../pages/Login/ForgotPassword";
import Murid from "../pages/Dashboard/Murid";
import AddMurid from "../pages/Dashboard/AddMurid";
import EditMurid from "../pages/Dashboard/EditMurid";
import Raport from "../pages/Dashboard/Raport";
import EditRaport from "../pages/Raport/EditRaport";
import { Preview } from "../pages/Dashboard/print/pdf-index";
import ChangePassForgot from "../pages/Login/ChangePassForgot";
import EditProfile from "../pages/Dashboard/Profile/EditProfile";
import User from "../pages/Dashboard/User";
import AddUser from "../pages/Dashboard/AddUser";
import EditUser from "../pages/Dashboard/EditUser";

export default function SetupRouter() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<ProtectedRoute />}>
                        <Route path="/" element={<Login />} />
                        <Route path="/forgot" element={<ForgotPassword />} />
                        <Route
                            path="/forgot/:key"
                            element={<ChangePassForgot />}
                        />
                    </Route>
                    <Route path="/" element={<PrivateRoute />}>
                        <Route path="/" element={<Sidebar />}>
                            <Route path="/dashboard" element={<Home />} />
                            <Route path="/dashboard/user" element={<User />} />
                            <Route
                                path="/dashboard/user/add"
                                element={<AddUser />}
                            />
                            <Route
                                path="/dashboard/user/:username"
                                element={<EditUser />}
                            />
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
                                path="/dashboard/print/:nisn/:semester"
                                element={<Preview />}
                            />
                            <Route
                                path="/raport/:nisn"
                                element={<EditRaport />}
                            />
                            <Route
                                path="/dashboard/profile"
                                element={<EditProfile />}
                            />
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
