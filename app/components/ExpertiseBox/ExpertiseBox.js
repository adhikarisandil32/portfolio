import React from "react"

export default function ExpertiseBox({ name, element }) {
  return (
    <div className="w-full space-y-4 py-2 shadow-md rounded-md">
      <div className="text-center relative h-10 flex items-center justify-center">{element}</div>

      <div className="text-center">
        <span>{name}</span>
      </div>
    </div>
  )
}
