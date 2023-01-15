import React from "react";
import { Button } from "../StyledComponents"
import { NavLink } from "react-router-dom";

function NavBar() {

    return (
        <div>
            <NavLink to="/home">
                <Button>home</Button>
            </NavLink>
            <NavLink to="/reviews">
                <Button>reviews</Button>
            </NavLink>
            <Button>about</Button>
        </div>
    )
}

export default NavBar