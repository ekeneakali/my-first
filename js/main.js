// let header = document.getElementById('heading');
// let paragraph = document.getElementsByTagName('p');
// // document.getElementById();
// // document.getElementsByTagName();
// // const container = document.getElementsByClassName('container');
// // const container = document.querySelector('.container');
// const container = document.querySelectorAll('.container');

// header.style.color = 'red';
// header.style.fontSize = '48px';

// // header.setAttribute('class', 'text-center');
// header.classList.add('bg-red', 'text-center', 'text-shadow');

// header.innerHTML = '<em>I love javascript</em>';
// header.innerText = '<em>I love javascript</em>';

// for (let index = 0; index < paragraph.length; index++) {
//   let element = paragraph[index];
//   element.style.color = 'yellow';
// }

// console.log(container);
// // for (let index = 0; index < container.length; index++) {
// //   const element = container[index];
// //   element.style.color = 'brown';
// // }

// //this is because container was gotten by querySelectorAll
// container.forEach((element) => {
//   element.style.color = 'brown';
// });

//CREATE ELEMENTS WITH JAVASCRIPT
let header = document.getElementById('heading');
const container = document.querySelectorAll('.container');

const p = document.createElement('p');
p.style.fontSize = '30px';
p.style.color = 'green';
// p.textContent = 'Hello world';
// p.innerHTML = 'Hello world';
// p.innerText = 'Hello world';
const pText = document.createTextNode('Hello World');
p.appendChild(pText);
// document.body.appendChild(p);
document.body.insertBefore(p, header);

let products = [
  {
    id: 1,
    name: 'Iphone',
    model: 'Iphone 13',
  },
  {
    id: 2,
    name: 'Nokia',
    model: '9',
  },
  {
    id: 3,
    name: 'Samsung',
    model: 'S21 Ultra',
  },
];

//EVENT LISTENERS
let change = document.getElementById('change');
let hide = document.getElementById('hide');
let box = document.getElementById('box');
let modalBox = document.querySelector('.modal-box');
let launchModal = document.querySelector('#launch');
console.log(launchModal);

launchModal.addEventListener('click', () => {
  modalBox.style.display = 'block';
});
change.addEventListener('click', (event) => {
  document.body.style.backgroundColor = 'black';
  document.body.style.color = '#fff';
});

hide.addEventListener('click', function (event) {
  box.classList.toggle('hide');
  // box.style.display = 'none';
});
