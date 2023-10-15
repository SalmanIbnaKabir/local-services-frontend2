"use client";

import { useUserLoginMutation } from "@/redux/api/userApi";
import { setToLocalStorage } from "@/utils/localStorage";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

interface LoginFormInputs {
  email: string;
  password: string;
}

const Login = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [userLogin] = useUserLoginMutation();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<LoginFormInputs>();
  const onSubmit = async (data: LoginFormInputs) => {
    const res = await userLogin(data).unwrap();
    if (res?.status) {
      toast.success(res?.message);
      // console.log(res?.data);
      setToLocalStorage("user", JSON.stringify(res?.data));
      reset();
      router.push("/profile");
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
            src="/image/login.png"
            width={200}
            height={200}
            layout="responsive"
            alt="Login Image"
          />
        </div>
        <div className="card flex-shrink-0  w-full md:max-w-sm  shadow-2xl bg-base-100 ">
          <h3 className="text-center mt-4 font-medium">Login</h3>
          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
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
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <button className="btn btn-primary">Login</button>
              <Link
                href="/signup"
                className="text-sm mt-2 text-blue-500 hover:underline"
              >
                Dont&apos;t have a account Register
              </Link>
            </div>
          </form>

          <div className="card-body pt-0">
            <div className="form-control">
              <button
                onClick={() =>
                  signIn("google", {
                    callbackUrl: "http://localhost:3000",
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
                    callbackUrl: "http://localhost:3000",
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

export default Login;
