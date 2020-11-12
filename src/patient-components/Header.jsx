import React from "react";
import {
  Nav,
  Navbar,
  NavbarBrand,
  Collapse,
  DropdownItem,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";

import profilephoto from "../assets/images/pictures/profile-picture.png";

/*--------------------------------------------------------------------------------*/
/* Import images which are need for the HEADER                                    */
/*--------------------------------------------------------------------------------*/
import logodarkicon from "../assets/images/logo-icon.png";
import logolighticon from "../assets/images/logo-light-icon.png";
import logodarktext from "../assets/images/logo-text.png";
import logolighttext from "../assets/images/logo-light-text.png";
import nfLogo from "../assets/images/pictures/logo.png";

const Header = () => {
  /*--------------------------------------------------------------------------------*/
  /*To open SIDEBAR-MENU in MOBILE VIEW                                             */
  /*--------------------------------------------------------------------------------*/
  const showMobilemenu = () => {
    document.getElementById("main-wrapper").classList.toggle("show-sidebar");
  };

  return (
    <header className="topbar navbarbg" data-navbarbg="skin5">
      <Navbar className="top-navbar" dark expand="md">
        <div className="navbar-header" id="logobg" data-logobg="skin6">
          {/*--------------------------------------------------------------------------------*/}
          {/* Logos Or Icon will be goes here for Light Layout && Dark Layout                */}
          {/*--------------------------------------------------------------------------------*/}
          <NavbarBrand href="/">
            <b >
              <img src={nfLogo} alt="" id="nf-logo" />
            </b>
          </NavbarBrand>
          {/*--------------------------------------------------------------------------------*/}
          {/* Mobile View Toggler  [visible only after 768px screen]                         */}
          {/*--------------------------------------------------------------------------------*/}
          <button
            className="btn-link nav-toggler d-block d-md-none"
            onClick={() => showMobilemenu()}
          >
            <i className="ti-menu ti-close" />
          </button>
        </div>
        <Collapse className="navbarbg" navbar data-navbarbg="skin5">
          <Nav className="ml-auto float-right" navbar>
            {/*--------------------------------------------------------------------------------*/}
            {/* Start Profile Dropdown                                                         */}
            {/*--------------------------------------------------------------------------------*/}
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret className="pro-pic">
                <img
                  src={profilephoto}
                  alt="user"
                  className="rounded-circle"
                  width="31"
                />
                <span className="ml-2"> User</span>
              </DropdownToggle>
              <DropdownMenu right className="user-dd">
                <DropdownItem>
                  <i className="ti-user mr-1 ml-1" /> My Account
                </DropdownItem>
                <DropdownItem>
                  <i className="ti-wallet mr-1 ml-1" /> My Balance
                </DropdownItem>
                <DropdownItem>
                  <i className="ti-email mr-1 ml-1" /> Inbox
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <i className="ti-settings mr-1 ml-1" /> Account Settings
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem href="/pages/login">
                  <i className="fa fa-power-off mr-1 ml-1" /> Logout
                </DropdownItem>
                <DropdownItem divider />
                <Button color="success" className="btn-rounded ml-3 mb-2 mt-2">
                  View Profile
                </Button>
              </DropdownMenu>
            </UncontrolledDropdown>
            {/*--------------------------------------------------------------------------------*/}
            {/* End Profile Dropdown                                                           */}
            {/*--------------------------------------------------------------------------------*/}
          </Nav>
        </Collapse>
      </Navbar>
    </header>
  );
};
export default Header;
