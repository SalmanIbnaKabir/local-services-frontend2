"use client";
import Image from "next/image";

const PreviewSection = () => {
  return (
    <div className="bg-gray-100 py-5">
      <h1 className="text-center text-2xl font-bold mt-3">About Us</h1>
      <div className="container md:grid grid-cols-2 mx-auto gap-8 items-center my-10 p-10 ">
        <div>
          <Image
            className="rounded"
            src="/image/hero.jpg"
            alt="Preview Section"
            width={500}
            height={500}
          />
        </div>
        <div>
          <h2 className="text-4xl font-bold my-3 font-serif">Why Choose Us</h2>
          <p>
            we are committed to making your life easier by connecting you with
            reliable local service providers. We understand that finding
            trustworthy professionals for your home maintenance, repair, and
            improvement needs can be a daunting task. That&apos;s where we come
            in.
          </p>
          <br />
          <p>
            Our mission is simple: to bridge the gap between service seekers and
            service providers. We believe that everyone deserves access to
            top-notch local services, and we&aposre here to make that a reality.
            With a passion for community, quality, and convenience, we&aposve
            created a platform that brings skilled professionals directly to
            your doorstep.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PreviewSection;
