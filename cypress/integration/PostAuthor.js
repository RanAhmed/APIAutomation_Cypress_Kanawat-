describe('Post Author', () => {
    const env = Cypress.env();
    it('Post Author', () => {
        cy.request(
            {
                method: 'POST',
                url: env.URL + '/api/v1/Authors',
                body:
                {
                    id: env.PostAuthor.id,
                    idBook: env.PostAuthor.idBook,
                    firstName: env.PostAuthor.firstName,
                    lastName: env.PostAuthor.lastName,
                },
            },
        ).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.id).to.eq(env.PostAuthor.id);
            expect(response.body.idBook).to.eq(env.PostAuthor.idBook);
            expect(response.body.firstName).to.eq(env.PostAuthor.firstName);
            expect(response.body.lastName).to.eq(env.PostAuthor.lastName);

        })
    })
})