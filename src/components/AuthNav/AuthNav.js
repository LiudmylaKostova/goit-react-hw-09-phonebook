import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <ul className="navList">
      <li className="navListItem">
        <NavLink
          exact
          to="/login"
          className="navLink"
          activeClassName="navLink--active"
        >
          Login
        </NavLink>
      </li>
      <li className="navListItem">
        <NavLink
          exact
          to="/register"
          className="navLink"
          activeClassName="navLink--active"
        >
          Sign up
        </NavLink>
      </li>
    </ul>
  );
};

export default AuthNav;
