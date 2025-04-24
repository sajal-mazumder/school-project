// alert('hello')
// console.log('hello');

fetch("https://jsonplaceholder.typicode.com/posts")
.then((response) => response.json())
.then((data) => console.log(data));


fetch("https://jsonplaceholder.typicode.com/todos")
.then((response) => response.json())
.then((data) => console.log(data));

fetch("https://jsonplaceholder.typicode.com/albums")
.then((response) => response.json())
.then((data) => console.log(data));