"use client";
import { useSingleServiceQuery } from "@/redux/api/serviceApi";
import Loading from "@/app/loading";
import Image from "next/image";
import ServiceReview from "@/components/page/ServiceReviews";
import Link from "next/link";

const DetailsPage = ({ params }: any) => {
  const { id } = params;
  const { data, isLoading } = useSingleServiceQuery(id);
  if (isLoading) {
    return <Loading />;
  }

  // console.log(data);
  return (
    <div className="container mx-auto mt-5">
      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/service">Service</Link>
          </li>
          <li className="text-blue-500">Service Details </li>
        </ul>
      </div>
      <h1 className="text-center font-medium text-xl my-3">Service Details</h1>
      <div className="card lg:card-side bg-base-100  shadow-xl">
        <figure className="lg:w-1/2">
          <Image
            src={data?.image}
            alt="Album"
            width={300}
            height={300}
            layout="responsive"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{data?.title}</h2>
          <p>Service: {data?.category}</p>
          <p>Description: {data?.description}</p>
          <p>
            We pride ourselves on being the local service experts. Our network
            of service providers knows your community, its unique challenges,
          </p>
          <p>
            Price:{" "}
            <span className="text-orange-500  font-semibold">
              {data?.pricing}
            </span>
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Order Service</button>
          </div>
        </div>
      </div>

      <div>
        <ServiceReview />
      </div>
    </div>
  );
};

export default DetailsPage;
