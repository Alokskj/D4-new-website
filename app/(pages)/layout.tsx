import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Background from "../components/Background"

export default function PageLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <div className="bg-[#0E0C15]">
            {children}
        </div>
    )
}