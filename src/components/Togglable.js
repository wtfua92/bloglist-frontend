import React from 'react';
import { connect } from 'react-redux';
import { toggleVisibility } from '../reducers/togglable.reducer';

const Togglable = ({ children, buttonText, visible, toggleVisibility }) => {
    const showWhenVisible = {
        display: visible ? '' : 'none'
    };
    const hideWhenVisible = {
        display: visible ? 'none' : ''
    };

    return (
        <div>
            <div>
                <button type="button" className="button is-primary" style={hideWhenVisible} onClick={toggleVisibility}>{buttonText}</button>
                <div style={showWhenVisible}>
                    {children}
                    <br/>
                    <button type="button" className="button is-danger" onClick={toggleVisibility}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = ({ createBlogFormVisibility }) => ({
    visible: createBlogFormVisibility
});

const mapDispatchToProps = {
    toggleVisibility
};

export default connect(mapStateToProps, mapDispatchToProps)(Togglable);