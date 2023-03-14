import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useLocalStorage from '../hooks/useLocalStorage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faDiceTwo, faBars } from '@fortawesome/free-solid-svg-icons';
import SideNavItem from './SideNavItem';
import styles from './layout.module.css';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [showNav, setNav] = useLocalStorage('showNavName', true);
  const [showNavNames, setShowNavNames] = useState(showNav);
  const [activePath, setActivePath] = useState('/');
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    setActivePath(pathname);
  }, [pathname]);

  const onToggleNav = () => {
    setShowNavNames(!showNavNames);
    setNav(!showNav);
  };

  const navItems = [
    {
      name: 'Page One',
      icon: <FontAwesomeIcon icon={faHome} className={styles.nav__icon} />,
      to: '/',
      key: 1,
    },
    {
      name: 'Page Two',
      icon: <FontAwesomeIcon icon={faDiceTwo} className={styles.nav__icon} />,
      to: '/pageTwo',
      key: 2,
    },
  ];
  return (
    <div
      id='body-pd'
      className={
        showNavNames ? `${styles.body} ${styles.body_pd}` : styles.body
      }
    >
      <header
        id='header'
        className={
          showNavNames ? `${styles.header} ${styles.body_pd}` : styles.header
        }
      >
        <span className={styles.nav__logo_name}>
          Pioneering Programmers Test App
        </span>
        {showNavNames ? null : (
          <div className={styles.top_bar_toggle} onClick={onToggleNav}>
            <FontAwesomeIcon id='header-toggle' icon={faBars} />
          </div>
        )}
      </header>
      <div
        id='nav-bar'
        className={
          showNavNames ? `${styles.l_navbar} ${styles.show}` : styles.l_navbar
        }
      >
        <nav className={`${styles.nav}`}>
          <div>
            <div className={styles.nav__logo}>
              <div className={styles.header__toggle} onClick={onToggleNav}>
                <FontAwesomeIcon id='header-toggle' icon={faBars} />
              </div>
            </div>
            <div className={styles.nav__list}>
              {navItems.map((item, index) => (
                <div key={index} data-tooltip-id={item.name}>
                  <SideNavItem
                    path={item.to}
                    name={item.name}
                    icon={item.icon}
                    key={item.key}
                    active={item.to === activePath}
                  />
                  {showNavNames ? null : (
                    <Tooltip
                      className='sidNavToolTip'
                      id={item.name}
                      place='top'
                    >
                      {item.name}
                    </Tooltip>
                  )}
                </div>
              ))}
            </div>
          </div>
        </nav>
      </div>
      <div className={styles.childPage}>{children}</div>
    </div>
  );
};

export default Layout;
