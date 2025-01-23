const axios = require('axios');

const url = axios.create ({
      baseURL: 'https://jsonplaceholder.typicode.com/',
  });


test("GET user profile", async () => {
    // AAA pattern
    // Arrange - before/pre-conditions
    //Act - action
    //Assert - check that action matched some criterias
 
    const getResponse = await url.get('/posts/1');
    expect(getResponse.status).toBe(200);
});

test("POST user profile", async () => {
    const inputBody = {
        title: 'foo',
        body: 'bar',
        userId: 1
    };
    const postResponse = await url.post('/posts', inputBody);
    expect(postResponse.status).toBe(201);
});

test("PUT user profile", async () => {
    const updateBody = {
        id: 1,
        title: 'foo',
        body: 'bar',
        userId: 1,
    };
    const putResponse = await url.put("/posts/1", updateBody);
    expect(putResponse.status).toBe(200);
});

test("PATCH user profile", async () => {
    const patchBody = {
        title: 'foo'
    };
    const patchResponse = await url.patch('posts/1', patchBody);
    expect(patchResponse.status).toBe(200);
});