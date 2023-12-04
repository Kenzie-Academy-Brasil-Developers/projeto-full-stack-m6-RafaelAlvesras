import { Navigate, Outlet } from "react-router-dom"

export const PublicRoutes = () => {
    const checkClient = localStorage.getItem("@USER")

    return !checkClient ? <Outlet /> : <Navigate to={"/dashboard"} />
}