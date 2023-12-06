// import React from "react"
import ReactDOM from "react-dom/client"
import Home from "./Home.jsx"
import "./index.css"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import EmployeesPage from "./Pages/EmployeesPage.jsx"
import EmployeeProfile from "./Pages/EmployeeProfile.jsx"
import Contact from "./Pages/Contact.jsx"
import About from "./Pages/About.jsx"
import NewEmployee from "./Pages/NewEmployee.jsx"

// (TECHNICAL TERMS)----- client side routing and server-side routing - single page web allow navigating without refreshing the page.
const router = createBrowserRouter([
  {
    path: "/", //What the user types in the user
    element: <Home />, //This is what we render when the path matches
  },
  {
    path: "/employee",
    element: <EmployeesPage />,
  },
  {
    path: "/employee/:id",
    element: <EmployeeProfile />,
  },
  {
    path: "*",
    element: <div>Not Found</div>,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/new",
    element: <NewEmployee />,
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
)
