const products = [
  {
    id: '1',
    tittle: 'Gato Uno',
    price: 5000,
    image: 'http://placekitten.com/g/150/200',
    cuotas: '6 sin interes',
    plazoDevolucion: 'el plazo de devolución es de 40 días',
    category: 'pantalones',
  },
  {
    id: '2',
    tittle: 'Gato Dos',
    price: '4500',
    image: 'http://placekitten.com/g/150/200',
    cuotas: '12 sin interes',
    plazoDevolucion: 'el plazo de devolución es de 100 días',
    category: 'remeras',
  }
]

const getData = () => {
  const retProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products)
    }, 2000);
  });
  return retProducts;
}

export default getData;
