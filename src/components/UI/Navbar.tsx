"use client";
import { getFromLocalStorage } from "@/utils/localStorage";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const { data: session } = useSession();
  const userData = getFromLocalStorage("user") as string;
  const user = userData ? JSON.parse(userData) : null;

  // console.log(user);
  const logout = () => {
    signOut({
      callbackUrl: "http://localhost:3000/login",
    });
    localStorage.removeItem("user");
    router.push("/login");
  };
  return (
    <div className="bg-primary">
      <div className="navbar bg-transparent lg:container lg:mx-auto">
        <div className="flex-1">
          <Link
            href="/"
            className="btn btn-ghost text-white normal-case text-xl"
          >
            LService
          </Link>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <Image
                  src={
                    session?.user?.image
                      ? session?.user?.image
                      : "/image/user.png"
                  }
                  width={20}
                  height={20}
                  alt="profile Image"
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              {session?.user || user?.email ? (
                <ul>
                  <li>
                    <a onClick={logout}>Logout</a>
                  </li>
                  <li>
                    <Link href="/profile"> Profile</Link>
                  </li>
                  <li>
                    <Link href="/feedback">Feedback</Link>
                  </li>
                  <li>
                    <Link href="/dashboard"> Dashboard</Link>
                  </li>
                  <li>
                    <Link href="/service"> Service</Link>
                  </li>
                </ul>
              ) : (
                <ul>
                  <li>
                    <Link href="/login">Login</Link>
                  </li>
                </ul>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
