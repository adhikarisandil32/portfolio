"use client"

import React from "react"
import Button from "../buttons/Button"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDownLong } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"

export default function HomeSection({ providedRef }) {
  return (
    <div className="bg-radial" id="home" ref={providedRef}>
      <div className="container">
        <div className="p-4 relative h-screen flex items-center">
          <div className="relative w-full space-y-10 z-10">
            <div className="space-y-2 lg:text-left text-center">
              <h4 className="text-xs tracking-widest">HELLO THERE! WELCOME TO MY SITE</h4>
              <h2 className="text-4xl font-bold">I'm Sandil Adhikari</h2>
              <h2 className="text-4xl text-red-800 font-bold">A Full Stack</h2>
              <h2 className="text-4xl text-red-800 font-bold">JavaScript Developer</h2>
            </div>

            <div className="space-x-4 lg:text-left text-center">
              <Link href="#projects">
                <Button text="My Projects" className="primary-button" />
              </Link>

              <Link href="/CV/CV.pdf" target="_blank">
                <Button text="Download CV" className="secondary-button" icon={<FontAwesomeIcon icon={faDownLong} />} />
              </Link>
            </div>
          </div>

          <div className="lg:relative absolute left-0 top-0 w-full h-full ">
            <div className="relative h-full">
              <Image
                src="/man-on-computer.svg"
                fill={true}
                alt="hero-image"
                className="object-contain object-center lg:opacity-100 opacity-20"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
