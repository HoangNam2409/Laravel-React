import { store } from "@/redux/store";
import { fetchUser } from "@/services/AuthService";
import { redirect, type MiddlewareFunction } from "react-router";

const LoginMiddleware: MiddlewareFunction = async (_arg, next) => {
    const { isAuthenticated, user } = store.getState().auth;
    console.log({isAuthenticated, user});


    if (isAuthenticated && user) {
        throw redirect("/dashboard");
    }

    let users = null;

    try {
        users = await fetchUser();
    } catch (error) {
        console.error("Fetch user thất bại:", error);
    }

    //Kiểm tra xem token có bị hết hạn hay không
    if (users) {
        throw redirect("/dashboard");
    }

    await next();
};

export { LoginMiddleware };
