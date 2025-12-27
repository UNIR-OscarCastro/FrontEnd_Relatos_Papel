import { Navbar, Container, Nav } from "react-bootstrap";
import { Outlet, NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import ErrorBoundary from "../components/ErrorBoundary";

const MainLayout = () => {
  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            Front end creado en React para Proyecto transversal Relatos de papel
            - MISSI Unir 2025-2026
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="main-navbar" />
          <Navbar.Collapse id="main-navbar">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/">
                Landing
              </Nav.Link>
              <Nav.Link as={NavLink} to="/libros">
                Libros
              </Nav.Link>
              <Nav.Link as={NavLink} to="/libros">
                Categoría 3
              </Nav.Link>
              <Nav.Link as={NavLink} to="/libros">
                Categoría 4
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <main style={{ flex: 1 }}>
        <Container className="py-4">
          <Outlet />
        </Container>
      </main>

      <ErrorBoundary>
        <Footer />
      </ErrorBoundary>
    </div>
  );
};

export default MainLayout;
