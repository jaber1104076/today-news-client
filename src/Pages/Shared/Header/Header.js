import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUser } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import Button from 'react-bootstrap/Button';
import toast from 'react-hot-toast';

const Header = () => {
    const { user, LogOut } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleLogOut = () => {
        LogOut()
            .then(() => {
                toast.success('you Logout successfully')
                navigate('/')
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <Navbar className='mb-5' collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home"><Link to='/'>News Today</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <>
                            {
                                user?.uid
                                    ?
                                    <>
                                        <span> {user?.displayName}</span>
                                        <Button variant="light" onClick={handleLogOut}>Log Out</Button>
                                    </>

                                    :
                                    <>
                                        <Link className='me-3 text-decoration-none' to="/login">Login</Link>
                                        <Link className='text-decoration-none' to="/register">Registration</Link>
                                    </>
                            }
                        </>
                        <Nav.Link eventKey={2}>
                            {
                                user?.photoURL
                                    ?
                                    <Image
                                        src={user?.photoURL}
                                        style={{ height: '40px' }}
                                        roundedCircle
                                    ></Image>
                                    :
                                    <FaUser></FaUser>
                            }
                        </Nav.Link>
                    </Nav>
                    <div className='d-lg-none'>
                        <LeftSideNav></LeftSideNav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;