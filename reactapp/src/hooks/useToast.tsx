import {useContext} from 'react';
import { ToastContext, type IToastContextType } from '../context/ToastContext';

const useToast = (): IToastContextType => {
    const context = useContext(ToastContext);

    if (!context) {
        throw new Error(
            "useCurrentUser has to be used within <CurrentUserContext>",
        );
    }

    return context;
};

export { useToast };
