export interface ThemeType {
  id: string;
  name: string;
  subThemes?: SubThemesType[];
  files?: FilesType[];
}

export interface SubThemesType {
  id: string;
  name: string;
  files: FilesType[];
}

export interface FilesType {
  id: string;
  name: string;
  link: string;
}
