import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { logout } from '../../api/authApi';
import { useAuthContext } from '../../context/AuthContext';

const NavigationBar = () => {
  const history = useHistory();
  const { setUser, isAuth, setIsAuth } = useAuthContext();

  const handleLogout = () => {
    logout().then((data) => {
      if (data.success) {
        setUser(data.user);
        setIsAuth(false);
        history.push('/');
      }
    });
  };

  const unauthenticatedNavigationBar = () => (
    <Nav.Link as={Link} to="/login">
      Login
    </Nav.Link>
  );

  const authenticatedNavigationBar = () => (
    <Nav.Link as={Link} to="/" onClick={handleLogout}>
      Log out
    </Nav.Link>
  );

  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Navbar.Brand as={Link} to="/">
        GoT-Funko
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {!isAuth
            ? unauthenticatedNavigationBar()
            : authenticatedNavigationBar()}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
