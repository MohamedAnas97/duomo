import Logo from "shared/Logo/Logo";
import SocialsList1 from "shared/SocialsList1/SocialsList1";
// import { CustomLink } from "data/types";
import React from "react";

// export interface WidgetFooterMenu {
//   id: string;
//   title: string;
//   menus: CustomLink[];
// }

// const widgetMenus: WidgetFooterMenu[] = [
//   {
//     id: "5",
//     title: "Getting started",
//     menus: [
//       { href: "#", label: "Installation" },
//       { href: "#", label: "Release Notes" },
//       { href: "#", label: "Upgrade Guide" },
//       { href: "#", label: "Browser Support" },
//       { href: "#", label: "Editor Support" },
//       { href: "#", label: "Utility-First" },
//       { href: "#", label: "Dark Mode" },
//       { href: "#", label: "Responsive Design" },
//     ],
//   },
//   {
//     id: "1",
//     title: "Explore",
//     menus: [
//       { href: "#", label: "Design features" },
//       { href: "#", label: "Prototyping" },
//       { href: "#", label: "Design systems" },
//       { href: "#", label: "Pricing" },
//       { href: "#", label: "Customers" },
//       { href: "#", label: "Security" },
//       { href: "#", label: "Integrations" },
//       { href: "#", label: "Contact" },
//     ],
//   },
//   {
//     id: "2",
//     title: "Resources",
//     menus: [
//       { href: "#", label: "Best practices" },
//       { href: "#", label: "Support" },
//       { href: "#", label: "Developers" },
//       { href: "#", label: "Learn design" },
//       { href: "#", label: "What's new" },
//       { href: "#", label: "Releases" },
//       { href: "#", label: "Careers" },
//       { href: "#", label: "About us" },
//     ],
//   },
//   {
//     id: "4",
//     title: "Community",
//     menus: [
//       { href: "#", label: "Discussion Forums" },
//       { href: "#", label: "Code of Conduct" },
//       { href: "#", label: "Community Resources" },
//       { href: "#", label: "Contributing" },
//       { href: "#", label: "Concurrent Mode" },
//       { href: "#", label: "API Reference" },
//       { href: "#", label: "Advanced Guides" },
//       { href: "#", label: "Main Concepts" },
//     ],
//   },
// ];

const Footer: React.FC = () => {
//   const renderWidgetMenuItem = (menu: WidgetFooterMenu, index: number) => {
//     return (
//       <div key={index} className="text-sm">
//         <h2 className="font-semibold text-neutral-700 dark:text-neutral-200">
//           {menu.title}
//         </h2>
//         <ul className="mt-5 space-y-4">
//           {menu.menus.map((item, index) => (
//             <li key={index}>
//               <a
//                 key={index}
//                 className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
//                 href={item.href}
//               >
//                 {item.label}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   };

  return (
    <div className="nc-Footer relative py-5 border-t border-neutral-200 dark:border-neutral-700">
      <div className="container grid grid-cols-1 gap-y-10 gap-x-5">
        <div className="flex justify-between">
          <div className="col-span-2 md:col-span-1">
            <Logo />
          </div>
          <div className=" flex items-center md:col-span-3">
            <SocialsList1 className="flex items-center space-x-3  lg:flex-row  lg:items-end" />
          </div>
        </div>

        {/* {widgetMenus.map(renderWidgetMenuItem)} */}
      </div>
    </div>
  );
};

export default Footer;
