import React, { useEffect } from "react";
// import { useToast } from "../hooks/useToast";
import { /*showNotify,*/ showNotifyRedux } from "../helpers/myHelper";
import { useAppSelector, useAppDispatch } from "../hooks/useRedux";
import type { RootState } from "../redux/store";
import { clearToast } from "../redux/slice/ToastSlice";

const Dashboard = () => {
    // const { message, type, setMessage } = useToast(); //Trường hợp sử dụng context
    const { message, type } = useAppSelector((state: RootState) => state.toast); //Trường hợp sử dụng redux-tookit
    const dispatch = useAppDispatch();

    useEffect(() => {
        // showNotify(message, type, setMessage); //Trường hợp sử dụng context
        showNotifyRedux(message, type);
        dispatch(clearToast());
    }, [message, type, dispatch]);

    return <div>Dashboard</div>;
};

export default Dashboard;
