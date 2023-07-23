import "../../assets/css/index.css";

import { Link } from "react-router-dom";
import ButtonLink from "../../component/ButtonLink";

import { useGetDashboardQuery } from "../../store/features/dashboard/dashboardSlice";
import { useWhoamiQuery } from "../../store/features/user/userSlice";

const Home = () => {
    const { data: dashboard, isSuccess } = useGetDashboardQuery(
        {},
        { refetchOnMountOrArgChange: true }
    );
    const { data: user } = useWhoamiQuery();
    console.log(dashboard);
    return (
        <div className="container">
            {user.role == "admin" ? (
                <div className="wrap-btn-link">
                    <ButtonLink
                        bgColor="red"
                        color="white"
                        title="User"
                        count={dashboard ? dashboard.user : ""}
                        link="/dashboard/user"
                    />
                </div>
            ) : (
                <div className="wrap-btn-link">
                    <ButtonLink
                        bgColor="red"
                        color="white"
                        title="Murid"
                        count={dashboard ? dashboard.siswa : ""}
                        link="/dashboard/murid"
                    />
                    <ButtonLink
                        bgColor="red"
                        color="white"
                        title="Kelas"
                        count={dashboard ? dashboard.dataKelas.rombel : ""}
                        link="/"
                    />
                    {/* <ButtonLink
                        bgColor="red"
                        color="white"
                        title="Nilai"
                        count="12"
                        link="/"
                    />
                    <ButtonLink
                        bgColor="red"
                        color="white"
                        title="Raport"
                        count="1"
                        link="/"
                    /> */}
                </div>
            )}
        </div>
    );
};

export default Home;
