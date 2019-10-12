import React from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';

export default class NavMenu extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };

  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
/*
<Nav pills>
  <NavItem>
    <NavLink href="/" active>Aplicación de Contactos</NavLink>
  </NavItem>
  <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
    <DropdownToggle nav caret>
      Dropdown
    </DropdownToggle>
    <DropdownMenu>
      <DropdownItem header>Header</DropdownItem>
      <DropdownItem disabled>Action</DropdownItem>
      <DropdownItem>Another Action</DropdownItem>
      <DropdownItem divider />
      <DropdownItem>Another Action</DropdownItem>
    </DropdownMenu>
  </Dropdown>
  <NavItem>
    <NavLink href="/">Home</NavLink>
  </NavItem>
  <NavItem>
    <NavLink href="/Contactos">Contactos</NavLink>
  </NavItem>

</Nav>
 */
  render() {
    return (
      <div>
        <Nav pills>
          <NavItem>
            <NavLink href="/" active>Aplicación de Contactos</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/Contactos">Contactos</NavLink>
          </NavItem>

        </Nav>
      </div>
    );
  }
}
