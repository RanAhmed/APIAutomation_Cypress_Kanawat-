describe('Get Author By book Id, wrong Id user', () => {
    const env = Cypress.env();
    it('Get Author By book Id', () => {
        cy.request(
            {
                method: 'Get',
                url:env.URL +'/api/v1/Authors/authors/books/'+env.GetAuthorByIdBook.idBook,
                failOnStatusCode: false,
                body:
                {},
            },
        ).then((response) => {
            expect(response.status).to.eq(200);
          response.body.forEach((author) => {
            expect(author).to.have.property('idBook',env.GetAuthorByIdBook.idBook);
            expect(author).to.have.property('id');
            expect(author).to.have.property('firstName');
            expect(author).to.have.property('lastName');
          });    
        })
    })

    it('Get Author By wrong book Id', () => {
        cy.request(
            {
                method: 'Get',
                url:env.URL +'/api/v1/Authors/authors/books/'+env.GetAuthorByIdBook.WrongBookId,
                failOnStatusCode: false,
                body:
                {},
            },
        ).then((response) => {
            expect(response.status).to.eq(400);
            expect(response.body.title).to.eq(env.GetAuthorByIdBook.title);        
        })
    })
})