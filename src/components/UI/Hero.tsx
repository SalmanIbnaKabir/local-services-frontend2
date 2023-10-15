"use client";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="hero min-h-screen bg-[url('/image/hero.jpg')]">
      <div className="hero-overlay bg-opacity-80"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-lg">
          <h1 className="mb-5 text-5xl font-bold text-white">Welcome</h1>
          <p className="mb-5 text-justify">
            to LService, your go-to destination for connecting with local
            service providers in your area. Whether you&apos;re in need of a
            skilled plumber, an experienced electrician, or any other service
            professional, we&apos;ve got you covered. Say goodbye to endless
            online searches and unreliable recommendations. We&apos;ve made
            finding and hiring local services as easy as a few clicks.
          </p>
          <Link href="/service">
            <button className="btn btn-success">Get Your Service</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
