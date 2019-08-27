const blogsList = [
    {
        title: 'React patterns',
        id: 1,
        author: 'Michael Chan',
        url: 'https://reactpatterns.com/',
        likes: 7,
        user: {
            id: 123,
            username: 'user',
            name: 'User'
        }
    },
    {
        title: 'React patterns - part 2',
        id: 2,
        author: 'Michael Chan',
        url: 'https://reactpatterns.com/',
        likes: 3,
        user: {
            id: 123,
            username: 'user',
            name: 'User'
        }
    },
    {
        title: 'Go To Statement Considered Harmful',
        id: 3,
        author: 'Edsger W. Dijkstra',
        url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
        likes: 5,
        user: {
            id: 123,
            username: 'user',
            name: 'User'
        }
    }
];

const getAll = () => {
    return Promise.resolve(blogsList);
};

export default { getAll };