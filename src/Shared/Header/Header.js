import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <Navbar
        bg="dark"
        data-bs-theme="dark"
        sticky="top"
        collapseOnSelect
        expand="lg"
      >
        <Container>
          <Navbar.Brand className="fs-2" href="#home">
            Calmness Medic
          </Navbar.Brand>
          <Navbar.Toggle />

          <Navbar.Collapse className="justify-content-end">
            <Nav className="mr-auto navbar text-light ">
              <Nav.Link as={HashLink} to="/home#home">
                Home
              </Nav.Link>
              {/* <Nav.Link href="#home">Home</Nav.Link> */}
              <Nav.Link as={HashLink} to="/home#services">
                Services
              </Nav.Link>
              <Nav.Link as={HashLink} to="/shop#shop">
                Shop
              </Nav.Link>
              <>
                {user.email ? (
                  <>
                    <h5 className="mx-2">
                      welcome {user.displayName} {""}
                    </h5>
                    <Button onClick={logOut} variant="light">
                      LogOut
                    </Button>
                  </>
                ) : (
                  <>
                    <Nav.Link as={Link} to={"/login"}>
                      <button className="btn btn-light">Login</button>
                    </Nav.Link>
                    <Nav.Link as={Link} to={"/signup"}>
                      <button className="btn btn-light">SignUp</button>
                    </Nav.Link>
                  </>
                )}
              </>

              {/* <Nav.Link className="text-light" href="#pricing">
                SIgnUp
              </Nav.Link> */}
            </Nav>
            {/* <Navbar.Text>
              Signed in as: <a href="#login"></a>
            </Navbar.Text> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
