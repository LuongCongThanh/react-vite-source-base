import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface MenuItem {
  id: number;
  title: string;
}

const Header = () => {
  const { t } = useTranslation();
  const menuItems: MenuItem[] = [
    { id: 1, title: t('HEADER.MENU.HOME') },
    { id: 2, title: t('HEADER.MENU.TV_SHOW') },
    { id: 3, title: t('HEADER.MENU.MOVIE') },
    { id: 4, title: t('HEADER.MENU.MY_LIST') }
  ];
  return (
    <div className="header">
      <ul className="header-content">
        {menuItems.map(item => (
          <li key={item.id} className="header-content-item">
            <Link to={`/${item.title}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
