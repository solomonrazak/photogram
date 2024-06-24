import Sidebar from "../sidebar";
import UserList from "../userList";
import { Link, Outlet } from "react-router-dom";



const Layout = ({}: {childern: React.ReactNode}) => {
  return (
    <div className="flex bg-white">
        <aside className="flex gap-x-4 bg-gray-800 fixed top-0 left-0 z-40 lg:w-60 h-screen">
            <Sidebar />
        </aside>
        <div className="lg:ml-60 lg:mr-60 p-8 flex-1 ml-36">
            <Outlet />
        </div>
        <aside className="hidden lg:block bg-gray-800 fixed top-0 left-0 z-40 lg:w-60 h-screen">
            <UserList />
        </aside>

    </div>
  )
}

export default Layout;