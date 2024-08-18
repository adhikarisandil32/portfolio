import React from "react"
import { Card, CardFooter, CardHeader, CardTitle, CardImage } from "@/components/ui/card"
import Link from "next/link"

export default function ProjectBox({ projectInfo }) {
  return (
    <>
      <Card>
        <CardHeader>
          <Link
            target={projectInfo.deployedLink ? "_blank" : projectInfo.codeLink ? "_blank" : "_self"}
            href={projectInfo.deployedLink ?? projectInfo.codeLink ?? "#"}
          >
            <CardImage src={projectInfo.imageUrl} />
          </Link>

          <CardTitle>{projectInfo.title}</CardTitle>
        </CardHeader>

        <CardFooter className="flex justify-between">
          {projectInfo.codeLink && (
            <Link
              href={projectInfo.codeLink}
              target={projectInfo.codeLink ? "_blank" : "_self"}
              className="underline"
            >
              Visit Code
            </Link>
          )}

          {projectInfo.deployedLink && (
            <Link
              href={projectInfo.deployedLink}
              target={projectInfo.deployedLink ? "_blank" : "_self"}
              className="underline"
            >
              Visit Site
            </Link>
          )}
        </CardFooter>
      </Card>
    </>
  )
}
