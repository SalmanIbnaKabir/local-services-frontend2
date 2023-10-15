"use client";

import { useUserSignupMutation } from "@/redux/api/userApi";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

interface SignUpFormInputs {
  name: string;
  email: string;
  address: string;
  password: string;
}

const SignUp = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [state, setState] = useState(true);
  const [userSignup] = useUserSignupMutation();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<SignUpFormInputs>();
  const onSubmit = async (data: SignUpFormInputs) => {
    const res = await userSignup(data).unwrap();
    if (res?.status) {
      toast.success(res?.message);
      reset();
      router.push("/login");
    } else {
      toast.error(res?.message);
      reset();
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200 ">
      <div className="hero-content flex-col md:flex-row ">
        <div className="text-center lg:text-left hidden md:block">
          <Image
            className="max-w-screen-sm"
            src="/image/signup.png"
            width={200}
            height={200}
            layout="responsive"
            alt="Login Image"
          />
        </div>
        <div className="card flex-shrink-0  w-full md:max-w-sm  shadow-2xl bg-base-100 ">
          <h3 className="text-center mt-4 font-medium">Register</h3>
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
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is Required",
                  },

                  minLength: {
                    value: 6,
                    message: "Must 6 character in  Password",
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message as string}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message as string}
                  </span>
                )}
              </label>

              <label className="cursor-pointer label">
                <span className="label-text"> privacy policy</span>
                <input
                  type="checkbox"
                  className="checkbox checkbox-primary"
                  onClick={() => {
                    setState(!state);
                  }}
                />
              </label>
            </div>
            <div className="form-control">
              <button className="btn btn-primary" disabled={state}>
                Register
              </button>
              <Link
                href="/login"
                className="text-sm mt-2 text-blue-500 hover:underline"
              >
                Have a account Login
              </Link>
            </div>
          </form>

          <div className="card-body pt-0">
            <div className="form-control">
              <button
                onClick={() =>
                  signIn("google", {
                    callbackUrl: "https://localservice.vercel.app/profile",
                  })
                }
                className="btn btn-outline btn-primary"
              >
                Login with Google
              </button>
            </div>
            <div className="form-control">
              <button
                onClick={() =>
                  signIn("github", {
                    callbackUrl: "https://localservice.vercel.app/profile",
                  })
                }
                className="btn btn-outline btn-primary"
              >
                Login with Github
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
