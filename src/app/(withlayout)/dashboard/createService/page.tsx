"use client";
import { getFromLocalStorage } from "@/utils/localStorage";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const OrderPage = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = () => {
    // console.log(data);
    toast.success("Create Service Successfully");
    reset();
    router.push("/service");
  };
  return (
    <div className="container mx-auto my-10">
      <h1 className="text-center font-bold my-5">Create Service </h1>

      <div className="flex justify-center ">
        <div className="card w-96 bg-base-100 shadow-xl">
          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Service Title</span>
              </label>
              <input
                type="text"
                placeholder="Service Title"
                className="input input-bordered w-full max-w-xs"
                {...register("title", {
                  required: {
                    value: true,
                    message: "Title is Required",
                  },
                })}
              />
              <label className="label">
                {errors.title?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.title.message as string}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Service Category</span>
              </label>
              <input
                type="text"
                placeholder="Service Category"
                className="input input-bordered w-full max-w-xs"
                {...register("category", {
                  required: {
                    value: true,
                    message: "category is Required",
                  },
                })}
              />
              <label className="label">
                {errors.category?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.category.message as string}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Service Image Link</span>
              </label>
              <input
                type="text"
                placeholder="Service Image"
                className="input input-bordered w-full max-w-xs"
                {...register("image", {
                  required: {
                    value: true,
                    message: "image is Required",
                  },
                })}
              />
              <label className="label">
                {errors.image?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.image.message as string}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Service Price</span>
              </label>
              <input
                type="text"
                placeholder="Service Price"
                className="input input-bordered w-full max-w-xs"
                {...register("pricing", {
                  required: {
                    value: true,
                    message: "pricing is Required",
                  },
                })}
              />
              <label className="label">
                {errors.pricing?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.pricing.message as string}
                  </span>
                )}
              </label>
            </div>

            <div className="from-control">
              <label className="label">
                <span className="label-text">Service Description</span>
              </label>
              <textarea
                className="textarea textarea-primary w-full"
                placeholder="Service Description"
                {...register("description", {
                  required: {
                    value: true,
                    message: "Please Provide a description",
                  },
                })}
              />
              <label className="label">
                {errors.description?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.description.message as string}
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
