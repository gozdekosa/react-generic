import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import { useState } from "react"
import Footer from "../components/Footer"

const Layout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    return (
        <>
            <Navbar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen}/>
            <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen}/>
            <div className="p-4 sm:ml-64 pt-18 min-h-screen bg-white text-black dark:bg-black dark:text-white">
            <div className="flex flex-col min-h-screen">
                <div className="flex-1">
                <Outlet />
                </div>
                <Footer />
            </div>
            </div>
            
        </>
    )
}

export default Layout