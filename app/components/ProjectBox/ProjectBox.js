import React from "react"
import { Card, CardFooter, CardHeader, CardTitle, CardImage } from "@/components/ui/card"
import Link from "next/link"

export default function ProjectBox({ projectInfo }) {
  return (
    <>
      <Card>
        <CardHeader>
          <CardImage src={projectInfo.imageUrl} />
          <CardTitle>{projectInfo.title}</CardTitle>
        </CardHeader>

        <CardFooter className="flex justify-between">
          <Link href={projectInfo.codeLink} target="_blank" className="underline">
            Visit Code
          </Link>

          {projectInfo.deployedLink && (
            <Link href={projectInfo.deployedLink} target="_blank" className="underline">
              Visit Site
            </Link>
          )}
        </CardFooter>
      </Card>
    </>
  )
}
