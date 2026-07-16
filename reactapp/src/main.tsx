// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";

import { AuthMiddleware } from "./middlewares/AuthMiddleware";
import { LoginMiddleware } from "./middlewares/LoginMiddleware";
import { ToastProvider } from "./context/ToastContext";
import { store } from "./redux/store";
import { Layout } from "./layouts/Layout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { User } from "./pages/User";

const router = createBrowserRouter([
    {
        path: "/login",
        HydrateFallback: () => null,
        middleware: [LoginMiddleware],
        Component: Login,
    },
    {
        path: "/",
        Component: Layout,
        HydrateFallback: () => null,
        middleware: [AuthMiddleware],
        children: [
            { path: "/dashboard", Component: Dashboard },
            { path: "/user", Component: User },
        ],
    },
]);

createRoot(document.getElementById("root")!).render(
    // <StrictMode>
    <Provider store={store}>
        <ToastProvider>
            <RouterProvider router={router} />
            <div>
                <Toaster position="bottom-right" reverseOrder={false} />
            </div>
        </ToastProvider>
    </Provider>,

    // </StrictMode>,
);
