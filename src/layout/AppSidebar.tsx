"use client";
import React, { useEffect, useRef, useCallback, useState } from "react";
import Link from "next/link";
import { Store, Warehouse } from "lucide-react"
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useSidebar } from "../context/SidebarContext";
import {
  BoxCubeIcon,
  CalenderIcon,
  ChatIcon,
  ChevronDownIcon,
  DocsIcon,
  GridIcon,
  HorizontaLDots,
  ListIcon,
  MailIcon,
  PageIcon,
  PieChartIcon,
  PlugInIcon,
  TableIcon,
  TaskIcon,
  UserCircleIcon,
} from "../icons/index";
// import SidebarWidget from "./SidebarWidget";

type NavItem = {
  name: string;
  icon: React.ReactNode;
  path?: string;
  subItems?: { name: string; path: string; pro?: boolean; new?: boolean }[];
};

const navItems: NavItem[] = [
  {
    icon: <GridIcon />,
    name: "Dashboard",
    path: "/",
  },
  {
    name: "Inventory",
    icon: <Warehouse />,
    subItems: [
      { name: "Basic Tables", path: "/basic-tables", pro: false },
      { name: "Data Tables", path: "/data-tables", pro: true },
    ],
  },
  {
    name: "Penjualan",
    icon: <Store />,
    subItems: [
      { name: "Basic Tables", path: "/basic-tables", pro: false },
      { name: "Data Tables", path: "/data-tables", pro: true },
    ],
  },
  // {
  //   icon: <CalenderIcon />,
  //   name: "Calendar",
  //   path: "/calendar",
  // },
  // {
  //   name: "Task",
  //   icon: <TaskIcon />,
  //   subItems: [
  //     { name: "List", path: "/task-list", pro: true },
  //     { name: "Kanban", path: "/task-kanban", pro: true },
  //   ],
  // },
  {
    name: "Forms",
    icon: <ListIcon />,
    subItems: [
      { name: "Form Elements", path: "/form-elements", pro: false },
      { name: "Form Layout", path: "/form-layout", pro: true },
    ],
  },
  // {
  //   name: "Tables",
  //   icon: <TableIcon />,
  //   subItems: [
  //     { name: "Basic Tables", path: "/basic-tables", pro: false },
  //     { name: "Data Tables", path: "/data-tables", pro: true },
  //   ],
  // },
  // {
  //   name: "Pages",
  //   icon: <PageIcon />,
  //   subItems: [
  //     { name: "File Manager", path: "/file-manager", pro: true },
  //     { name: "Pricing Tables", path: "/pricing-tables", pro: true },
  //     { name: "Faqs", path: "/faq", pro: true },
  //     { name: "Blank Page", path: "/blank", pro: true },
  //     { name: "404 Error", path: "/error-404", pro: true },
  //     { name: "500 Error", path: "/error-500", pro: true },
  //     { name: "503 Error", path: "/error-503", pro: true },
  //     { name: "Coming Soon", path: "/coming-soon", pro: true },
  //     { name: "Maintenance", path: "/maintenance", pro: true },
  //     { name: "Success", path: "/success", pro: true },
  //   ],
  // },
];

const laporanItems: NavItem[] = [
  {
    name: "Laporan",
    icon: <TableIcon />,
    subItems: [
      { name: "Basic Tables", path: "/basic-tables", pro: false },
      { name: "Data Tables", path: "/data-tables", pro: true },
    ],
  },
];

const settingItems: NavItem[] = [
  {
    icon: <UserCircleIcon />,
    name: "Profil Akun",
    path: "/profile",
  },
  // {
  //   icon: <PlugInIcon />,
  //   name: "Authentication",
  //   subItems: [
  //     { name: "Sign In", path: "/signin", pro: false },
  //     { name: "Sign Up", path: "/signup", pro: false },
  //     { name: "Reset Password", path: "/reset-password", pro: true },
  //     {
  //       name: "Two Step Verification",
  //       path: "/two-step-verification",
  //       pro: true,
  //     },
  //   ],
  // },
  // {
  //   icon: <PieChartIcon />,
  //   name: "Charts",
  //   subItems: [
  //     { name: "Line Chart", path: "/line-chart", pro: true },
  //     { name: "Bar Chart", path: "/bar-chart", pro: true },
  //     { name: "Pie Chart", path: "/pie-chart", pro: true },
  //   ],
  // },
  // {
  //   icon: <BoxCubeIcon />,
  //   name: "UI Elements",
  //   subItems: [
  //     { name: "Alerts", path: "/alerts", pro: true },
  //     { name: "Avatar", path: "/avatars", pro: true },
  //     { name: "Badge", path: "/badge", pro: true },
  //     { name: "Breadcrumb", path: "/breadcrumb", pro: true },
  //     { name: "Buttons", path: "/buttons", pro: true },
  //     { name: "Buttons Group", path: "/buttons-group", pro: true },
  //     { name: "Cards", path: "/cards", pro: true },
  //     { name: "Carousel", path: "/carousel", pro: true },
  //     { name: "Dropdowns", path: "/dropdowns", pro: true },
  //     { name: "Images", path: "/images", pro: true },
  //     { name: "Links", path: "/links", pro: true },
  //     { name: "List", path: "/list", pro: true },
  //     { name: "Modals", path: "/modals", pro: true },
  //     { name: "Notification", path: "/notifications", pro: true },
  //     { name: "Pagination", path: "/pagination", pro: true },
  //     { name: "Popovers", path: "/popovers", pro: true },
  //     { name: "Progressbar", path: "/progress-bar", pro: true },
  //     { name: "Ribbons", path: "/ribbons", pro: true },
  //     { name: "Spinners", path: "/spinners", pro: true },
  //     { name: "Tabs", path: "/tabs", pro: true },
  //     { name: "Tooltips", path: "/tooltips", pro: true },
  //     { name: "Videos", path: "/videos", pro: true },
  //   ],
  // },
];

