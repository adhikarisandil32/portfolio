import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faReact, faNodeJs } from "@fortawesome/free-brands-svg-icons"
import { faDatabase } from "@fortawesome/free-solid-svg-icons"
import Image from "next/image"
import ExpertiseBox from "../ExpertiseBox/ExpertiseBox"

export default function AboutSection({ providedRef }) {
  const expertise = [
    {
      name: "React",
      element: <FontAwesomeIcon icon={faReact} className="text-4xl text-[#61dbfb] fa-fw" />,
    },
    {
      name: "Next.js",
      element: <Image src="/next.js.svg" fill={true} alt="next.js-svg" />,
    },
    { name: "Node", element: <FontAwesomeIcon icon={faNodeJs} className="text-4xl fa-fw text-[#3c873a]" /> },
    { name: "Express", element: <Image src="/express.js.svg" fill={true} alt="express.js-svg" /> },
    { name: "MongoDB", element: <Image src="/mongodb.svg" fill={true} alt="mongodb-svg" /> },
    { name: "SQL", element: <FontAwesomeIcon icon={faDatabase} className="text-4xl fa-fw text-[#1b667e]" /> },
  ]

  return (
    <div id="about" ref={providedRef}>
      <div className="container">
        <div className="px-4 py-8 space-y-4">
          <div>
            <span className="text-xs tracking-widest">ABOUT ME</span>
          </div>

          <div className="flex md:flex-row flex-col gap-4 items-center">
            <div className="w-full md:w-1/2 space-y-8">
              <div>
                <span className="text-xl font-bold">WHO AM I ?</span>
              </div>

              <div className="space-y-6">
                <p className="leading-6">
                  <span className="font-bold">Hi, I'm Sandil Adhikari</span>, an enthusiastic Full Stack Developer with
                  a passion for creating dynamic and user-friendly web applications with keen interest in developing
                  responsive and efficient solutions, bringing together my understanding of both client and server-side
                  technologies.
                </p>
              </div>
            </div>

            <div className="w-full md:w-1/2 py-8 space-y-4">
              <div className="text-left md:text-center">
                <span className="text-xs">MY EXPERTISE</span>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {expertise.map((eachExpertise, idx) => (
                  <ExpertiseBox key={idx} name={eachExpertise.name} element={eachExpertise.element} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
