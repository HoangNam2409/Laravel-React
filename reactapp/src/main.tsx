// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { ToastProvider } from "./context/ToastContext";
import { store } from "./redux/store";

const router = createBrowserRouter([
    {
        path: "/admin",
        element: <Login />,
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
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
