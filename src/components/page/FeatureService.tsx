"use client";
import Loading from "@/app/loading";
import ServiceCard from "@/components/UI/ServiceCard";
import Image from "next/image";
import Link from "next/link";

const FeatureService = () => {
  const limitService = [
    {
      _id: "652ac4f0deb91add88a26f36",

      title: "John's Plumbing Services",

      category: "Plumbing",

      description:
        "Your trusted plumbing experts with over 10 years of experience.",

      image: "/image/image1.jpg",

      pricing: "$80/hour",
    },

    {
      _id: "652ac4f0deb91add88a26f37",

      title: "Smith Electrical Services",

      category: "Electrical",

      description:
        "Experienced electricians for residential and commercial projects.",

      image: "/image/image2.jpg",

      pricing: "Varies by project",
    },

    {
      _id: "652ac4f0deb91add88a26f38",

      title: "Green Thumb Landscaping",

      category: "Landscaping",

      description: "Creating beautiful landscapes for homes and businesses.",

      image: "/image/image3.jpg",

      pricing: "Custom quotes available",
    },
  ];
  return (
    <div className="container mx-auto my-5">
      <h1 className="text-center font-bold text-3xl my-5">Feature Service</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 pb-20 justify-items-center ">
        {limitService &&
          limitService.map((service: any) => (
            <div
              className="card min-w-[320px] w-96 bg-base-100 p-1 border  border-indigo-200 shadow-xl"
              key={service?._id}
            >
              <figure>
                <Image
                  src={service?.image}
                  alt="next img"
                  width={500}
                  height={500}
                  loading="lazy"
                  unoptimized
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{service?.tile}</h2>
                <p>Service: {service?.category}</p>
                <p>
                  Price:{" "}
                  <span className="text-orange-500 font-semibold">
                    {service?.pricing}
                  </span>
                </p>
                <div className="card-actions justify-end">
                  <Link href={`/service/${service?._id}`}>
                    <button className="btn btn-primary">Details</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="flex justify-center ">
        <Link href="/service">
          <button className="btn btn-success">All Service</button>
        </Link>
      </div>
    </div>
  );
};

export default FeatureService;
