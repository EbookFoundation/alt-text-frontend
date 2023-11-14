import Image from "next/image";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import styles from "./navbar.module.scss";
import ProfileIcon from "../profileicon/profileicon";

export default function NavBar() {
  return (
    <Navbar className={styles.navbar}>
      <Container>
        <Navbar.Brand href="/" className={styles.navbarbrand}>
          <Image src="/altgenlogo.png" alt="logo" width={48} height={48} />
          <h1>Alt-Gen</h1>
        </Navbar.Brand>
        <Container className={styles.rightContent}>
          <Navbar.Collapse></Navbar.Collapse>
          <ProfileIcon />
        </Container>
      </Container>
    </Navbar>
  );
}
