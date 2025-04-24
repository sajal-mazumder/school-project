// alert('hello')
// console.log('hello');

// fetch("https://jsonplaceholder.typicode.com/posts")
// .then((response) => response.json())
// .then((data) => console.log(data));


// fetch("https://jsonplaceholder.typicode.com/todos")
// .then((response) => response.json())
// .then((data) => console.log(data));

// fetch("https://jsonplaceholder.typicode.com/albums")
// .then((response) => response.json())
// .then((data) => console.log(data));


// globe dots by html css and js

const globe = document.getElementById('globe');
const dots = 500;
const radius = 180;

for(let i = 0; i < dots; i++){
    const dot = document.createElement('div');
    dot.className = 'dot';

    const theta = Math.acos(1 - 2 * (i + 0.5) / dots);
    const phi = Math.PI * (1 + Math.sqrt(5) * (i + 0.5));
    const x = radius *Math.sin(theta) * Math.cos(phi);
    const y = radius * Math.sin(theta) * Math.sin(phi);
    const z = radius * Math.cos(theta);

    dot.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
    globe.appendChild(dot)

}

//  ai code 

// const globe = document.getElementById("globe");
// globe.style.width = "500px";
// globe.style.height = "500px";
// globe.style.position = "relative";
// globe.style.borderRadius = "50%";
// globe.style.perspective = "1000px";

// const dots = [];
// const totalDots = 100;

// for (let i = 0; i < totalDots; i++) {
//   const dot = document.createElement("div");
//   dot.style.width = "5px";
//   dot.style.height = "5px";
//   dot.style.backgroundColor = "white";
//   dot.style.position = "absolute";
//   dot.style.borderRadius = "50%";
//   globe.appendChild(dot);
//   dots.push(dot);
// }

// let angle = 0;
// function animate() {
//   angle += 0.01;
//   dots.forEach((dot, index) => {
//     const theta = (index / dots.length) * 2 * Math.PI;
//     const x = 200 * Math.cos(theta + angle);
//     const y = 200 * Math.sin(theta + angle);
//     dot.style.transform = `translate3d(${x + 250}px, ${y + 250}px, 0)`;
//   });
//   requestAnimationFrame(animate);
// }
// animate();
