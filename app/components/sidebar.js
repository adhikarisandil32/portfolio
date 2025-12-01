import Image from "next/image";
import React from "react";
import Menu from "./menu";

export default function Sidebar({ activeLink, wholeSidebarRef }) {
  return (
    <div className="h-full">
      <div className="space-y-8 justify-center">
        <div className="w-40 h-40 relative mx-auto">
          <Image
            src="/dummy-image.jpg"
            fill={true}
            alt="Profile Image"
            className="object-cover object-top rounded-full"
          />
        </div>

        <div className="space-y-1">
          <h1 className="text-center text-2xl font-bold">SANDIL ADHIKARI</h1>

          <h2 className="text-center">
            <span className="text-blue-800 font-semibold">FULL STACK DEV</span> FROM NEPAL
          </h2>
        </div>

        <Menu
          activeLink={activeLink}
          wholeSidebarRef={wholeSidebarRef}
        />

        <div className="text-center">
          <span>© Copyright {new Date().getFullYear()}. All rights reserved.</span>
        </div>
      </div>
    </div>
  );
}
