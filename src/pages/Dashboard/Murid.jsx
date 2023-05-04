import { Link } from "react-router-dom";
import TableMurid from "../../component/TableMurid";

const Murid = () => {
    return (
        <>
            <div className="wrap-add-murid">
                <Link to={"/dashboard/murid/add"}>
                    <button className="btn-tambah">Tambah +</button>
                </Link>
            </div>
            <TableMurid />
        </>
    );
};

export default Murid;
