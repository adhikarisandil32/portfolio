"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import { twMerge as tw } from "tailwind-merge"

export default function Menu() {
  const [activeHash, setActiveHash] = useState()

  useEffect(() => {
    const hash = window.location.hash.split("#")[1]

    setActiveHash(hash ? `#${hash}` : "#home")
  }, [])

  return (
    <div className="px-4 flex flex-col items-center gap-4">
      <Link
        href="#home"
        className={tw(activeHash === "#home" ? "text-blue-700 font-semibold" : "")}
        onClick={() => setActiveHash("#home")}
      >
        HOME
      </Link>

      <Link
        href="#about"
        className={tw(activeHash === "#about" ? "text-blue-700 font-semibold" : "")}
        onClick={() => setActiveHash("#about")}
      >
        ABOUT
      </Link>

      <Link
        href="#projects"
        className={tw(activeHash === "#projects" ? "text-blue-700 font-semibold" : "")}
        onClick={() => setActiveHash("#projects")}
      >
        PROJECTS
      </Link>

      <Link
        href="#education"
        className={tw(activeHash === "#education" ? "text-blue-700 font-semibold" : "")}
        onClick={() => setActiveHash("#education")}
      >
        EDUCATION
      </Link>

      <Link
        href="#contact"
        className={tw(activeHash === "#contact" ? "text-blue-700 font-semibold" : "")}
        onClick={() => setActiveHash("#contact")}
      >
        CONTACT
      </Link>
    </div>
  )
}
