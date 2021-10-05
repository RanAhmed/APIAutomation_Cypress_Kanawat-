describe('Get Author', () => {
    const env = Cypress.env();
    it('Get Author', () => {
        cy.request(
            {
                method: 'Get',
                url: env.URL + '/api/v1/Authors',
                body:
                    {},
            },
        ).then((response) => {
            expect(response.status).to.eq(200);
        })
    })
})