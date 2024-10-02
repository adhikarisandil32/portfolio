import React from "react"
import Timeline from "../Timeline/Timeline"

export default function EducationSection({ providedRef }) {
  const academicInfo = [
    {
      degree: "Bachelor's in Engineering",
      stream: "Civil Engineering",
      board: "Institute of Engineering, Tribhuvan University",
    },
    {
      degree: "Intermediate in Science",
      stream: "Computer Science, Mathematics",
      board: "HSEB, Nepal",
    },
  ]

  return (
    <div id="education" ref={providedRef}>
      <div className="container">
        <div className="py-8 px-4 space-y-8">
          <div>
            <span className="text-xs tracking-widest">MY ACADEMICS</span>
          </div>

          <div>
            <Timeline academicInfo={academicInfo} />
          </div>
        </div>
      </div>
    </div>
  )
}
