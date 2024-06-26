import React from "react"
import Link from "next/link"
import SidebarWithoutMenu from "./components/SidebarWithoutMenu"

export default function NotFound() {
  return (
    <>
      <div className="container">
        <main className="flex">
          <section className="h-screen w-1/4 bg-gray-300 py-8 scroll-smooth overflow-auto">
            <SidebarWithoutMenu />
          </section>

          <section className="h-screen w-3/4 flex flex-col items-center justify-center space-y-4">
            <h3 className="text-4xl font-bold">404</h3>
            <h3 className="text-base text-center">
              The page you're looking for <br /> isn't currently available.
            </h3>

            <div className="text-center text-base">
              Go To{" "}
              <Link href="/" className="font-semibold underline">
                Home
              </Link>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}
