import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import Category from "../components/Category/Category";
import CourseDetails from "../components/CourseDetails/CourseDetails";
import Courses from "../components/Courses/Courses";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login/Login";
import Register from "../components/Login/Register/Register";
import Cart from "../components/Cart/Cart";
import Main from "../Layout/Main";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/category/:id",
        element: <Category></Category>,
        loader: ({ params }) => {
          return fetch(
            `https://e-learn-server.vercel.app/category/${params.id}`
          );
        },
      },
      {
        path: "/courses",
        loader: () => {
          return fetch("https://e-learn-server.vercel.app/course");
        },
        element: (
          <PrivateRoutes>
            <Courses></Courses>
          </PrivateRoutes>
        ),
      },
      {
        path: "/course/:id",
        loader: ({ params }) => {
          return fetch(`https://e-learn-server.vercel.app/course/${params.id}`);
        },
        element: <CourseDetails></CourseDetails>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/cart",
        element: (
          <PrivateRoutes>
            <Cart></Cart>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
export default router;
