describe('Delete Author', () => {
    const env = Cypress.env();
    it('delete Author', () => {
        cy.request(
            {
                method: 'delete',
                url: env.URL +'/api/v1/Authors/'+ env.DeleteAuthor.id,
                failOnStatusCode: false,
                body:
                {},
            },
        ).then((response) => {
            expect(response.status).to.eq(200);
        })
    })   
    it('delete Author, using wrong id', () => {
        cy.request(
            {
                method: 'delete',
                url: env.URL +'/api/v1/Authors/'+ env.DeleteAuthor.wrongId,
                failOnStatusCode: false,
                body:
                {},
            },
        ).then((response) => {
            expect(response.status).to.eq(400);
            expect(response.body.title).to.eq(env.DeleteAuthor.title);
            expect(response.body.errors).to.have.property('id');
        })
    })
})