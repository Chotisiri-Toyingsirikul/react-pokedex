import { createBrowserRouter } from "react-router-dom";
import Homepage from "../page/homepage";
import Detailpage from "../page/Detailpage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,


  },
  {
    path: "/detail/:name",
    element: <Detailpage />,


  }

]);