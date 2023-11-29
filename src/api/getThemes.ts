import { type ThemeType } from '../types/types';

async function getThemes(): Promise<any> {
  const url = 'https://school-website-api.vercel.app/methodfiles';

  const response = await fetch(url);
  const themes: ThemeType[] = await response.json();

  return themes;
}

export default getThemes;
