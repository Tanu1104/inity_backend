import React from "react";
import { NavLink } from "react-router-dom";

const ProfileSidebar = () => {
  const activeLink = "bg-gray-200 text-gray-800";
  const normalLink = "hover:bg-gray-100";

  return (
    <aside className="w-64 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-6">My Account</h2>
      <nav className="flex flex-col gap-2">
        <NavLink
          to="/orders"
          className={({ isActive }) =>
            `px-4 py-2 rounded-md text-sm font-medium ${
              isActive ? activeLink : normalLink
            }`
          }
        >
          My Orders
        </NavLink>
        <NavLink
          to="/wishlist"
          className={({ isActive }) =>
            `px-4 py-2 rounded-md text-sm font-medium ${
              isActive ? activeLink : normalLink
            }`
          }
        >
          Wishlist
        </NavLink>
        <NavLink
          to="/edit-profile"
          className={({ isActive }) =>
            `px-4 py-2 rounded-md text-sm font-medium ${
              isActive ? activeLink : normalLink
            }`
          }
        >
          Edit Profile
        </NavLink>
        <NavLink
          to="/notifications"
          className={({ isActive }) =>
            `px-4 py-2 rounded-md text-sm font-medium ${
              isActive ? activeLink : normalLink
            }`
          }
        >
          Notifications
        </NavLink>
      </nav>
    </aside>
  );
};

export default ProfileSidebar;
