"use server"

import { Resend } from "resend"

const formAction = async (formData) => {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const { data, error } = await resend.emails.send({
      from: `${formData.name} <onboarding@resend.dev>`,
      to: ["adhikarisandil32@gmail.com"],
      subject: `${formData.subject} - ${formData.name} <${formData.email}>`,
      html: formData.description,
    })

    return { data, error }
  } catch (error) {
    return { error }
  }
}

export { formAction }
