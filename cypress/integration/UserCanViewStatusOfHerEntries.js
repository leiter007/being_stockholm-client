describe('User can view', () => {

  beforeEach(function () {
    cy.server()
    cy.route({
      method: 'POST',
      url: 'http://localhost:3002/api/v1/auth/sign_in',
      status: 200,
      response: 'fixture:successful_login_user.json',
      headers: {
        "uid": "carla@mail.com"
      }
    })
    cy.route({
      method: 'GET',
      url: 'http://localhost:3002/api/v1/posts',
      response: 'fixture:list_of_posts.json',
      status: 200
    })
    cy.visit('http://localhost:3000')
    cy.get('#profile-icon').click()
    cy.get('#login-form').within(() => {
      cy.get('#email').type('carla@mail.com')
      cy.get('#password').type('password')
    })
    cy.get('#login_form_button').click()
    cy.wait(3000)
    cy.get('#profile-icon').click()
  })

  it('status of her entries', () => {
    cy.get('#published-entries').within(() => {
      cy.contains('Your published entries')
      cy.contains('Midsummer joy in Södermalm')
      cy.contains('Hard day at the office')
    })
    cy.get('#pending-entries').within(() => {
      cy.contains('Your pending entries')
      cy.contains('Work hard, play hard')
      cy.contains('A crazy night out')
    })
    cy.get('#declined-articles').within(() => {
      cy.contains('Your declined entries')
      cy.contains('I like to swear €%€#&&#')
    })
  })
})