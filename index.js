const axios = require('axios');

const url = axios.create ({
      baseURL: 'https://jsonplaceholder.typicode.com/',
  });
  
  
new Promise(function (resolve, reject) {
    setTimeout(() => resolve(url.get('posts/1')), 1000);
})
.then((res) => {
    if (res.status !== 200) {
        throw new Error("Not expected status");
    }
    console.log('TEST1: Success');
})
.catch((err) => {
    console.error(err);
});


new Promise(function (resolve, reject) {
    setTimeout(() => resolve(url.post('/posts', {title: 'foo', body: 'bar', userId: 1}), 1000));
})
.then((res) => {
    // console.log(res);

    if (res.status !== 201) {
        throw new Error("Not 201");
    }
    return res;
})
.then((res) => {
    if (res.statusText !== 'Created') {
        throw new Error("Not Craeted");
    }
    console.log('TEST2: Success');
})
.catch((err) => {
    console.error(err);
});

