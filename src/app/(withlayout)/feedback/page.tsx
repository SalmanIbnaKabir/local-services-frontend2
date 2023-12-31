"use client";
import { getFromLocalStorage } from "@/utils/localStorage";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const FeedbackForm = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const userData = getFromLocalStorage("user") as string;
  const user = userData ? JSON.parse(userData) : null;

  const values = {
    email:
      user?.email ||
      (session?.user?.email ? session?.user?.email : "user@email.com"),
    name: "",
    suggestions: "",
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
    toast.success("Thanks For Your Feedback");
    reset();
    router.push("/");
  };
  return (
    <div className="container mx-auto my-10">
      <h1 className="text-center font-bold my-5">
        Share Your Feedback and Help Us Improve
      </h1>

      <div className="flex justify-center ">
        <div className="card w-96 bg-base-100 shadow-xl">
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
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-blue-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-blue-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-blue-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-blue-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-blue-400"
              />
            </div>

            <div className="from-control">
              <label className="label">
                <span className="label-text">Suggestions Box</span>
              </label>
              <textarea
                className="textarea textarea-primary w-full"
                placeholder="Reviews"
                {...register("suggestions", {
                  required: {
                    value: true,
                    message: "Please Provide Suggestions",
                  },
                })}
              />
              <label className="label">
                {errors.suggestions?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.suggestions.message as string}
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

export default FeedbackForm;

// Feedback Form
// Fields for User's Name and Email
// Rating Scale
// Comments or Suggestions Box
// Submit Button
// Clear Form Button
// Thank You Message
