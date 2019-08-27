import React from 'react';
import { connect } from 'react-redux';

function Notification({ message, type = '' }) {
    if (!message) {
        return null;
    }

    return (
        <div className={`notification ${type === 'error' ? 'is-danger' : 'is-success'}`}>
            {message}
        </div>
    );
}

const mapStateToProps = ({ notification }) => ({
    message: notification.message,
    type: notification.type
});

export default connect(mapStateToProps)(Notification);