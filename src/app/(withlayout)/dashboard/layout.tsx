"use client";
import { getFromLocalStorage } from "@/utils/localStorage";
import Link from "next/link";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const userData = getFromLocalStorage("user") as string;
  const user = userData ? JSON.parse(userData) : null;
  // console.log(user);
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
          <label
            className="btn btn-circle swap swap-rotate lg:hidden"
            htmlFor="my-drawer-2"
          >
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" />

            {/* hamburger icon */}
            <svg
              className="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>

            {/* close icon */}
            <svg
              className="swap-on fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </label>
          <div className="text-sm breadcrumbs ms-1 mt-1">
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-blue-500">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>
          {/* all content here ===================================================================== */}
          {children}
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <Link href="/dashboard">Order</Link>
            </li>
            {user?.email && user?.email === "admin@gmail.com" && (
              <ul>
                <li>
                  <Link href="/dashboard/allUser">All User</Link>
                </li>
                <li>
                  <Link href="/dashboard/createService">Create Service</Link>
                </li>
                <li>
                  <Link href="/dashboard/allUser">Manage Service</Link>
                </li>
              </ul>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
