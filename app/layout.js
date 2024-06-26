import { Inter } from "next/font/google"
import "./globals.css"
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"

config.autoAddCss = false

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Portfolio | Sandil Adhikari",
  description: "Full Stack Web Developer Portfolio",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-sm`}>{children}</body>
    </html>
  )
}
