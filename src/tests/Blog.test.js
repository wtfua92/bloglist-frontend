import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Blog from '../components/Blog';

describe('<Blog />', function () {
    let component;
    const deleteHandler = jest.fn();
    const likeHandler = jest.fn();
    const index = 0;
    const blog = {
        title: 'React patterns',
        author: 'Michael Chan',
        url: 'https://reactpatterns.com/',
        likes: 7,
        user: {
            id: '123'
        }
    };

    beforeEach(() => {
        component = render(<Blog deleteHandler={deleteHandler} likeHandler={likeHandler} index={index} blog={blog}/>);
    });

    test('should render minified', () => {
        expect(component.container.querySelector('.blog-item__info')).toBeFalsy();
    });

    test('should expend on title click', () => {
        const title = component.container.querySelector('.blog-item__title');
        fireEvent.click(title);
        expect(component.container.querySelector('.blog-item__info')).toBeDefined();
    });
});