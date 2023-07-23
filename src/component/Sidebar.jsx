import sideLogo from "../assets/img/logo.png";

import "../assets/css/sidebar.css";
import { Link, Outlet } from "react-router-dom";
import Auth from "../utils/Auth";
import { useEffect, useState } from "react";
import { useWhoamiQuery } from "../store/features/user/userSlice";

const Sidebar = () => {
    const [active, setActive] = useState("");
    const { data: user, isSuccess } = useWhoamiQuery();
    console.log(user);
    useEffect(() => {}, [user]);

    if (user) {
        return (
            <div className="wrap-main">
                <div className="sidebar">
                    <div className="side-logo">
                        <img src={sideLogo} alt="" />
                        <p className="logo-name">E-Raport</p>
                    </div>
                    <div className="side-user">
                        <svg
                            width="34"
                            height="34"
                            viewBox="0 0 34 34"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M17 29C12.8333 29 9.15 26.8667 7 23.6667C7.05 20.3333 13.6667 18.5 17 18.5C20.3333 18.5 26.95 20.3333 27 23.6667C25.8981 25.3073 24.4098 26.6519 22.6659 27.582C20.9221 28.512 18.9763 28.999 17 29ZM17 5.33333C18.3261 5.33333 19.5979 5.86011 20.5355 6.79779C21.4732 7.73548 22 9.00725 22 10.3333C22 11.6594 21.4732 12.9312 20.5355 13.8689C19.5979 14.8065 18.3261 15.3333 17 15.3333C15.6739 15.3333 14.4021 14.8065 13.4645 13.8689C12.5268 12.9312 12 11.6594 12 10.3333C12 9.00725 12.5268 7.73548 13.4645 6.79779C14.4021 5.86011 15.6739 5.33333 17 5.33333ZM17 0.333328C14.8113 0.333328 12.644 0.764424 10.6219 1.602C8.59985 2.43958 6.76253 3.66724 5.21489 5.21488C2.08928 8.34049 0.333332 12.5797 0.333332 17C0.333332 21.4203 2.08928 25.6595 5.21489 28.7851C6.76253 30.3328 8.59985 31.5604 10.6219 32.398C12.644 33.2356 14.8113 33.6667 17 33.6667C21.4203 33.6667 25.6595 31.9107 28.7851 28.7851C31.9107 25.6595 33.6667 21.4203 33.6667 17C33.6667 7.78333 26.1667 0.333328 17 0.333328Z"
                                fill="currentColor"
                            />
                        </svg>
                        <p className="side-user-name">
                            {user ? user.nama : ""}
                        </p>
                    </div>
                    <div className="side-menu">
                        <Link
                            className={
                                active === "" ? "side-link active" : "side-link"
                            }
                            to={"/dashboard"}
                            onClick={() => setActive("")}>
                            <svg
                                width="22"
                                height="22"
                                viewBox="0 0 22 22"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M2.75 12.2986H10.3889V2.75H2.75V12.2986ZM2.75 19.9375H10.3889V14.2083H2.75V19.9375ZM12.2986 19.9375H19.9375V10.3889H12.2986V19.9375ZM12.2986 2.75V8.47917H19.9375V2.75H12.2986Z"
                                    fill="currentColor"
                                />
                            </svg>
                            Dashboard
                        </Link>
                        {user.role == "admin" ? (
                            <Link
                                className={
                                    active === "User"
                                        ? "side-link active"
                                        : "side-link"
                                }
                                to={"/dashboard/user"}
                                onClick={() => setActive("User")}>
                                <svg
                                    width="21"
                                    height="21"
                                    viewBox="0 0 21 21"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M10.7585 10.2889C12.6001 10.2889 14.0918 8.79719 14.0918 6.95553C14.0918 5.11386 12.6001 3.62219 10.7585 3.62219C8.9168 3.62219 7.42513 5.11386 7.42513 6.95553C7.42513 8.79719 8.9168 10.2889 10.7585 10.2889ZM10.7585 11.9555C8.53346 11.9555 4.0918 13.0722 4.0918 15.2889V16.9555H17.4251V15.2889C17.4251 13.0722 12.9835 11.9555 10.7585 11.9555Z"
                                        fill="currentColor"
                                    />
                                </svg>
                                User
                            </Link>
                        ) : (
                            <Link
                                className={
                                    active === "murid"
                                        ? "side-link active"
                                        : "side-link"
                                }
                                to={"/dashboard/murid"}
                                onClick={() => setActive("murid")}>
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M19.3225 7.40583C19.3225 3.85833 16.4533 0.989166 12.9058 0.989166C9.35833 0.989166 6.48917 3.85833 6.48917 7.40583C6.48917 10.5867 8.79917 13.2175 11.8333 13.7217V17.3333H4.5V14.5833H5.41667V10.9167C5.41667 10.4125 5.00417 10 4.5 10H1.75C1.24583 10 0.833332 10.4125 0.833332 10.9167V14.5833H1.75V19.1667H16.4167V17.3333H13.6667V13.7767C16.8475 13.4008 19.3225 10.6967 19.3225 7.40583ZM3.125 9.08333C3.88583 9.08333 4.5 8.46917 4.5 7.70833C4.5 6.9475 3.88583 6.33333 3.125 6.33333C2.36417 6.33333 1.75 6.9475 1.75 7.70833C1.75 8.46917 2.36417 9.08333 3.125 9.08333Z"
                                        fill="currentColor"
                                    />
                                </svg>
                                Murid
                            </Link>
                        )}
                        {user.role == "admin" ? (
                            ""
                        ) : (
                            <Link
                                className={
                                    active === "raport"
                                        ? "side-link active"
                                        : "side-link"
                                }
                                onClick={() => {
                                    setActive("raport");
                                }}
                                to={"/dashboard/raport"}>
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
                                Raport
                            </Link>
                        )}
                        {/* <Link
                className={active === "print" ? "side-link active" : "side-link"}
                onClick={() => {
                  setActive("print");
                }}
                to={"/dashboard/print"}
              >
                <svg
                  width="20"
                  height="18"
                  viewBox="0 0 20 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.4167 5.33333H3.58333C2.06167 5.33333 0.833332 6.56167 0.833332 8.08333V13.5833H4.5V17.25H15.5V13.5833H19.1667V8.08333C19.1667 6.56167 17.9383 5.33333 16.4167 5.33333ZM13.6667 15.4167H6.33333V10.8333H13.6667V15.4167ZM16.4167 9C15.9125 9 15.5 8.5875 15.5 8.08333C15.5 7.57917 15.9125 7.16667 16.4167 7.16667C16.9208 7.16667 17.3333 7.57917 17.3333 8.08333C17.3333 8.5875 16.9208 9 16.4167 9ZM15.5 0.75H4.5V4.41667H15.5V0.75Z"
                    fill="currentColor"
                  />
                </svg>
                Print
              </Link> */}
                        <Link
                            className={
                                active === "profile"
                                    ? "side-link active"
                                    : "side-link"
                            }
                            onClick={() => {
                                setActive("profile");
                            }}
                            to={"/dashboard/profile"}>
                            <svg
                                width="22"
                                height="22"
                                viewBox="0 0 22 22"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M5.5 15.5833C5.5 13.75 9.16667 12.7417 11 12.7417C12.8333 12.7417 16.5 13.75 16.5 15.5833V16.5H5.5M13.75 8.25C13.75 8.97935 13.4603 9.67882 12.9445 10.1945C12.4288 10.7103 11.7293 11 11 11C10.2707 11 9.57118 10.7103 9.05546 10.1945C8.53973 9.67882 8.25 8.97935 8.25 8.25C8.25 7.52065 8.53973 6.82118 9.05546 6.30546C9.57118 5.78973 10.2707 5.5 11 5.5C11.7293 5.5 12.4288 5.78973 12.9445 6.30546C13.4603 6.82118 13.75 7.52065 13.75 8.25ZM2.75 4.58333V17.4167C2.75 17.9029 2.94315 18.3692 3.28697 18.713C3.63079 19.0568 4.0971 19.25 4.58333 19.25H17.4167C17.9029 19.25 18.3692 19.0568 18.713 18.713C19.0568 18.3692 19.25 17.9029 19.25 17.4167V4.58333C19.25 4.0971 19.0568 3.63079 18.713 3.28697C18.3692 2.94315 17.9029 2.75 17.4167 2.75H4.58333C4.0971 2.75 3.63079 2.94315 3.28697 3.28697C2.94315 3.63079 2.75 4.0971 2.75 4.58333Z"
                                    fill="currentColor"
                                />
                            </svg>
                            Profile
                        </Link>
                        <Link
                            className="side-link"
                            to={"/"}
                            onClick={Auth.signOut}>
                            <svg
                                width="23"
                                height="23"
                                viewBox="0 0 23 23"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M16.1299 6.47973L14.8374 7.77223L17.2024 10.1464H7.87988V11.9797H17.2024L14.8374 14.3447L16.1299 15.6464L20.7132 11.0631L16.1299 6.47973ZM4.21322 4.6464H11.5465V2.81306H4.21322C3.20488 2.81306 2.37988 3.63806 2.37988 4.6464V17.4797C2.37988 18.4881 3.20488 19.3131 4.21322 19.3131H11.5465V17.4797H4.21322V4.6464Z"
                                    fill="red"
                                />
                            </svg>
                            Log Out
                        </Link>
                    </div>
                </div>
                <section className="wrap-content">
                    <div className="container">
                        <Outlet />
                    </div>
                </section>
            </div>
        );
    }
};

export default Sidebar;
