import React from 'react';
import {Navbar as NavbarReactstrap, NavLink} from 'reactstrap';
import {Link} from 'react-router-dom';

function Navbar(){

    return(
        <NavbarReactstrap color="dark" dark expand="md">
            <NavLink tag={Link} to="/">Products</NavLink>
            <NavLink tag={Link} to="/cart/:id">Cart</NavLink>
        </NavbarReactstrap>
    )
}

export default Navbar