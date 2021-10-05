describe('Put Author', () => {
    const env = Cypress.env();
    it('Put Author', () => {
        cy.request(
            {
                method: 'put',
                url: env.URL +'/api/v1/Authors/'+ env.PutAuthor.id,
                failOnStatusCode: false,
                body:
                {
                    id: env.PutAuthor.id,
                    idBook: env.PutAuthor.idBook,
                    firstName: env.PutAuthor.firstName,
                    lastName: env.PutAuthor.lastName,
                },
            },
        ).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.id).to.eq(env.PutAuthor.id);
            expect(response.body.idBook).to.eq(env.PutAuthor.idBook);
            expect(response.body.firstName).to.eq(env.PutAuthor.firstName);
            expect(response.body.lastName).to.eq(env.PutAuthor.lastName);
        })
    })   
    it('Put Author using wrong book id', () => {
        cy.request(
            {
                method: 'put',
                url: env.URL +'/api/v1/Authors/'+ env.PutAuthor.id,
                failOnStatusCode: false,
                body:
                {
                    id: env.PutAuthor.id,
                    idBook: env.PutAuthor.idBookWrong,
                    firstName: env.PutAuthor.firstName,
                    lastName: env.PutAuthor.lastName,
                },
            },
        ).then((response) => {
            expect(response.status).to.eq(400);
            expect(response.body.title).to.eq(env.PutAuthor.title);
            expect(response.body.errors).to.have.property('$.idBook');
        })
    })
})