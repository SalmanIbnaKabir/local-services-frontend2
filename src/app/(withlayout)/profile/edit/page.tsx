"use client";
import { getFromLocalStorage } from "@/utils/localStorage";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const EditProfile = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const userData = getFromLocalStorage("user") as string;
  const user = userData ? JSON.parse(userData) : null;

  const values = {
    name:
      user?.name || (session?.user?.name ? session.user.name : "Default Name"),
    address: user?.address ? user?.address : "Your Address",
    email:
      user?.email ||
      (session?.user?.email ? session?.user?.email : "user@email.com"),
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: values,
  });

  const onSubmit = () => {
    toast.success("Your profile Updated successfully");
    router.push("/profile");
  };
  return (
    <div className="container mx-auto my-10">
      <h1 className="text-center font-bold my-5">Update Profile</h1>
      <div className="flex justify-center ">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <Image
              src={
                session?.user?.image ? session?.user?.image : "/image/user.png"
              }
              alt="Profile Image"
              width={150}
              height={150}
              className="rounded-xl"
            />
          </figure>
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
                <span className="label-text">Address</span>
              </label>
              <input
                type="text"
                placeholder="Enter Address"
                className="input input-bordered w-full max-w-xs"
                {...register("address", {
                  required: {
                    value: true,
                    message: "Address is Required",
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
              <button className="btn btn-primary">Update Your Profile</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
