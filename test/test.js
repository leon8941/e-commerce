const chai = require('chai')
const chaiGraphQL = require('chai-graphql')

chai.use(chaiGraphQL)

const expect = chai.expect

const url = `http://localhost:8080`
const request = require('supertest')(url)

describe('Client side unit test', () => {
  it('perform sign in operation and should return a token, then uid should match', (done) => {
    request.post('/graphql')
    .send({
      query: `
        mutation {
          signIn(email: "johnwatson@gmail.com", password: "123456") {
            user {
              id
            }
            token
          }
        }
      `
    })
    .expect(200)
    .end(async (err, res) => {
      if (err) return done(err)
      const responseBody = res.body.data.signIn

      expect(responseBody).to.have.property('token')
      expect(responseBody).to.have.property('user')

      const user = responseBody.user
      const token = responseBody.token
      const { firebase } = require('../src/config/google/config')
      const clientResponse = await firebase.auth().signInWithCustomToken(token)

      expect(clientResponse.user.uid).to.eql(user.id)

      
      done()
    })
  })

  it('get a user object by id', (done) => {
    const correctResponse = {
      "data": {
        "user": {
          "id": "be81ec56-a8e0-404f-9e41-7cee6129313e",
          "email": "johnwick@gmail.com"
        }
      }
    }

    request.post('/graphql')
    .send({ 
      query: `{ 
        user(id: "be81ec56-a8e0-404f-9e41-7cee6129313e") {
          id 
          email 
        } 
      }`
    })
    .expect(200)
    .end((err, res) => {
      if (err) return done(err)
      expect(correctResponse).to.be.deep.equal(res.body)
      done()
    })
  })
}) 