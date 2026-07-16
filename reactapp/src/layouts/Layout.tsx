import React, { useEffect } from "react";
import { Outlet } from "react-router";
import type { RootState } from "@/redux/store";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { clearToast } from "@/redux/slice/ToastSlice";
import { showNotifyRedux } from "@/helpers/myHelper";

export const Layout = () => {
    // const { message, type, setMessage } = useToast(); //Trường hợp sử dụng context
    const { message, type } = useAppSelector((state: RootState) => state.toast); //Trường hợp sử dụng redux-tookit
    const dispatch = useAppDispatch();

    useEffect(() => {
        // showNotify(message, type, setMessage); //Trường hợp sử dụng context
        showNotifyRedux(message, type);
        dispatch(clearToast());
    }, [message, type, dispatch]);

    return (
        <>
            <div>Layout</div>
            <Outlet />
        </>
    );
};
