import { Route, Routes } from "react-router-dom"
import ErrorPage from "../../pages/Error"
import Home from "../../pages/Home"
import Layout from "../layouts/Layout"
import Posts from "../../features/posts/pages/Posts"
import Login from "../../pages/Login"
import Users from "../../features/users/pages/Users"

const ConfigRouter = () => {
    return(
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/users" element={<Users />} />
                <Route path="/posts" element={<Posts />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    )
}

export default ConfigRouter