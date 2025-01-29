"use client";

import { useState } from "react";
import {
  faLayerGroup,
  faObjectUngroup,
  faObjectGroup,
  faBoxArchive,
  faUserGroup,
  faCalendar,
  faBook,
} from "@fortawesome/free-solid-svg-icons";
import { ChevronFirst, ChevronLast } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { cn } from "../lib/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface NavItem {
  icon: typeof faLayerGroup;
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { icon: faObjectGroup, label: "Index", href: "/" },
  { icon: faBook, label: "Booked Rooms", href: "/booked-rooms" },
  { icon: faUserGroup, label: "Users", href: "/users" },
  { icon: faLayerGroup, label: "Rooms", href: "/rooms" },
  { icon: faCalendar, label: "Schedule", href: "/schedule" },
  { icon: faObjectUngroup, label: "Backlogs", href: "/backlogs" },
  { icon: faBoxArchive, label: "Archive", href: "/archive" },
];

export default function NavBar() {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <nav
      className={cn(
        "flex flex-col h-screen bg-[#6b92e5] text-white transition-all duration-300 items-center gap-10",
        isExpanded ? "w-64" : "w-32"
      )}
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-end p-4 hover:bg-white/10 transition-colors gap-5 "
      >
        <h1
          className={cn(
            "font-righteous text-white text-xl mr-auto",
            !isExpanded && "hidden"
          )}
        >
          ROOMIE
        </h1>
        {isExpanded ? (
          <ChevronFirst className="w-6 h-6" />
        ) : (
          <ChevronLast className="w-6 h-6" />
        )}
      </button>

      <div className="flex-col flex gap-6 ">
        {navItems.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            style={{ padding: "0.5rem 1.5rem" }}
            className={cn(
              "flex flex-row items-center hover:bg-[rgba(226,240,253,0.4)] hover:text-blue-500 hover:shadow-lg  transition-colors gap-3 rounded-sm",
              !isExpanded && "justify-center"
            )}
          >
            <FontAwesomeIcon icon={item.icon} className="w-6 h-6 " />
            {isExpanded && (
              <span className="ml-4 text-sm font-medium">{item.label}</span>
            )}
          </Link>
        ))}
      </div>
    </nav>
  );
}
