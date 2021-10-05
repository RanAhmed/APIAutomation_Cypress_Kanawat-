describe('Get Author By Id', () => {
    const env = Cypress.env();
    it('Get Author By Id', () => {
        cy.request(
            {
                method: 'Get',
                url: env.URL + '/api/v1/Authors/' + env.GetAuthorById.id,
                body:
                    {},
            },
        ).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.id).to.eq(env.GetAuthorById.id);
            expect(response.body).to.have.property('idBook');
            expect(response.body).to.have.property('firstName');
            expect(response.body).to.have.property('lastName');
        })
    })
})