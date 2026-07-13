import toast from "react-hot-toast";
import type { ToastType } from "../context/ToastContext";

const showNotify = (
    message: string,
    type: ToastType,
    setMessage: (message: string, type: ToastType) => void,
) => {
    if (message) {
        switch (type) {
            case "success":
                toast.success(message);
                break;
            case "error":
                toast.error(message);
                break;
            default:
                break;
        }

        setMessage("", null);
    }
};

const showNotifyRedux = (
    message: string,
    type: ToastType,
) => {
    if (message) {
        switch (type) {
            case "success":
                toast.success(message);
                break;
            case "error":
                toast.error(message);
                break;
            default:
                break;
        }
    }
};

export { showNotify, showNotifyRedux };
