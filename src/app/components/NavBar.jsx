"use  client";

import React, { useState } from "react";
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { useUser } from "@auth0/nextjs-auth0";

import PageLink from "./PageLink";
import AnchorLink from "./AnchorLink";
import NavButton from "./NavButton";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isLoading } = useUser();
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="nav-container" data-testid="navbar">
      <Navbar color="light" light expand="md">
        <Container>
          <NavbarToggler onClick={toggle} data-testid="navbar-toggle" />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar data-testid="navbar-items">
              <NavItem>
                <NavButton to="/" testId="navbar-home">
                  Home
                </NavButton>
              </NavItem>
              {user && (
                <>
                  <NavItem>
                    <NavButton to="/dashboard" testId="navbar-dashboard">
                      Dashboard
                    </NavButton>
                  </NavItem>
                </>
              )}
            </Nav>
            <Nav className="d-none d-md-block" navbar>
              {!isLoading && !user && (
                <NavItem id="qsLoginBtn">
                  <NavButton
                    to="/auth/login"
                    tabIndex={0}
                    testId="navbar-login-desktop"
                  >
                    Log in
                  </NavButton>
                </NavItem>
              )}
            </Nav>

            {user && (
              <Nav
                id="nav-mobile"
                className="d-md-none justify-content-between"
                navbar
                data-testid="navbar-menu-mobile"
              >
                <NavItem>
                  <span className="user-info">
                    <img
                      src={user.picture}
                      alt="Profile"
                      className="nav-user-profile d-inline-block rounded-circle mr-3"
                      width="50"
                      height="50"
                      decode="async"
                      data-testid="navbar-picture-mobile"
                    />
                    <h6
                      className="d-inline-block"
                      data-testid="navbar-user-mobile"
                    >
                      {user.name}
                    </h6>
                  </span>
                </NavItem>
                <NavItem>
                  <PageLink
                    href="/profile"
                    icon="user"
                    testId="navbar-profile-mobile"
                  >
                    Profile
                  </PageLink>
                </NavItem>
                <NavItem id="qsLogoutBtn">
                  <NavButton
                    href="/auth/logout"
                    className="btn btn-link p-0"
                    icon="power-off"
                    testId="navbar-logout-mobile"
                  >
                    Log out
                  </NavButton>
                </NavItem>
              </Nav>
            )}
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
