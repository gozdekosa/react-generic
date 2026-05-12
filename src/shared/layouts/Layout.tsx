import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import { useState } from "react"

const Layout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    
    return (
        <>
            <Navbar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen}/>
            <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen}/>
            <div className="p-4 sm:ml-64 mt-14">
                <Outlet />
            </div>
        </>
    )
}

export default Layout