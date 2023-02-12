import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const navItems = [
  { href: '/', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.nav}>
        {navItems.map(({ href, text }) => (
          <NavLink
            className={({ isActive }) =>
              isActive ? s.active_link : s.btn_link
            }
            to={href}
            key={href}
          >
            {text}
          </NavLink>
        ))}
      </div>
    </header>
  );
};

export default Header;