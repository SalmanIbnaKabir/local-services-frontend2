"use client";
import { getFromLocalStorage } from "@/utils/localStorage";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const ProfilePage = () => {
  const { data: session } = useSession();
  const userData = getFromLocalStorage("user") as string;
  const user = userData ? JSON.parse(userData) : null;
  return (
    <div className="container mx-auto my-5">
      <h1 className="text-center font-bold">Your Profile</h1>
      <div className="flex justify-center items-center">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <Image
              src={
                session?.user?.image ? session?.user?.image : "/image/user.png"
              }
              alt="Profile Image"
              width={150}
              height={150}
              className="rounded-xl"
            />
          </figure>
          <div className="card-body gap-y-4 text-start">
            <p>
              Name: {user?.name}
              {session?.user?.name}
            </p>
            <p>
              Email:
              {user?.email}
              {session?.user?.email}
            </p>
            <p>{user?.address ? `Address: ${user?.address}` : ""}</p>
            <div className="card-actions">
              <Link href="/profile/edit">
                <button className="btn btn-primary">Edit Profile</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
