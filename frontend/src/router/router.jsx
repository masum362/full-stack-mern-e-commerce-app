import { createBrowserRouter } from "react-router-dom";
import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Error</div>,
    children: [
        { 
            path: "/" ,
            element:<div>Home page</div>
        }
    ],
  },
]);
