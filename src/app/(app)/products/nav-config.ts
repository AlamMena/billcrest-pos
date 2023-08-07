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
  icon: string;
  href?: string;
  childs?: navItem[];
}

export interface navSection {
  title: string;
  childs: navItem[];
}
export const navConfig: navSection[] = [
  {
    title: "Invoice",
    childs: [
      {
        title: "Receptions",
        icon: "fi fi-rr-truck-loading",
        href: "/merchandise-reception",
      },
      {
        title: "Invoices",
        icon: "fi fi-rr-receipt",
        href: "/invoice",
      },
    ],
  },
  {
    title: "Inventory",
    childs: [
      {
        title: "Products",
        icon: "fi fi-rr-boxes",
        href: "/products",
        childs: [
          {
            title: "Create",
            icon: "",
            href: "/categories",
          },
          {
            title: "List",
            icon: "",
            href: "/brands",
          },
        ],
      },
      {
        title: "Warehouses",
        icon: "fi fi-rr-box-open",
        href: undefined,
        childs: [
          {
            title: "Reception",
            icon: "fi fi-rr-file-invoice",
            href: "/merchandise-reception",
          },
        ],
      },
      {
        title: "Suppliers",
        icon: "fi fi-rr-truck-side",
        href: "/suppliers",
      },
      // {
      //   title: "Home",
      //   icon: "fi fi-rr-apps",
      //   href: "/home",
      // },
      // {
      //   title: "Branches",
      //   icon: "fi fi-rr-building",
      //   href: "/branches",
      // },
      {
        title: "Receptions",
        icon: "fi fi-rr-receipt",
        href: "/merchandise-reception",
      },
    ],
  },
  {
    title: "Management",
    childs: [
      {
        title: "Settings",
        icon: "fi fi-rr-settings",
        href: "/warehouse",
      },
    ],
  },
];
