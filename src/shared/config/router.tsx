import { Route, Routes } from "react-router-dom"
import ErrorPage from "../../pages/Error"
import Home from "../../pages/Home"
import Layout from "../layouts/Layout"
import Posts from "../../features/posts/pages/Posts"
import Users from "../../features/users/pages/Users"
import ProfilePage from "../../features/profile/pages/ProfilePage"
import SettingsPage from "../../features/settings/pages/SettingsPage"
import LoginPage from "../../features/auth/pages/LoginPage"
import ProtectedRoute from "../../routes/ProtectedRoute"
import PublicRoute from "../../routes/PublicRoute"
import RegisterPage from "../../features/auth/pages/RegisterPage"

const ConfigRouter = () => {
    return(
        <Routes>
              <Route
                    path="/"
                    element={
                    <ProtectedRoute>
                        <Layout />
                    </ProtectedRoute>
                    }
                >
                <Route index element={<Home />} />
                <Route path="/users" element={<Users />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/settings" element={<SettingsPage />} />
            </Route>
            <Route
                path="/login"
                element={
                    <PublicRoute>
                    <LoginPage />
                    </PublicRoute>
                }
            />
            <Route path="register" element={<RegisterPage />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    )
}

export default ConfigRouter