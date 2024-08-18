import React from "react"
import ShowProjects from "../ProjectBox/ShowProjects"

export default function ProjectsSection({ providedRef }) {
  const projectsFrontend = [
    {
      title: "Global Connection & Networking Society",
      codeLink: "https://github.com/adhikarisandil32/gdes",
      deployedLink: "https://gcns.vercel.app/",
      imageUrl: "/project-images/gcns.png",
      librariesUsed: ["Vanilla HTML", "Vanilla JS", "SCSS"],
    },
    {
      title: "Online Store - JavaScript",
      codeLink: "https://github.com/adhikarisandil32/onlinestore-sealthedeal",
      deployedLink: "https://onlinestore-sealthedeal.netlify.app/",
      imageUrl: "/project-images/online-store.png",
      librariesUsed: ["React", "React Router", "Redux Toolkit", "React Query", "Axios", "TailwindCSS"],
    },
    {
      title: "Movie App",
      codeLink: "https://github.com/adhikarisandil32/movie-app/",
      deployedLink: "https://cine-search.netlify.app/",
      imageUrl: "/project-images/movie-app.png",
      librariesUsed: ["React", "React Router", "useContext and useReducer", "Axios", "TailwindCSS"],
    },
    {
      title: "Event Management Full Stack",
      codeLink: "https://github.com/adhikarisandil32/event-management-frontend",
      deployedLink: "https://event-mgmt.netlify.app",
      imageUrl: "/project-images/event-mgmt-front.png",
      librariesUsed: ["React", "React Router", "useContext", "React Hook Form", "TailwindCSS"],
    },
    {
      title: "Online Store - TypeScript",
      codeLink: "https://github.com/adhikarisandil32/store-with-react-typescript",
      deployedLink: "https://store-typescript.netlify.app/",
      imageUrl: "/project-images/store-typescript.png",
      librariesUsed: ["React", "React Router", "useContext", "LocalStorage API", "React Bootstrap"],
    },
    {
      title: "Three Step Form Validation",
      codeLink: "https://github.com/adhikarisandil32/three-step-form-validation/",
      deployedLink: "https://adhikarisandil32.github.io/three-step-form-validation/",
      imageUrl: "/project-images/three-step-form.png",
      librariesUsed: ["Vanilla JavaScript"],
    },
  ]

  const projectsBackend = [
    {
      title: "Event Management Full Stack",
      codeLink: "https://github.com/adhikarisandil32/event-management-backend",
      imageUrl: "/project-images/event-mgmt-back.png",
      librariesUsed: ["Express.js", "MongoDB", "JsonWebToken"],
    },
  ]

  return (
    <div
      className="bg-gray-50"
      id="projects"
      ref={providedRef}
    >
      <div className="container">
        <div className="px-4 py-8 space-y-8">
          <div>
            <span className="text-xs tracking-widest">MY PROJECTS</span>
          </div>

          <ShowProjects
            frontendProjects={projectsFrontend}
            backendProjects={projectsBackend}
          />
        </div>
      </div>
    </div>
  )
}
