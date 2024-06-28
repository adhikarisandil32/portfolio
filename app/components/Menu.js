import React, { useEffect, useState } from "react"
import Link from "next/link"
import { twMerge as tw } from "tailwind-merge"

export default function Menu({ activeLink }) {
  return (
    <div className="px-4 flex flex-col items-center gap-4">
      <Link href="#home" className={tw(activeLink === "#home" ? "text-blue-700 font-semibold" : "")}>
        HOME
      </Link>

      <Link href="#about" className={tw(activeLink === "#about" ? "text-blue-700 font-semibold" : "")}>
        ABOUT
      </Link>

      <Link href="#projects" className={tw(activeLink === "#projects" ? "text-blue-700 font-semibold" : "")}>
        PROJECTS
      </Link>

      <Link href="#education" className={tw(activeLink === "#education" ? "text-blue-700 font-semibold" : "")}>
        EDUCATION
      </Link>

      <Link href="#contact" className={tw(activeLink === "#contact" ? "text-blue-700 font-semibold" : "")}>
        CONTACT
      </Link>
    </div>
  )
}
