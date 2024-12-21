import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Main/MainLayout";
import Home from "../Pages/Home";
import AllPosts from "../Pages/AllPosts";
import AddPost from "../Pages/AddPost";
import ManagePosts from "../Pages/ManagePosts";
import PostDetails from "../Pages/PostDetails";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import NotFoundPage from "../Common/NotFoundPage";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <NotFoundPage></NotFoundPage>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: '/addPost',
                element: <AddPost></AddPost>
            },
            {
                path: '/allPosts',
                element: <AllPosts></AllPosts>
            },
            {
                path: '/managePost',
                element: <ManagePosts></ManagePosts>
            },
            {
                path: '/postDetails',
                element: <PostDetails></PostDetails>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },

        ]
    }
])

export default router;