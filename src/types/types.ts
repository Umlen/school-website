export type ThemeType = {
  id: string;
  name: string;
  subThemes?: SubThemesType[];
  files?: FilesType[];
};

type SubThemesType = {
  id: string;
  name: string;
  files: FilesType[];
};

export type FilesType = {
  id: string;
  name: string;
  link: string;
};