const AppSidebar: React.FC = () => {
  const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
  const pathname = usePathname();

  const renderMenuItems = (
    navItems: NavItem[],
    menuType: "main" | "laporan" | "pengaturan"
  ) => (
    <ul className="flex flex-col gap-4">
      {navItems.map((nav, index) => (
        <li key={nav.name}>
          {nav.subItems ? (
            <button
              onClick={() => handleSubmenuToggle(index, menuType)}
              className={`menu-item group  ${
                openSubmenu?.type === menuType && openSubmenu?.index === index
                  ? "menu-item-active"
                  : "menu-item-inactive"
              } cursor-pointer ${
                !isExpanded && !isHovered
                  ? "lg:justify-center"
                  : "lg:justify-start"
              }`}
            >
              <span
                className={` ${
                  openSubmenu?.type === menuType && openSubmenu?.index === index
                    ? "menu-item-icon-active"
                    : "menu-item-icon-inactive"
                }`}
              >
                {nav.icon}
              </span>
              {(isExpanded || isHovered || isMobileOpen) && (
                <span className={`menu-item-text`}>{nav.name}</span>
              )}
              {(isExpanded || isHovered || isMobileOpen) && (
                <ChevronDownIcon
                  className={`ml-auto w-5 h-5 transition-transform duration-200  ${
                    openSubmenu?.type === menuType &&
                    openSubmenu?.index === index
                      ? "rotate-180 text-brand-500"
                      : ""
                  }`}
                />
              )}
            </button>
          ) : (
            nav.path && (
              <Link
                href={nav.path}
                className={`menu-item group ${
                  isActive(nav.path) ? "menu-item-active" : "menu-item-inactive"
                }`}
              >
                <span
                  className={`${
                    isActive(nav.path)
                      ? "menu-item-icon-active"
                      : "menu-item-icon-inactive"
                  }`}
                >
                  {nav.icon}
                </span>
                {(isExpanded || isHovered || isMobileOpen) && (
                  <span className={`menu-item-text`}>{nav.name}</span>
                )}
              </Link>
            )
          )}
          {nav.subItems && (isExpanded || isHovered || isMobileOpen) && (
            <div
              ref={(el) => {
                subMenuRefs.current[`${menuType}-${index}`] = el;
              }}
              className="overflow-hidden transition-all duration-300"
              style={{
                height:
                  openSubmenu?.type === menuType && openSubmenu?.index === index
                    ? `${subMenuHeight[`${menuType}-${index}`]}px`
                    : "0px",
              }}
            >
              <ul className="mt-2 space-y-1 ml-9">
                {nav.subItems.map((subItem) => (
                  <li key={subItem.name}>
                    <Link
                      href={subItem.path}
                      className={`menu-dropdown-item ${
                        isActive(subItem.path)
                          ? "menu-dropdown-item-active"
                          : "menu-dropdown-item-inactive"
                      }`}
                    >
                      {subItem.name}
                      <span className="flex items-center gap-1 ml-auto">
                        {subItem.new && (
                          <span
                            className={`ml-auto ${
                              isActive(subItem.path)
                                ? "menu-dropdown-badge-active"
                                : "menu-dropdown-badge-inactive"
                            } menu-dropdown-badge `}
                          >
                            new
                          </span>
                        )}
                        {subItem.pro && (
                          <span
                            className={`ml-auto ${
                              isActive(subItem.path)
                                ? "menu-dropdown-badge-active"
                                : "menu-dropdown-badge-inactive"
                            } menu-dropdown-badge `}
                          >
                            pro
                          </span>
                        )}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>
      ))}
    </ul>
  );

  const [openSubmenu, setOpenSubmenu] = useState<{
    type: "main" | "laporan" | "pengaturan";
    index: number;
  } | null>(null);
  const [subMenuHeight, setSubMenuHeight] = useState<Record<string, number>>(
    {}
  );
  const subMenuRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // const isActive = (path: string) => path === pathname;

  const isActive = useCallback((path: string) => path === pathname, [pathname]);

  useEffect(() => {
    // Check if the current path matches any submenu item
    let submenuMatched = false;
    ["main", "laporan", "pengaturan"].forEach((menuType) => {
      const items =
        menuType === "main"
          ? navItems
          : menuType === "laporan"
          ? laporanItems
          : settingItems;
      items.forEach((nav, index) => {
        if (nav.subItems) {
          nav.subItems.forEach((subItem) => {
            if (isActive(subItem.path)) {
              setOpenSubmenu({
                type: menuType as "main" | "laporan" | "pengaturan",
                index,
              });
              submenuMatched = true;
            }
          });
        }
      });
    });

    // If no submenu item matches, close the open submenu
    if (!submenuMatched) {
      setOpenSubmenu(null);
    }
  }, [pathname, isActive]);

  useEffect(() => {
    // Set the height of the submenu items when the submenu is opened
    if (openSubmenu !== null) {
      const key = `${openSubmenu.type}-${openSubmenu.index}`;
      if (subMenuRefs.current[key]) {
        setSubMenuHeight((prevHeights) => ({
          ...prevHeights,
          [key]: subMenuRefs.current[key]?.scrollHeight || 0,
        }));
      }
    }
  }, [openSubmenu]);

  const handleSubmenuToggle = (
    index: number,
    menuType: "main" | "laporan" | "pengaturan"
  ) => {
    setOpenSubmenu((prevOpenSubmenu) => {
      if (
        prevOpenSubmenu &&
        prevOpenSubmenu.type === menuType &&
        prevOpenSubmenu.index === index
      ) {
        return null;
      }
      return { type: menuType, index };
    });
  };

  return (
    <aside
      className={`fixed mt-16 flex flex-col lg:mt-0 top-0 px-5 left-0 bg-white dark:bg-gray-900 dark:border-gray-800 text-gray-900 h-full transition-all duration-300 ease-in-out z-50 border-r border-gray-200 
        ${
          isExpanded || isMobileOpen
            ? "w-[290px]"
            : isHovered
            ? "w-[290px]"
            : "w-[90px]"
        }
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`py-8 flex  ${
          !isExpanded && !isHovered ? "lg:justify-center" : "justify-start"
        }`}
      >
        <Link href="/">
          {isExpanded || isHovered || isMobileOpen ? (
            <>
            <div className="flex">
              <Warehouse className="mr-4 text-slate-900 dark:hidden"/>
              <h1 className="text-slate-900 text-lg dark:hidden">
                Discovery IMS
              </h1>
              <Warehouse className="mr-4 text-slate-50 hidden dark:block"/>
              <h1 className="text-slate-50 text-lg hidden dark:block">
                Discovery IMS
              </h1>
            </div>
            </>
          ) : (
            <div className="flex flex-col items-center">
              <Warehouse className="mr-2 text-slate-900 dark:hidden"/>
              <h1 className="mr-2 text-slate-900 text-lg dark:hidden">
                IMS
              </h1>
              <Warehouse className="mr-2 text-slate-50 hidden dark:block"/>
              <h1 className="mr-2 text-slate-50 text-lg hidden dark:block">
                IMS
              </h1>
            </div>
          )}
        </Link>
      </div>
      <div className="flex flex-col overflow-y-auto  duration-300 ease-linear no-scrollbar">
        <nav className="mb-6">
          <div className="flex flex-col gap-4">
            <div>
              <h2
                className={`mb-4 text-xs uppercase flex leading-[20px] text-gray-400 ${
                  !isExpanded && !isHovered
                    ? "lg:justify-center"
                    : "justify-start"
                }`}
              >
                {isExpanded || isHovered || isMobileOpen ? (
                  "Menu"
                ) : (
                  <HorizontaLDots />
                )}
              </h2>
              {renderMenuItems(navItems, "main")}
            </div>
            <div>
              <h2
                className={`mb-4 text-xs uppercase flex leading-[20px] text-gray-400 ${
                  !isExpanded && !isHovered
                    ? "lg:justify-center"
                    : "justify-start"
                }`}
              >
                {isExpanded || isHovered || isMobileOpen ? (
                  "laporan"
                ) : (
                  <HorizontaLDots />
                )}
              </h2>
              {renderMenuItems(laporanItems, "laporan")}
            </div>
            <div>
              <h2
                className={`mb-4 text-xs uppercase flex leading-[20px] text-gray-400 ${
                  !isExpanded && !isHovered
                    ? "lg:justify-center"
                    : "justify-start"
                }`}
              >
                {isExpanded || isHovered || isMobileOpen ? (
                  "pengaturan"
                ) : (
                  <HorizontaLDots />
                )}
              </h2>
              {renderMenuItems(settingItems, "pengaturan")}
            </div>
          </div>
        </nav>
        {/* {isExpanded || isHovered || isMobileOpen ? <SidebarWidget /> : null} */}
      </div>
    </aside>
  );
};

export default AppSidebar;
