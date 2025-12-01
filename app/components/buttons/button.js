"use client"

import React from "react"
import { twMerge as tw } from "tailwind-merge"

export default function Button({ text, className, icon, clickFn }) {
  return (
    <>
      <button className={className} onClick={clickFn}>
        <span className={tw(icon ? "mr-1" : "")}>{text}</span> {icon ?? ""}
      </button>
    </>
  )
}
