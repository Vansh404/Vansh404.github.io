export interface CoreSettings {
  // Site settings
  site: string,
  basepath: string,
  // Personal settings
  name: string,
  username: string,
  // Theme settings
  lightModeTheme: string,
  darkModeTheme: string,
  defaultTheme: string,
  // SEO settings
  title: string,
  description?: string,
  image?: string,
}

export interface ResearchInfo {
  image: ImageMetadata;
  dontOptimizeImage?: boolean,
  title: string,
  journal: string,
  time: string,
  link: string,
  authors: string[],
  review?: boolean,
  disabled?: boolean,
  hide?: boolean,
};

export type MediaItem =
  | { type: 'image', src: ImageMetadata, optimize?: boolean }
  | { type: 'image-url', src: string }
  | { type: 'video', src: string }

export interface ProjectInfo {
  image?: ImageMetadata,
  dontOptimizeImage?: boolean,
  media?: MediaItem[],
  title: string,
  info?: string,
  description: string,
  link: string,
  disabled?: boolean,
  hide?: boolean,
};

export interface ProjectsList {
  title: string,
  disabled?: boolean,
  items: ProjectInfo[],
};

export interface Socials {
  label: string,
  href: string,
  icon: string,
};