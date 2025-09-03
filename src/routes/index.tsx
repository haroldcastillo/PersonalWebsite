import { createBrowserRouter } from "react-router-dom";
import AdminRoutes from "./adminRoutes";
import Main from "../pages/Main";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <div>404 Not Found</div>,
    },
    AdminRoutes,
]);

export default router;
