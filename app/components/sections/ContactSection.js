import React from "react"
import ContactForm from "../Forms/ContactForm"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import Link from "next/link"
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons"

export default function ContactSection({ providedRef }) {
  return (
    <div className="bg-gray-50" id="contact" ref={providedRef}>
      <div className="container">
        <div className="px-4 py-8 space-y-8">
          <div>
            <span className="text-xs tracking-widest">HIRE ME!</span>
          </div>

          <div className="flex md:flex-row flex-col gap-8">
            <div className="md:w-1/2 space-y-4 md:mt-8">
              <div className="flex gap-4 items-center">
                <p className="p-4 h-16 w-16 flex items-center justify-center rounded-full border-2 border-[#29375f]">
                  <FontAwesomeIcon icon={faLinkedin} className="fa-fw text-[#0072b1] text-3xl" />
                </p>

                <p>
                  <span className="block font-bold text-lg">LinkedIn</span>

                  <Link href="https://www.linkedin.com/in/sandiladhikari/" target="_blank">
                    <span className="block underline">Visit My Profile</span>
                  </Link>
                </p>
              </div>

              <div className="flex gap-4 items-center">
                <p className="p-4 h-16 w-16 flex items-center justify-center rounded-full border-2 border-[#29375f]">
                  <FontAwesomeIcon icon={faEnvelope} className="fa-fw text-[#29375f] text-3xl" />
                </p>

                <p>
                  <span className="block font-bold text-lg">Email</span>
                  <span className="block">adhikarisandil32@gmail.com</span>
                </p>
              </div>

              <div className="flex gap-4 items-center">
                <p className="p-4 h-16 w-16 flex items-center justify-center rounded-full border-2 border-[#295f2f]">
                  <FontAwesomeIcon icon={faPhone} className="fa-fw text-[#295f2f] text-3xl" />
                </p>

                <p>
                  <span className="block font-bold text-lg">Phone</span>
                  <span className="block">+977 9862078245 / +977 9815394181</span>
                </p>
              </div>
            </div>

            <div className="md:w-1/2 w-[min(340px,100%)]">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
