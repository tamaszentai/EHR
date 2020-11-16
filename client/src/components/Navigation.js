import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand>Electronic Health Records</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              {/* <NavLink to="/patients">Patients</NavLink> */}
              <NavLink>
                <Link to="/patients">Patients</Link>
              </NavLink>
            </NavItem>
            <NavItem>
            <NavLink>
              <Link to="/ordertypes">Order Types</Link>
              </NavLink>
            </NavItem>
            <NavItem>
            <NavLink>
              <Link to="/patientorders">Patient Orders</Link>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Example;
