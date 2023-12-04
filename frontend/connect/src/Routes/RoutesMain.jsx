import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "../Pages/HomePage/index.jsx";
import { RegisterPage } from "../Pages/RegisterPage/index.jsx";
import { DashboardPage } from "../Pages/Dashboard/index.jsx";
import { ContactsProvider } from "../providers/ContactsContext.jsx";
import { ProtectedRoute } from "./ProtectedRoutes/index.jsx";
import { PublicRoutes } from "../Routes/PublicRoutes/index.jsx";

export const RoutesMain = () => {
    return (
        <Routes>
            <Route element={<PublicRoutes />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/registerPage" element={<RegisterPage />} />
            </Route>
            <Route element={<ProtectedRoute />}>
                <Route
                    path="/dashboard"
                    element={
                        <ContactsProvider>
                            <DashboardPage />
                        </ContactsProvider>
                    }
                />
            </Route>
        </Routes>
    );
};