"use client"

import React, { useState } from "react"
import ProjectBox from "./ProjectBox"
import Button from "../buttons/Button"
import { twMerge as tw } from "tailwind-merge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ShowProjects({ frontendProjects, backendProjects }) {
  return (
    <div>
      {/* <div className="flex gap-2 justify-center">
        <Button
          text="Frontend"
          clickFn={() => setActiveTab("frontend")}
          className={tw(activeTab === "frontend" ? "font-bold border border-black border-b-white" : "", "px-4 py-2")}
        />
        <Button
          text="Backend"
          clickFn={() => setActiveTab("backend")}
          className={tw(activeTab === "backend" ? "font-bold border border-black border-b-white" : "", "px-4 py-2")}
        />
      </div>

      <div className="grid gap-4 grid-cols-3 border border-black">
        {activeTab === "frontend"
          ? frontendProjects.map((project, idx) => <ProjectBox key={idx} projectInfo={project} />)
          : backendProjects.map((project, idx) => <ProjectBox key={idx} projectInfo={project} />)}
      </div> */}

      <Tabs defaultValue="frontend">
        <TabsList className="mx-auto w-fit">
          <TabsTrigger value="frontend" className="tracking-wider">
            FRONTEND
          </TabsTrigger>

          <TabsTrigger value="backend" className="tracking-wider">
            BACKEND
          </TabsTrigger>
        </TabsList>

        <TabsContent value="frontend" className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {frontendProjects.map((project, idx) => (
            <ProjectBox key={idx} projectInfo={project} />
          ))}
        </TabsContent>

        <TabsContent value="backend" className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {backendProjects.map((project, idx) => (
            <ProjectBox key={idx} projectInfo={project} />
          ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}
