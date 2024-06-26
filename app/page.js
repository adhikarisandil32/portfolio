"use client"

import { useEffect, useRef, useState } from "react"
import Sidebar from "./components/Sidebar"
import AboutSection from "./components/sections/AboutSection"
import ContactSection from "./components/sections/ContactSection"
import EducationSection from "./components/sections/EducationSection"
import HomeSection from "./components/sections/HomeSection"
import ProjectsSection from "./components/sections/ProjectsSection"
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import resolveConfig from "tailwindcss/resolveConfig"
import tailwindConfig from "@/tailwind.config.js"

export default function Home() {
  const homeRef = useRef()
  const aboutRef = useRef()
  const projectsRef = useRef()
  const educationRef = useRef()
  const contactRef = useRef()
  const wholeSidebarRef = useRef()

  useEffect(() => {
    const refsCollection = [homeRef, aboutRef, projectsRef, educationRef, contactRef]
    const idToScrollTo = window.location.hash?.split("#")[1] ?? "home"

    const requestedSectionRef = refsCollection.filter((eachRef) => eachRef.current?.id === idToScrollTo)[0]

    if (requestedSectionRef) requestedSectionRef.current.scrollIntoView({ behavior: "smooth" })
  }, [])

  return (
    <>
      <main className="flex h-screen">
        <section
          className="h-full absolute left-0 top-0 lg:static lg:block z-30 w-full lg:w-1/4 bg-gray-50 scroll-smooth overflow-auto"
          ref={wholeSidebarRef}
        >
          <div className="text-right lg:hidden">
            <FontAwesomeIcon
              icon={faXmark}
              className="fa-fw text-3xl p-2"
              onClick={() => {
                wholeSidebarRef.current?.classList.remove("block")
                wholeSidebarRef.current?.classList.add("hidden")
              }}
            />
          </div>

          <div className="py-8">
            <Sidebar />
          </div>
        </section>

        <section className="h-full w-full lg:w-3/4 scroll-smooth overflow-auto">
          <div className="fixed right-0 top-0 z-20 lg:hidden">
            <FontAwesomeIcon
              icon={faBars}
              className="fa-fw text-3xl p-2 bg-gray-50/50 rounded-md"
              onClick={() => {
                wholeSidebarRef.current?.classList.remove("hidden")
                wholeSidebarRef.current?.classList.add("block")
              }}
            />
          </div>

          <HomeSection providedRef={homeRef} />

          <AboutSection providedRef={aboutRef} />

          <ProjectsSection providedRef={projectsRef} />

          <EducationSection providedRef={educationRef} />

          <ContactSection providedRef={contactRef} />
        </section>
      </main>
    </>
  )
}
