import { type FunctionComponent, useState, useEffect } from 'react';
import { type ThemeType } from '../types/types';
import { useFetching } from '../hooks/hooks';
import getThemes from '../api/getThemes';
import MenuItem from './MenuItem';
import styles from '../style/menu.module.scss';

const Menu: FunctionComponent = () => {
  const [themes, setThemes] = useState<ThemeType[]>([]);
  const [fetchThemes, isLoading, loadingError] = useFetching(async () => {
    const response = await getThemes();
    setThemes(response);
  });

  useEffect(() => {
    void fetchThemes();
  }, []);

  return (
    <div className={styles.menu}>
      {isLoading && <h2 className="message">Загрузка...</h2>}
      {loadingError && <h2 className="message">{`${loadingError}`}</h2>}
      {themes.map((theme, index) => (
        <MenuItem key={theme._id} theme={theme} colorIndex={index} />
      ))}
    </div>
  );
};

export default Menu;
