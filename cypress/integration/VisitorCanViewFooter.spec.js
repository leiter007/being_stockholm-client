describe('Visitor can view Footer', () => {

  beforeEach(function () {
    cy.viewport(1366, 542)
    cy.server()
    cy.route({
      method: 'GET',
      url: 'http://localhost:3002/api/v1/posts',
      response: 'fixture:list_of_posts.json',
      status: 200
    })
    cy.visit('http://localhost:3000/')
  })

  it('and see logo', () => {
    cy.contains('Being Stockholm')
  })

  it('and click and see sidebar menu', () => {
    cy.get('#menu-sidebar').should('not.be.visible')
    cy.get('#footer-menu-icon').click()
    cy.get('#menu-sidebar').should('be.visible')

    let text = ['About Project', 'Log in / Sign up', 'Get in touch', 'Partners', 'Legal info']

    text.forEach(link => {
      cy.get('#menu-sidebar').contains(link)
    })

    cy.get('#footer-menu-icon').click()
    cy.get('#menu-sidebar').should('not.be.visible')
  })
})
