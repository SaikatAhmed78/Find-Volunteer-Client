import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Main/MainLayout";
import Home from "../Pages/Home";
import AllPosts from "../Pages/AllPosts";
import AddPost from "../Pages/AddPost";
import ManagePosts from "../Pages/ManagePosts";
import PostDetails from "../Pages/PostDetails";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
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

        ]
    }
])

export default router;