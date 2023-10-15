"use client";
import Link from "next/link";

const DashboardPage = () => {
  return (
    <div className="mt-5">
      <h1 className="text-center font-bold my-5">Order Details</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Service</th>
              <th>Payment</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Electricians</td>
              <td className="text-green-600">Completed</td>
              <td className="bg-green-300">Accepted</td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>Garden Cleaner</td>
              <td className="text-red-500">Pending</td>
              <td className="bg-yellow-300">Pending</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>Plumber</td>
              <td className="text-red-500">Pending</td>
              <td className="bg-yellow-300">Pending</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardPage;
