"use client";
import Loading from "@/app/loading";
import { useSingleUserQuery } from "@/redux/api/userApi";
import Image from "next/image";
import Link from "next/link";

const UserDetails = ({ params }: any) => {
  const { id } = params;
  const { data, isLoading } = useSingleUserQuery(id);

  if (isLoading) {
    return <Loading />;
  }

  const user = data?.data;
  return (
    <div className="container mx-auto my-5">
      <div className="text-sm breadcrumbs ms-1">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link href="/dashboard/allUser">All User</Link>
          </li>
          <li className="text-blue-500">User Details </li>
        </ul>
      </div>
      <h1 className="text-center font-bold">User Details</h1>
      <div className="flex justify-center items-center">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <Image
              src="/image/user.png"
              alt="Profile Image"
              width={150}
              height={150}
              className="rounded-xl"
            />
          </figure>
          <div className="card-body gap-y-4 text-start">
            <p>Name: {user?.name}</p>
            <p>
              Email:
              {user?.email}
            </p>
            <p>{user?.address ? `Address: ${user?.address}` : ""}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
