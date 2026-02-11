describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display the page title', () => {
    cy.title().should('eq', 'Sarah Chow | Software Engineer');
  });

  it('should display the profile image', () => {
    cy.get('img[alt*="profile picture"]').should('be.visible');
  });

  it('should display the name', () => {
    cy.contains('Sarah Chow').should('be.visible');
  });

  it('should display the description', () => {
    cy.contains('software engineer').should('be.visible');
  });

  describe('Social Links', () => {
    it('should have LinkedIn link with correct attributes', () => {
      cy.get('a[href="https://www.linkedin.com/in/xtchow/"]')
        .should('exist')
        .and('have.attr', 'target', '_blank')
        .and('have.attr', 'rel')
        .and('contain', 'noopener');
    });

    it('should have GitHub link with correct attributes', () => {
      cy.get('a[href="https://github.com/xtchow"]')
        .should('exist')
        .and('have.attr', 'target', '_blank')
        .and('have.attr', 'rel')
        .and('contain', 'noopener');
    });

    it('should have Email link', () => {
      cy.get('a[href="mailto:sarah@xtchow.com"]').should('exist');
    });

    it('should have Telegram link with correct attributes', () => {
      cy.get('a[href="https://t.me/xtchow"]')
        .should('exist')
        .and('have.attr', 'target', '_blank')
        .and('have.attr', 'rel')
        .and('contain', 'noopener');
    });

    it('should have Chess.com link with correct attributes', () => {
      cy.get('a[href="https://www.chess.com/member/xtchow"]')
        .should('exist')
        .and('have.attr', 'target', '_blank')
        .and('have.attr', 'rel')
        .and('contain', 'noopener');
    });
  });

  describe('Footer Social Icons', () => {
    it('should have accessible social links with aria-labels', () => {
      cy.get('footer a[aria-label="Visit LinkedIn"]').should('exist');
      cy.get('footer a[aria-label="Visit GitHub"]').should('exist');
      cy.get('footer a[aria-label="Visit Email"]').should('exist');
    });

    it('should open footer links in new tab', () => {
      cy.get('footer a').each(($link) => {
        cy.wrap($link)
          .should('have.attr', 'target', '_blank')
          .and('have.attr', 'rel')
          .and('contain', 'noopener');
      });
    });
  });

  describe('Responsive Viewports', () => {
    it('should display correctly on mobile (375px)', () => {
      cy.viewport(375, 667);
      cy.contains('Sarah Chow').should('be.visible');
      cy.get('img[alt*="profile picture"]').should('be.visible');
    });

    it('should display correctly on tablet (768px)', () => {
      cy.viewport(768, 1024);
      cy.contains('Sarah Chow').should('be.visible');
      cy.get('img[alt*="profile picture"]').should('be.visible');
    });

    it('should display correctly on desktop (1024px)', () => {
      cy.viewport(1024, 768);
      cy.contains('Sarah Chow').should('be.visible');
      cy.get('img[alt*="profile picture"]').should('be.visible');
    });
  });
});
