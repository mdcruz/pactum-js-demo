const { spec } = require('pactum')

describe('Todo API', () => {
  it('should return the correct headers', async () => {
    await spec()
      .get('http://jsonplaceholder.typicode.com/todos')
      .expectHeader('content-type', 'application/json; charset=utf-8')
  })

  it('should create a new todo item', async () => {
    await spec()
      .post('http://jsonplaceholder.typicode.com/todos')
      .withJson({
        'title': 'Write blog post',
        'body': 'Write blog post about PactumJS',
        'userId': 1
      })
      .expectStatus(201)
      .expectJsonLike('title', 'Write blog post')

      // or you can also do a strict comparison
      // .expectBody({
      //   'title': 'Write blog post',
      //   'body': 'Write blog post about PactumJS',
      //   'userId': 1,
      //   'id': 201
      // })
  })

  it('should delete a todo item', async () => {
    await spec()
      .delete('https://jsonplaceholder.typicode.com/todos/1')
      .expectStatus(200)
  })
})