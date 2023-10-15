"use client";
import Image from "next/image";
import Link from "next/link";

export default function ServiceCard({ service }: any) {
  // {
  //   _id: '652ac4f0deb91add88a26f36',
  //   title: 'John\'s Plumbing Services',
  //   category: 'Plumbing',
  //   description: 'Your trusted plumbing experts with over 10 years of experience.',
  //   image: '/image/image1.jpg',
  //   pricing: '$80/hour'
  // }
  console.log(service);
  return (
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
  );
}
