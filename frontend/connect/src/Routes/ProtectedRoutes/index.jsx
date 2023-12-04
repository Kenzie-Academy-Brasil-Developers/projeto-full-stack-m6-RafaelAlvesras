import { Navigate, Outlet } from "react-router-dom"

export const ProtectedRoute = () => {
    const checkClient = localStorage.getItem("@USER")

    return checkClient ? <Outlet /> : <Navigate to={"/"} />
}