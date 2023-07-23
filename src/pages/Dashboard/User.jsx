import { Link } from "react-router-dom";
import TableUser from "../../component/TableUser";

const User = () => {
    return (
        <>
            <div className="wrap-add-murid">
                <Link to={"/dashboard/user/add"}>
                    <button className="btn-tambah">Tambah +</button>
                </Link>
            </div>
            <TableUser />
        </>
    );
};

export default User;
