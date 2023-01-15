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
                    <Button>reviews</Button>
                </NavLink>
                <NavLink to="/about">
                    <Button>about</Button>
                </NavLink>
            </NavBarDiv>
        </div>
    )
}

export default NavBar