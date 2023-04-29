import { NavLink } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
			<NavLink to="/home">Home</NavLink>
            <span> | </span>
			<NavLink to="/gift-list">Gift List</NavLink>
            <span> | </span>
			<NavLink to="/gift-add">add new gift</NavLink>
        </div>
    );
}

export default Menu;
