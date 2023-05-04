import "../../assets/css/index.css";

import { Link } from "react-router-dom";
import ButtonLink from "../../component/ButtonLink";

import { useGetDashboardQuery } from "../../store/features/dashboard/dashboardSlice";

const Home = () => {
    const { data: dashboard, isSuccess } = useGetDashboardQuery(
        {},
        { refetchOnMountOrArgChange: true }
    );
    return (
        <div className="container">
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
                    count="4"
                    link="/"
                />
                <ButtonLink
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
                />
            </div>
        </div>
    );
};

export default Home;
