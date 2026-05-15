import { Link } from "react-router-dom"

const Sidebar = ({ isOpen, setIsOpen }) => {
    return (   
        <>
        {isOpen && (
            <div
            className="fixed inset-0 bg-black/50 z-30 sm:hidden"
            onClick={() => setIsOpen(false)}
            />
        )}
         <aside
        className={`
          fixed top-0 left-0  w-64 h-full 
          bg-white text-black dark:bg-black dark:text-white border-e
          transform transition-transform duration-300  border-default border-gray-200
          dark:border-gray-700
          ${isOpen ? "translate-x-0 z-60" : "-translate-x-full z-40 pt-16"}
          sm:translate-x-0
        `}
      >
        <div className="h-full px-3 py-4 overflow-y-auto">
            <ul className="space-y-2 font-medium">
                <Link to="/" className="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">
                    <svg className="w-5 h-5 transition duration-75 group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1
                        1 0 001 1m-6 0h6"/></svg>
                    <span className="ms-3">Dashboard</span>
                </Link>
                <Link to="/users" className="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">
                    <svg className="w-5 h-5 transition duration-75 group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002
                        0 0110.288 0M15 7a5 5 0 11-10 0 5 5 0 0110 0z"/></svg>
                    <span className="ms-3">Users</span>
                </Link>
                <Link to="/posts" className="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">
                    <svg className="w-5 h-5 transition duration-75 group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2H5a2 2 0 00-2 2v2a2 2 0 002 2h14a2 2 0 012-2z"/></svg>
                    <span className="ms-3">Posts</span>
                </Link>
            </ul>
        </div>
        </aside>
        </>
    )
}

export default Sidebar