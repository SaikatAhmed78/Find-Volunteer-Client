import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Main/MainLayout";
import Home from "../Pages/Home";
import AllPosts from "../Pages/AllPosts";
import AddPost from "../Pages/AddPost";
import ManagePosts from "../Pages/ManagePosts";
import PostDetails from "../Pages/PostDetails";
import Register from "../Pages/Register";
import NotFoundPage from "../Common/NotFoundPage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Login from "../Pages/Login";
import RequestVolunteer from "../Pages/RequestVolunteer ";
import UpdatePost from "../Pages/UpdatePost";





const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <NotFoundPage></NotFoundPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/addPost',
                element: <PrivateRoute><AddPost></AddPost></PrivateRoute>
            },
            {
                path: '/allPosts',
                element: <AllPosts></AllPosts>
            },
            {
                path: '/managePost',
                element: <PrivateRoute><ManagePosts></ManagePosts></PrivateRoute>
            },
            {
                path: '/postDetails/:id',
                element: <PrivateRoute><PostDetails></PostDetails></PrivateRoute>
            },
            {
                path: '/request-volunteer/:id',
                element: <PrivateRoute><RequestVolunteer></RequestVolunteer></PrivateRoute>
            },
            {
                path: '/update-post/:id',
                element: <PrivateRoute><UpdatePost></UpdatePost></PrivateRoute>
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