import { Link } from 'react-router-dom';
import styles from './layout.module.css';

type SideNavItemProps = {
  name: string;
  path: string;
  active: boolean;
  icon: JSX.Element;
};

const SideNavItem = (props: SideNavItemProps) => {
  const { name, path, icon, active } = props;
  // let navCss;
  // active ? (navCss = 'nav__link') : (navCss = 'nav__link_active');
  return (
    <Link to={path}>
      <div
        className={
          active
            ? `${styles.nav__link} ${styles.nav__link_active}`
            : styles.nav__link
        }
      >
        <span className={active ? `${styles.active_nav_name}` : ''}>
          {icon}
        </span>
        <span>{name}</span>
      </div>
    </Link>
  );
};

export default SideNavItem;
