import { type FunctionComponent, useState, useEffect } from 'react';
import { type ThemeType } from '../types/types';
import MenuItem from './MenuItem';
import styles from '../style/menu.module.scss';

const Menu: FunctionComponent = () => {
  const [themes, setThemes] = useState<ThemeType[]>([]);

  useEffect(() => {
    const url = 'https://school-website-api.vercel.app/methodfiles';

    fetch(url)
      .then(async (response) => await response.json())
      .then((data: ThemeType[]) => {
        setThemes(data);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  return (
    <div className={styles.menu}>
      {themes.map((theme, index) => (
        <MenuItem key={theme._id} theme={theme} colorIndex={index} />
      ))}
    </div>
  );
};

export default Menu;
