"use client";

import Loading from "@/app/loading";
import { useAllUserQuery } from "@/redux/api/userApi";
import Link from "next/link";

const AllUser = () => {
  const { data, isLoading } = useAllUserQuery(undefined);
  if (isLoading) {
    return <Loading />;
  }
  console.log(data);
  return (
    <div className="mt-5">
      <h1 className="text-center font-bold my-5">All User</h1>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Details</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.data &&
                data?.data?.map((user: any) => (
                  <tr key={user._id}>
                    <th>{user?.name}</th>
                    <td>{user?.email}</td>
                    <td>{user?.address}</td>
                    <td>
                      <Link href={`/dashboard/allUser/${user?._id}`}>
                        <button className="btn btn-outline btn-success btn-xs me-1 ">
                          View
                        </button>
                      </Link>
                      <button className="btn btn-outline btn-warning btn-xs">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUser;
