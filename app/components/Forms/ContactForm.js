"use client"

import React from "react"
import { useForm } from "react-hook-form"

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const submitFn = (data) => {
    console.log(data)
  }

  return (
    <>
      <div className="space-y-8">
        <div className="flex flex-col gap-0.5">
          <label>
            Name* <span className="text-xs text-red-600">{errors.name ? errors.name.message : ""}</span>
          </label>
          <input
            type="text"
            className="w-full outline-none border-b-2 border-black bg-transparent"
            placeholder="Enter Your Name"
            {...register("name", { required: "Name field empty" })}
            required
          />
        </div>

        <div className="flex flex-col gap-0.5">
          <label>
            Email* <span className="text-xs text-red-600">{errors.email ? errors.email.message : ""}</span>
          </label>
          <input
            type="email"
            className="w-full outline-none border-b-2 border-black bg-transparent"
            placeholder="Enter Your Email"
            {...register("email", { required: "Email field empty" })}
            required
          />
        </div>

        <div className="flex flex-col gap-0.5">
          <label>
            Description*{" "}
            <span className="text-xs text-red-600">{errors.description ? errors.description.message : ""}</span>
          </label>
          <textarea
            rows={5}
            className="p-1 w-full outline-none border-2 border-black rounded-md bg-transparent"
            {...register("description", { required: "Description field empty" })}
            placeholder="What do you want to hire me for ?"
          ></textarea>
        </div>

        <div>
          <button
            type="submit"
            className="rounded-md px-4 py-2 bg-blue-600 text-white"
            onClick={handleSubmit(submitFn)}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  )
}
