import {Sidebar} from '../sidebar/Sidebar.tsx'
import {Outlet} from 'react-router-dom'


export const Layout = () => {
    return (
        <div className="flex flex-row h-screen">
            <Sidebar />
            <main className="flex-1 flex justify-center items-center">
                <Outlet />
            </main>
        </div>
    )
}