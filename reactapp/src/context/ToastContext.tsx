import { createContext, useCallback, useState, type ReactNode } from "react";

export interface IToastContextType {
    message: string;
    type: ToastType;
    setMessage: (message: string, type: ToastType) => void;
}

interface IToastProviderProps {
    children: ReactNode;
}

export type ToastType = "success" | "error" | "warning" | null;

interface IToastState {
    message: string;
    type: ToastType;
}

const ToastContext = createContext<IToastContextType | undefined>(undefined);

const ToastProvider: React.FC<IToastProviderProps> = ({
    children,
}: IToastProviderProps) => {
    const [toast, setToast] = useState<IToastState>({
        message: "",
        type: null,
    });

    const setMessage = useCallback(
        (message: string, type: ToastType = null) => {
            setToast({
                message,
                type,
            });
        },
        [],
    );
    return (
        <ToastContext
            value={{ message: toast.message, type: toast.type, setMessage }}
        >
            {children}
        </ToastContext>
    );
};

export { ToastProvider, ToastContext };
