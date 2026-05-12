import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = ({ isOpen, setIsOpen }) => {

    var [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <>
        <nav className="fixed top-0 z-50 w-full bg-neutral-primary-soft border-b border-default border-gray-200">
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between">
                <div className="flex items-center justify-start rtl:justify-end">
                    <button 
                    onClick={() => setIsOpen(prev => !prev)}
                    data-drawer-target="top-bar-sidebar" data-drawer-toggle="top-bar-sidebar" aria-controls="top-bar-sidebar" type="button" className="sm:hidden text-heading bg-transparent box-border border border-transparent hover:bg-neutral-secondary-medium focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 rounded-base text-sm p-2 focus:outline-none">
                        <span className="sr-only">Open sidebar</span>
                        <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h10"/>
                        </svg>
                    </button>
                    <a href="https://flowbite.com" className="flex ms-2 md:me-24">
                 <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 me-3" alt="FlowBite Logo" />
                    <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                    </a>
                </div>
                <div className="flex items-center">
                    <div className="flex items-center ms-3">
                        <div className="relative">
                            <button 
                                onClick={() => setIsDropdownOpen(prev => !prev)}
                                type="button"
                                className="flex text-sm bg-gray-800 rounded-full"
                            >
                                <img
                                className="w-8 h-8 rounded-full"
                                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                                alt="user"
                                />
                            </button>

                            {isDropdownOpen && (
                                <div className="absolute right-0 mt-2 z-50 bg-white border border-default-medium rounded-base shadow-lg w-44">
                                
                                <div className="px-4 py-3 border-b border-default-medium">
                                    <p className="text-sm font-medium text-heading">Neil Sims</p>
                                    <p className="text-sm text-body truncate">neil.sims@flowbite.com</p>
                                </div>

                                <ul className="p-2 text-sm text-body font-medium">
                                    <Link to="/" className="block p-2 hover:bg-gray-100 rounded"><span>Dashboard</span></Link>
                                    <li><a href="#" className="block p-2 hover:bg-gray-100 rounded">Settings</a></li>
                                    <Link to="/profile" className="block p-2 hover:bg-gray-100 rounded"><span>Profile</span></Link>
                                    <li><a href="#" className="block p-2 hover:bg-gray-100 rounded">Sign out</a></li>
                                </ul>

                                </div>
                            )}
                            </div>
                    </div>
                    </div>
                </div>
            </div>
        </nav>
        </>
    )
}
export default Navbar