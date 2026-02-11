describe('URL Redirects', () => {
  it('should redirect /linkedin to LinkedIn profile', () => {
    cy.request({
      url: '/linkedin',
      followRedirect: false,
    }).then((response) => {
      expect(response.status).to.eq(307);
      expect(response.redirectedToUrl).to.eq('https://www.linkedin.com/in/xtchow/');
    });
  });

  it('should redirect /github to GitHub profile', () => {
    cy.request({
      url: '/github',
      followRedirect: false,
    }).then((response) => {
      expect(response.status).to.eq(307);
      expect(response.redirectedToUrl).to.eq('https://github.com/xtchow');
    });
  });

  it('should redirect /email to mailto link', () => {
    cy.request({
      url: '/email',
      followRedirect: false,
    }).then((response) => {
      expect(response.status).to.eq(307);
      expect(response.redirectedToUrl).to.eq('mailto:sarah@xtchow.com');
    });
  });

  it('should return 404 for unknown slugs', () => {
    cy.request({
      url: '/unknown-page-that-does-not-exist',
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(404);
    });
  });
});
