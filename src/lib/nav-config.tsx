import {
  ArchiveRestore,
  Boxes,
  FileBox,
  Home,
  Settings,
  Warehouse,
} from "lucide-react";
import { ReactNode } from "react";

export interface navItem {
  title: string;
  icon: ReactNode;
  href: string;
  childs?: navItem[];
}
export const navConfig: navItem[] = [
  {
    title: "Home",
    icon: <Home />,
    href: "/home",
  },
  {
    title: "Products",
    icon: <Boxes />,
    href: "/products",
  },
  {
    title: "Warehouse",
    icon: <Warehouse />,
    href: "/warehouse",
  },
  {
    title: "Invoice",
    icon: <FileBox />,
    href: "/invoice",
  },
  {
    title: "Reception",
    icon: <ArchiveRestore />,
    href: "/merchandise-reception",
  },
  {
    title: "Settings",
    icon: <Settings />,
    href: "/warehouse",
  },
];
