export type SidebarItem = {
  icon: string;
  displayName: string;
  url: string;
};

export type SidebarGroup = GenDict<SidebarItem[]>;
