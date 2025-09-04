import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/Main";
const router = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		errorElement: <div>404 Not Found</div>,
	},
]);

export default router;
