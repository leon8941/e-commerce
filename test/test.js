const chai = require('chai')
const chaiGraphQL = require('chai-graphql')

chai.use(chaiGraphQL)

const assert = chai.assert
const expect = chai.expect


const url = `http://localhost:8080/graphql/`
const request = require('supertest')(url)

describe('Client side unit test', () => {
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