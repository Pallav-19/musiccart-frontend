import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { hideNotification, selectNotifications } from '../../features/notifications/notificationSlice';

function Notifications() {
    const notifications = useSelector(selectNotifications)
    const dispatch = useDispatch();

    useEffect(() => {
        if (notifications?.length > 0) {
            const notification = notifications[0];
            toast[notification?.severity || 'info'](notification?.message || "Notification", {
                onClose: () => {
                    dispatch(hideNotification());
                },
            });
        }
    }, [notifications, dispatch]);

    return <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
    />;
}

export default Notifications;
