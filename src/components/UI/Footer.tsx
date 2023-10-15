"use client";

import { toast } from "react-toastify";

export default function Footer() {
  const submit = () => {
    toast.success("Thanks For Subscribe");
  };
  return (
    <footer className="footer p-10 flex justify-around flex-wrap bg-indigo-600 text-white ">
      <div>
        <span className="footer-title">Services</span>
        <a className="link link-hover">Plumber</a>
        <a className="link link-hover">Electrician</a>
        <a className="link link-hover">Ac Mechanics</a>
        <a className="link link-hover">Garden Cleaner</a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact:- +0882165214</a>
        <a className="link link-hover"> Address: Dhaka, Dhaka Gulshan</a>
      </div>

      <div>
        <span className="footer-title ">Newsletter</span>
        <div className="form-control w-80">
          <label className="label">
            <span className="label-text text-white">
              Enter your email address
            </span>
          </label>
          <form onSubmit={submit}>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16 text-black"
                required
              />
              <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
}
