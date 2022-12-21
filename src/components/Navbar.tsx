import {Button, Container, Nav, Navbar as NavbarBs} from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { ImCart } from "react-icons/im"
import { IconContext } from "react-icons"
export function Navbar () {
    return <NavbarBs sticky="top"
    className="bg-white shadow-sm mb-3">
        <Container>
            <Nav className="me-auto">
                <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
                <Nav.Link to="/store" as={NavLink}>Store</Nav.Link>
                <Nav.Link to="/about" as={NavLink}>About</Nav.Link>
                
            </Nav>
            <Button 
            style={{width: "3rem", height: "3rem", position: "relative"}}
            variant="outline-primary"
            className="rounded-circle">
            <IconContext.Provider value={{ color: "currentColor", className: "global-class-name", size: "1.5rem" }}>
                <ImCart/>
            </IconContext.Provider>
            <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center" style={{ 
                color: "white", 
                width: "1.5rem", 
                height: "1.5rem",
                position: "absolute", 
                bottom: 0,
                right: 0, 
                transform: "translate(25%, 25%)" }}>2</div>
            </Button>
        </Container>
    </NavbarBs>
}