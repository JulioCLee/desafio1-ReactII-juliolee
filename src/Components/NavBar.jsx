import { Link } from "react-router-dom";
import { Navbar, Container, } from "react-bootstrap";

const NavBar = () => {
    return (
        <div>
            <Navbar style={{background: "rgb(255 53 70)"}} variant="dark">
                <Container className="justify-content-space-between">
                    <div>
                    <Link to="/" className="text-white ms-3 text-decoration-none">
                        🏠Home
                    </Link>
                    <Link to="/Contacto" className="text-white ms-3 text-decoration-none">
                        📒Contacto
                    </Link>
                    </div>
                    <Link to="/" className="text-white ms-3 text-decoration-none">
                        Happy Cake 🍰
                    </Link>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar