import React from "react";
import { Link } from "react-router";

export const User = () => {
    return (
        <>
            <div>User</div>
            <Link to="/dashboard">Link to Dashboard</Link>;
            <Link to="/login">Link to Login</Link>;
        </>
    );
};
