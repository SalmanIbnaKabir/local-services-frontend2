"use client";
import { comment } from "postcss";
import { FormEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function ServiceReview() {
  const [data, setData] = useState([{ comment: "this Service is good" }]);

  const { register, handleSubmit, reset } = useForm();

  const onsubmit = (value: any) => {
    setData((prevData) => [...prevData, value]);
    toast.success("Your Review has been submitted");
    reset();
  };

  return (
    <div className="max-w-7xl mx-auto my-10">
      <form
        className="flex gap-5 items-center"
        onSubmit={handleSubmit(onsubmit)}
      >
        <textarea
          className="textarea textarea-primary w-full"
          placeholder="Reviews"
          {...register("comment", {
            required: true,
          })}
        />

        <button className="btn btn-primary">Reviews</button>
      </form>
      <div className="mt-10">
        {data?.map((comment: any, i: number) => (
          <div key={i} className="flex gap-3 items-center mb-5">
            <div className="avatar">
              <div className="w-6 rounded-full">
                <img src="https://github.com/shadcn.png" alt="User" />
              </div>
            </div>

            <p>{comment?.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
