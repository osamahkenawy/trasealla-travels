import { Link } from 'react-router';

const LogoBox = () => {
  return (
    <div className="logo-box">
      <Link to="/admin/dashboard" className="logo-dark">
        <img
          width={28}
          height={28}
          src="/assets/admin/logo-sm.png"
          className="logo-sm"
          alt="logo sm"
        />
        <img
          width={98}
          height={30}
          src="/assets/admin/logo-dark.png"
          className="logo-lg"
          alt="logo dark"
        />
      </Link>
      <Link to="/admin/dashboard" className="logo-light">
        <img
          width={28}
          height={28}
          src="/assets/admin/logo-sm.png"
          className="logo-sm"
          alt="logo sm"
        />
        <img
          width={98}
          height={30}
          src="/assets/admin/logo-light.png"
          className="logo-lg"
          alt="logo light"
        />
      </Link>
    </div>
  );
};

export default LogoBox;