import IconifyIcon from '../../../wrapper/IconifyIcon';
import { Dropdown, DropdownHeader, DropdownItem, DropdownMenu, DropdownToggle } from 'react-bootstrap';
import { Link } from 'react-router';

const ProfileDropdown = () => {
  return (
    <Dropdown className="topbar-item">
      <DropdownToggle
        type="button"
        className="topbar-button content-none"
        id="page-header-user-dropdown"
        data-bs-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <span className="d-flex align-items-center">
          <img
            className="rounded-circle"
            width={32}
            height={32}
            src="/assets/admin/users/avatar-1.jpg"
            alt="avatar-3"
          />
        </span>
      </DropdownToggle>
      <DropdownMenu className="dropdown-menu-end">
        <DropdownHeader>Welcome!</DropdownHeader>
        <DropdownItem as={Link} to="/admin/profile">
          <IconifyIcon icon="solar:user-outline" className="align-middle me-2 fs-18" />
          <span className="align-middle">My Account</span>
        </DropdownItem>
        <DropdownItem as={Link} to="/admin/pricing">
          <IconifyIcon icon="solar:wallet-outline" className="align-middle me-2 fs-18" />
          <span className="align-middle">Pricing</span>
        </DropdownItem>
        <DropdownItem as={Link} to="/admin/help">
          <IconifyIcon icon="solar:help-outline" className="align-middle me-2 fs-18" />
          <span className="align-middle">Help</span>
        </DropdownItem>
        <DropdownItem as={Link} to="/admin/lock-screen">
          <IconifyIcon icon="solar:lock-keyhole-outline" className="align-middle me-2 fs-18" />
          <span className="align-middle">Lock screen</span>
        </DropdownItem>
        <div className="dropdown-divider my-1" />
        <DropdownItem className="text-danger" as={Link} to="/login">
          <IconifyIcon icon="solar:logout-3-outline" className="align-middle me-2 fs-18" />
          <span className="align-middle">Logout</span>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default ProfileDropdown;