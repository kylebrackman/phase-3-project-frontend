import React from "react";
import { Button, NavBarDiv, NBHeaderButton } from "../StyledComponents"
import { NavLink } from "react-router-dom";

function NavBar() {

    return (
        <div>
            <NavBarDiv>
                <NavLink to="/home">
                    <NBHeaderButton>GEAR HEADZ</NBHeaderButton>
                </NavLink>
                <NavLink to="/reviews">
                    <Button>Reviews!</Button>
                </NavLink>
                <NavLink to="/submissions">
                    <Button>Submit a Review!</Button>
                </NavLink>
            </NavBarDiv>
        </div>
    )
}

export default NavBar