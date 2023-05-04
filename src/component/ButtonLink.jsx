import { Link } from "react-router-dom";

import "../assets/css/btnLink.css";

const ButtonLink = (props) => {
    return (
        <Link
            to={`${props.link}`}
            style={{
                backgroundColor: `white`,
                color: `black`,
                border: "1px solid rgba(101,109,119,.16)",
                padding: "3em",
                textAlign: "center",
                textDecoration: "none",
            }}>
            <p className="btn-link-count">{props.count}</p>
            <p className="btn-link-title">{props.title}</p>
        </Link>
    );
};

export default ButtonLink;
