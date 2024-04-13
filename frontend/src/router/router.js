import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home</div>,
    errorElement: <div>Error</div>,
    children: [
        { 
            path: "/" ,
            element:<div>Home page</div>
        }
    ],
  },
]);
