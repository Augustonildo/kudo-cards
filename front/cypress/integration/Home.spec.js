beforeEach(() => {
  cy.intercept(
    { url: 'http://localhost:3000/users', method: 'GET' },
    {
      content: [
        { email: 'test@test.com', name: 'test' },
        { email: 'john@gmail.com', name: 'John Lennon' },
      ],
    }
  );
  cy.intercept(
    { url: 'http://localhost:3000/kudos', method: 'GET' },
    {
      content: [
        {
          sender: { value: 'test@test.com', label: 'test' },
          date: '2022-02-12T20:30:59.943Z',
          recipient: { value: 'larasilva@gmail.com', label: 'lara silva' },
          message: 'Deu bom suas changes',
          id: '458796ee-9a3d-4731-b175-7212950a4a2a',
        },
      ],
    }
  );

  cy.login();
});

afterEach(() => {
  cy.clearAuthTokens();
});

describe('Testing Home page', () => {
  it('should add a kudo', () => {
    cy.visit('http://localhost:3001');

    cy.get('#react-select-3-live-region').siblings('div').type('John Lennon{enter}');
    cy.get('textarea').type('Testing kudo!');
    cy.get('button').contains('Publicar!').click();

    cy.intercept(
      { url: 'http://localhost:3000/kudos', method: 'GET' },
      {
        content: [
          {
            sender: { value: 'test@test.com', label: 'test' },
            date: new Date().toISOString(),
            recipient: { value: 'john@gmail.com', label: 'John Lennon' },
            message: 'Testing kudo!',
            id: '2312i32g12i3gi12i231',
          },
          {
            sender: { value: 'test@test.com', label: 'test' },
            date: '2022-02-12T20:30:59.943Z',
            recipient: { value: 'larasilva@gmail.com', label: 'lara silva' },
            message: 'Deu bom suas changes',
            id: '458796ee-9a3d-4731-b175-7212950a4a2a',
          },
        ],
      }
    ).as('swr');

    cy.wait('@swr').then(() => {
      cy.get('article', { timeout: 5000 })
        .eq(0)
        .find('div')
        .eq(0)
        .find('span')
        .should('have.text', 'testPara: John LennonTesting kudo!');
    });
  });
});