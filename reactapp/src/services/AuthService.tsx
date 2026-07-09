import axiosInstance from "../config/axios";
import toast from 'react-hot-toast';
import { handleAxiosError } from "../helpers/axiosHelper";

type LoginPayload = {
    email: string;
    password: string;
};

const login = async (payload: LoginPayload): Promise<boolean> => {
    try {
        await axiosInstance.post("/auth/login", {
            email: payload.email,
            password: payload.password,
        });
        toast.success('Successfully toasted!')
        return true;
    } catch (error) {
        handleAxiosError(error);
        return false;
    }
};

export { login };
