"use client"

import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { formAction } from "./form-action"
import { twMerge } from "tailwind-merge"
import { Alert, AlertTitle } from "@/components/ui/alert"

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm()
  const [submittedSuccessFully, setSubmittedSuccessFully] = useState(false)
  const [showMessage, setShowMessage] = useState(false)

  const submitFn = async (data) => {
    try {
      const response = await formAction(data)

      if (response.data) {
        setSubmittedSuccessFully(true)
        setShowMessage(true)
        setTimeout(() => setShowMessage(false), 2500)
      } else if (response.error) {
        setSubmittedSuccessFully(false)
        setShowMessage(true)
        setTimeout(() => setShowMessage(false), 2500)
      }
    } catch (error) {
      setSubmittedSuccessFully(false)
      setShowMessage(true)
      setTimeout(() => setShowMessage(false), 2500)
      console.log(error)
    }
  }

  return (
    <div className="space-y-4">
      {showMessage &&
        (submittedSuccessFully ? (
          <Alert className="border-green-600 text-green-600">
            <AlertTitle>Message Sent Successfully!!</AlertTitle>
          </Alert>
        ) : (
          <Alert variant="destructive">
            <AlertTitle>Error Sending Message !!</AlertTitle>
          </Alert>
        ))}

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
            Subject* <span className="text-xs text-red-600">{errors.subject ? errors.subject.message : ""}</span>
          </label>
          <input
            type="text"
            className="w-full outline-none border-b-2 border-black bg-transparent"
            placeholder="Enter Your Email"
            {...register("subject", {
              required: "Subject field empty",
              maxLength: {
                value: 100,
                message: "100 characters maximum",
              },
            })}
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
            className={twMerge(
              "rounded-md w-20 px-4 py-2 bg-blue-600 text-white inline-block",
              isSubmitting ? "opacity-50" : ""
            )}
            disabled={isSubmitting}
            onClick={handleSubmit(submitFn)}
          >
            {isSubmitting ? (
              <span className="animate-spin border-2 border-white border-b-blue-500 inline-block rounded-full w-4 h-4"></span>
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
