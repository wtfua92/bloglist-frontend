export const setNotification = (message, timer, type) => ({
    type: 'SET_NOTIFICATION',
    data: {
        message,
        timer,
        type
    }
});

export const clearNotification = () => ({
    type: 'CLEAR_NOTIFICATION'
});

export default {
    clearNotification,
    setNotification
};