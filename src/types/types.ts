export interface ThemeType {
  _id: string;
  name: string;
  subThemes: SubThemesType[];
  files: FilesType[];
}

export interface SubThemesType {
  _id: string;
  name: string;
  files: FilesType[];
}

export interface FilesType {
  _id: string;
  name: string;
  link: string;
}
