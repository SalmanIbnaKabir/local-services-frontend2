"use client";

import Loading from "@/app/loading";
import ServiceCard from "@/components/UI/ServiceCard";
import { useGetServicesQuery } from "@/redux/api/serviceApi";
import Link from "next/link";
import { useState } from "react";

const AllService = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const { data, isLoading } = useGetServicesQuery(undefined);
  if (isLoading) {
    return <Loading />;
  }

  const handlePageSizeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newSize = parseInt(event.target.value);
    setPageSize(newSize);
    setCurrentPage(1);
  };

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = currentPage * pageSize;
  const currentPageItems = data?.data?.slice(startIndex, endIndex);

  return (
    <div className="container mx-auto my-5">
      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li className="text-blue-500">Service </li>
        </ul>
      </div>
      <h1 className="text-center font-medium text-xl my-4">All Service </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 pb-20 justify-items-center">
        {currentPageItems?.map((service: any) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
      <div className="flex justify-between items-center">
        <div className="join">
          {Array.from({ length: Math.ceil(data?.data.length / pageSize) }).map(
            (_, page) => (
              <button
                key={page + 1}
                className={`join-item btn ${
                  currentPage === page + 1 ? "btn-active bg-blue-400" : ""
                }`}
                onClick={() => setCurrentPage(page + 1)}
              >
                {page + 1}
              </button>
            )
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="pageSize">Page Size:</label>
          <select
            id="pageSize"
            value={pageSize}
            onChange={handlePageSizeChange}
            className="select select-primary select-sm "
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default AllService;
