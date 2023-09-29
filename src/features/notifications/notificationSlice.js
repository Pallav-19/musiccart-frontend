import { createSlice } from '@reduxjs/toolkit';

export const notificationSlice = createSlice({
    name: 'notification',
    initialState: [],
    reducers: {
        showNotification: (state, action) => {
            const { message, severity } = action.payload;
            state.push({ message, severity });
        },
        hideNotification: (state) => {
            state.shift();
        },
    },
});

export const { showNotification, hideNotification } = notificationSlice.actions;
export const selectNotifications = (state) => state.notification;

export default notificationSlice.reducer;
