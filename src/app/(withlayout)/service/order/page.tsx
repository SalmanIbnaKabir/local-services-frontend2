"use client";
import { getFromLocalStorage } from "@/utils/localStorage";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const OrderPage = () => {
  const params = useSearchParams();
  const orderId = params.get("orderId");
  // console.log(orderId);
  const router = useRouter();
  const { data: session } = useSession();
  const userData = getFromLocalStorage("user") as string;
  const user = userData ? JSON.parse(userData) : null;

  const values = {
    email:
      user?.email ||
      (session?.user?.email ? session?.user?.email : "user@email.com"),
    name: "",
    address: "",
    date: Date.now(),
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: values,
  });

  const onSubmit = () => {
    // console.log(data);
    toast.success("Order Placed successfully");
    reset();
    router.push("/dashboard");
  };
  return (
    <div className="container mx-auto my-10">
      <h1 className="text-center font-bold my-5">Order Details Form </h1>

      <div className="flex justify-center ">
        <div className="card w-96 bg-base-100 shadow-xl">
          <p className="text-gray-500 text-center">OrderId: {orderId}</p>
          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter Full Name"
                className="input input-bordered w-full max-w-xs"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is Required",
                  },
                })}
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message as string}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is Required",
                  },

                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a Valid Email",
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message as string}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message as string}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Select Date</span>
              </label>
              <input
                type="date"
                className="input input-bordered w-full max-w-xs"
                {...register("date", {
                  required: {
                    value: true,
                    message: "Please Provide a Date",
                  },
                })}
              />
              <label className="label">
                {errors.date?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.date.message as string}
                  </span>
                )}
              </label>
            </div>

            <div className="from-control">
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <textarea
                className="textarea textarea-primary w-full"
                placeholder="Reviews"
                {...register("address", {
                  required: {
                    value: true,
                    message: "Please Provide a Address",
                  },
                })}
              />
              <label className="label">
                {errors.address?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.address.message as string}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control">
              <button className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
