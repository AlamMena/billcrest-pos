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

export interface navSection {
  title: string;
  childs: navItem[];
}
export const navConfig: navSection[] = [
  {
    title: "General",
    childs: [
      {
        title: "Home",
        icon: <i className="fi fi-rr-apps"></i>,
        href: "/home",
      },
      {
        title: "Branches",
        icon: <i className="fi fi-rr-apps"></i>,
        href: "/home",
      },
      {
        title: "Warehouse",
        icon: <i className="fi fi-rr-warehouse-alt"></i>,
        href: "/warehouse",
      },
    ],
  },

  // {
  //   title: "Reception",
  //   icon: <i className="fi fi-rr-file-invoice"></i>,
  //   href: "/merchandise-reception",
  // },

  // {
  //   title: "Products",
  //   icon: <i className="fi fi-rr-boxes"></i>,
  //   href: "/products",
  // },

  // {
  //   title: "Invoice",
  //   icon: <i className="fi fi-rr-file-invoice-dollar"></i>,
  //   href: "/invoice",
  // },

  // {
  //   title: "Settings",
  //   icon: <i className="fi fi-rr-settings"></i>,
  //   href: "/warehouse",
  // },
];
