let container = document.querySelector('.product-row');
console.log(container);
let products = [
  {
    id: 1,
    name: 'Iphone',
    model: 'Iphone 13',
    imageUrl:
      'https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iphone13_hero_09142021_inline.jpg.large.jpg',
    description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eius
    veritatis quo dolore nisi. Doloribus dolor tempore quibusdam dolorem fugiat.`,
  },
  {
    id: 2,
    name: 'Nokia',
    imageUrl: 'https://m.media-amazon.com/images/I/613NsK5YFxL._AC_SX522_.jpg',
    model: '9',
    description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eius
    veritatis quo dolore nisi. Doloribus dolor tempore quibusdam dolorem fugiat.`,
  },
  {
    id: 3,
    name: 'Samsung',
    model: 'S21 Ultra',
    imageUrl:
      'https://fdn.gsmarena.com/imgroot/reviews/21/samsung-galaxy-s21-ultra/lifestyle/-1200w5/gsmarena_003.jpg',
    description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eius
    veritatis quo dolore nisi. Doloribus dolor tempore quibusdam dolorem fugiat.`,
  },
  {
    id: 4,
    name: 'Motorola',
    model: 'Flip',
    imageUrl:
      'https://i.insider.com/5dcecc517eece5677f741125?width=750&format=jpeg&auto=webp',
    description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eius
    veritatis quo dolore nisi. Doloribus dolor tempore quibusdam dolorem fugiat.`,
  },
];

//sending data to the dom
for (let index = 0; index < products.length; index++) {
  const element = products[index];
  container.innerHTML += `
        <div class="col-md-4 mb-4">
            <h4>${element.name}: ${element.model}</h4>
            <div class="product-img" data-bg="${element.imageUrl}"></div>
            <!--<img src="${element.imageUrl}">-->
            <p>${element.description.slice(0, 50)}... </p>
            <a href="#" class="btn btn-outline-primary id="read-more">read more</a>
        </div>
  `;
}

const productImg = document.querySelectorAll('.product-img');
for (let index = 0; index < productImg.length; index++) {
  const element = productImg[index];
  element.style.backgroundImage = `url('${element.dataset.bg}')`;
}
