import React, { useContext } from 'react';
import { Link } from "react-router-dom";

import { Navbar, Container, Nav } from 'react-bootstrap';

import { UserContext } from '../../context/UserContext';


const NavComponent = () => {
    const { user: token = null } = useContext(UserContext);

    const publicRoutes = [
        <Nav.Link key={1}><Link to="/login">Login</Link></Nav.Link>,
        <Nav.Link key={2}><Link to="/signup">Signup</Link></Nav.Link>,
    ]
    const privateRoutes = [
        <Nav.Link key={3}><Link to="/posts">Posts</Link></Nav.Link>,
        <Nav.Link key={4}><Link to="/categories">Categories</Link></Nav.Link>,
        <Nav.Link key={5}><Link to="/checkout">Checkout</Link></Nav.Link>,
        <Nav.Link key={6}><Link to="/logout">Logout</Link></Nav.Link>,
    ]
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    {token ? privateRoutes : publicRoutes}
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavComponent
