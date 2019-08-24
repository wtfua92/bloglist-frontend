import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SimpleBlog from '../components/SimpleBlogComponent';

describe('<SimpleBlog />', () => {
    let component;
    const onClick = jest.fn();
    const blog = {
        title: 'Title',
        author: 'Author',
        likes: 3
    };

    beforeEach(() => {
        component = render(<SimpleBlog blog={blog} onClick={onClick} />);
    });

    test('should render properly', () => {
        expect(component.container.querySelector('.simple-blog__title')).toHaveTextContent(blog.title);
        expect(component.container.querySelector('.simple-blog__title')).toHaveTextContent(blog.author);
        expect(component.container.querySelector('.simple-blog__likes')).toHaveTextContent(`${blog.likes} likes`);
    });

    test('like button should work properly', () => {
        const button = component.container.querySelector('button');
        fireEvent.click(button);
        fireEvent.click(button);
        expect(onClick.mock.calls.length).toBe(2);
    });
});