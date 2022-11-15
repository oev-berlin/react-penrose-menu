export interface IMenu {
  name: string;
  pageSlug: string;
  children: IMenu[];
}

export interface INavigation {
  name: string;
  menu: IMenu[];
}
