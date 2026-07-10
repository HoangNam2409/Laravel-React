import React, { useEffect } from "react";
import { useToast } from "../hooks/useToast";
import { showNotify } from "../helpers/myHelper";

const Dashboard = () => {
    const { message, type, setMessage } = useToast();

    useEffect(() => {
        showNotify(message, type, setMessage);
    }, [message, type, setMessage]);

    return <div>Dashboard</div>;
};

export default Dashboard;
