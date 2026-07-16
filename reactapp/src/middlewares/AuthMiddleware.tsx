import { setAuthLogin } from "@/redux/slice/AuthSlice";
import { store } from "@/redux/store";
import { fetchUser } from "@/services/AuthService";
import { type MiddlewareFunction } from "react-router";
import { redirect } from "react-router";

const AuthMiddleware: MiddlewareFunction = async (_arg, next) => {
    const { isAuthenticated, user } = store.getState().auth;

    if (isAuthenticated && user) {
        await next();
        return;
    }

    let users = null;

    try {
        users = await fetchUser();
    } catch (error) {
        console.error("Fetch user thất bại:", error);
    }

    if (!users) {
        throw redirect("/login");
    }
    store.dispatch(setAuthLogin(users));
    await next();
};

export { AuthMiddleware };
