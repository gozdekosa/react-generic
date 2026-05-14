import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import { useState } from "react"
import useTheme from "../hooks/useTheme"

const Layout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const { theme, toggleTheme } =
    useTheme();
    
    return (
        <>
            <Navbar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen}/>
            <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen}/>
            <div className="p-4 sm:ml-64 mt-14  bg-white text-black dark:bg-black dark:text-white">
                <Outlet />
                <button onClick={toggleTheme}>
                    Theme: {theme}
                </button>
            </div>
        </>
    )
}

export default Layout