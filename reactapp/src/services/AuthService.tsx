import axiosInstance from "../config/axios";
import { handleAxiosError } from "../helpers/axiosHelper";
import type { UserType } from "@/types/UserType";


type LoginPayload = {
    email: string;
    password: string;
};

const login = async (payload: LoginPayload): Promise<UserType | null> => {
    try {
        const response = await axiosInstance.post("/auth/login", {
            email: payload.email,
            password: payload.password,
        });

        return response.data.user;
    } catch (error) {
        handleAxiosError(error);
        return null;
    }
};

const fetchUser = async (): Promise<UserType | null> => {
    try {
        const response = await axiosInstance.get("/auth/me");
        return response.data.users;
    } catch (error) {
        handleAxiosError(error);
        return null;
    }
}

export { login, fetchUser };
