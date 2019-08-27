import React from 'react';
import { render, waitForElement, act } from '@testing-library/react';
import App from '../App';

jest.mock('../services/blogs');

describe('<App />', function () {
    let app;
    const userData = {
        username: 'user',
        name: 'User',
        id: 123,
        token: '123'
    };

    test('should not display blogs if user is not logged in', async () => {
        act(() => {
            window.localStorage.setItem('blogsAppLoggedInUser', JSON.stringify(null));
            app = render(<App/>);
        });
        app.rerender(<App />);
        await waitForElement(() => app.container.querySelector('.App'));
        expect(app.container).toHaveTextContent('No blogs in the list');
        expect(app.container.querySelector('.login-form')).toBeDefined();
    });

    test('should display blogs after user logs in', async () => {
        act(() => {
            window.localStorage.setItem('blogsAppLoggedInUser', JSON.stringify(userData));
            app = render(<App/>);
        });
        app.rerender(<App />);
        await waitForElement(() => app.container.querySelector('.App'));
        const blogListComponent = app.container.querySelector('.blog-list');
        const blogListItems = app.container.querySelectorAll('.blog-item');

        expect(blogListComponent).toBeDefined();
        expect(blogListItems.length).toBe(3);
        expect(app.container.querySelector('.login-form')).toBeFalsy();
    });
});