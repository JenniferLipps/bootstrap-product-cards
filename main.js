const products = [
    {
      title: 'product1',
      description: 'bla bla',
      imageUrl: 'https://i.imgur.com/e0u37lt.jpg',
      size: '4" x 4"',
      weight: '8 oz.',
      price1: '$1.99',
      price2: '$1.49',
      price3: '$0.99',
      validUntil: '04/01/2016',
    },
    {
        title: 'product2',
        description: 'bla bla',
        imageUrl: 'https://i.imgur.com/e0u37lt.jpg',
        size: '4" x 4"',
        weight: '8 oz.',
        price1: '$1.99',
        price2: '$1.49',
        price3: '$0.99',
        validUntil: '04/01/2016',
      },
      {
        title: 'product3',
        description: 'bla bla',
        imageUrl: 'https://i.imgur.com/e0u37lt.jpg',
        size: '4" x 4"',
        weight: '8 oz.',
        price1: '$1.99',
        price2: '$1.49',
        price3: '$0.99',
        validUntil: '04/01/2016',
      },
      {
        title: 'product4',
        description: 'bla bla',
        imageUrl: 'https://i.imgur.com/e0u37lt.jpg',
        size: '4" x 4"',
        weight: '8 oz.',
        price1: '$1.99',
        price2: '$1.49',
        price3: '$0.99',
        validUntil: '04/01/2016',
      },
      {
        title: 'product5',
        description: 'bla bla',
        imageUrl: 'https://i.imgur.com/e0u37lt.jpg',
        size: '4" x 4"',
        weight: '8 oz.',
        price1: '$1.99',
        price2: '$1.49',
        price3: '$0.99',
        validUntil: '04/01/2016',
      },
];

console.log ('products', products);

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const domStringBuilder = () => {
    let domString = '';
    products.forEach((product) => {
        domString += `<h3>${product.title}</h3>`
    });
    printToDom('product-container', domString);
}

const init = () => {
    domStringBuilder();
};

init();