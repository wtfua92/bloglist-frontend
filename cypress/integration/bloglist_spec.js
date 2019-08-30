const user = {
    username: 'user1',
    password: 'user1',
    name: 'User 1'
};

describe('Bloglist app', () => {
    const loginFunction = () => {
        cy.contains('Log in form');
        cy.get('#username')
            .type(user.username);
        cy.get('#password')
            .type(user.password);
        cy.get('button[type="submit"]')
            .click();
        cy.contains(`${user.name} (${user.username}) is logged in`);
    };

    beforeEach(() => {
        cy.request('http://localhost:3003/api/blogs/reset');
        cy.request('POST', 'http://localhost:3003/api/users', user);
        cy.visit('/');
    });

    it('should open the app', () => {
        cy.contains('List of blogs');
    });

    it('should login successfully', () => {
        loginFunction();
    });

    it('should create a new blog entry', () => {
        loginFunction();
        cy.contains('Create Blog Entry').click();
        cy.contains('New Entry');
        cy.get('#title').type('Some title');
        cy.get('#author').type('Some author');
        cy.get('#url').type('Some url');
        cy.contains('Save').click();
        cy.contains('Create Blog Entry');
        cy.contains('"Some title"by Some author');
    });
});