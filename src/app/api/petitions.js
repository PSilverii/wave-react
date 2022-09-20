import joggerCargoFirst from '../../assets/img/products/pantalones/jogger-cargo/11128305-j-11-6375799674e2a78fb216515002948587-640-0.jpg';
import joggerCargo_2 from '../../assets/img/products/pantalones/jogger-cargo/11128305-j-21-eabcc8a59df1dbb42d16515002946273-640-0.jpg';
import joggerCargo_3 from '../../assets/img/products/pantalones/jogger-cargo/11128305-j-61-1d12ab637f7908065016515002946497-640-0.jpg';
import joggerCargo_4 from '../../assets/img/products/pantalones/jogger-cargo/11128305-j-71-d3b7814c1fcb0b792816515002947687-640-0.jpg';
import joggingAllDayFirstGreen from '../../assets/img/products/pantalones/jogging-all-day/mbjogall-m_41-fba92b9b942a9e4c1516466751698867-640-0.jpg';
import joggingAllDay_2Green from '../../assets/img/products/pantalones/jogging-all-day/mbjogall-m_31-87d2c5692df08d79cb16466751695461-640-0.jpg';
import joggingAllDay_3Green from '../../assets/img/products/pantalones/jogging-all-day/mbjogall-m_21-6cab75050ff1a1710c16466751694164-640-0.jpg';
import joggingAllDayFirstGrey from '../../assets/img/products/pantalones/jogging-all-day/grey/mbjogall-g_41-11b7e382ff65841d9f16466751698888-1024-1024.jpg';
import joggingAllDay_2Grey from '../../assets/img/products/pantalones/jogging-all-day/grey/mbjogall-g_11-f1e7bfd52a7fdaa13316466751698163-640-0.jpg';
import joggingAllDay_3Grey from '../../assets/img/products/pantalones/jogging-all-day/grey/mbjogall-g_21-49592330b6d1a98b3816466751699795-640-0.jpg';
import joggingFundamentalFirst from '../../assets/img/products/pantalones/jogging-fundamental/mbjogfun-a_41-a2510d4748bf87a12616466755515560-640-0.jpg';
import joggingFundamental_2 from '../../assets/img/products/pantalones/jogging-fundamental/mbjogfun-a_31-c256996f6f1b9fd44b16466755515661-640-0.jpg';
import joggingFundamental_3 from '../../assets/img/products/pantalones/jogging-fundamental/mbjogfun-a_11-10a518cf4a0c804c7816466755514106-640-0.jpg';
import fundamentalNeutralFirstWhite from '../../assets/img/products/remeras/fundamental-neutral/white/remera-1.jpg';
import fundamentalNeutral_2White from '../../assets/img/products/remeras/fundamental-neutral/white/mbremfne-b_41-1b77d338d9431f61be16630131703979-640-0.jpg';
import fundamentalNeutral_3White from '../../assets/img/products/remeras/fundamental-neutral/white/mbremfne-b_21-c88802165870faf48c16630131704562-640-0.jpg';
import fundamentalNeutralFirstBlack from '../../assets/img/products/remeras/fundamental-neutral/black/mbremfne-j_31-feb11cd8798971442616630131712262-640-0.jpg';
import fundamentalNeutral_2Black from '../../assets/img/products/remeras/fundamental-neutral/black/mbremfne-j_2-07b715005f3425947316630784226136-640-0.jpg';
import fundamentalNeutral_3Black from '../../assets/img/products/remeras/fundamental-neutral/black/mbremfne-j1-32cd81425293d59a1316630131703200-640-0.jpg';
import applyFirstYellow from '../../assets/img/products/remeras/apply/yellow/11137032-n_51-bb6fb9d28d73b911b016615372090404-640-0.jpg';
import apply_2Yellow from '../../assets/img/products/remeras/apply/yellow/11137032-n_71-c05089b3b8fc01693f16615372091280-640-0.jpg';
import apply_3Yellow from '../../assets/img/products/remeras/apply/yellow/11137032-n_61-2b98d27606dfc6fa7216615372090098-640-0.jpg';
import chombaAllDayFirstSalmon from '../../assets/img/products/remeras/chomba-all-day/salmon/mbchoall-i1-bc7f49abaae9377c4516631745265569-640-0.jpg';
import chombaAllDay_2Salmon from '../../assets/img/products/remeras/chomba-all-day/salmon/mbchoall-i-6-834c2ba60b6fbead9216631821921581-640-0.jpg';
import chombaAllDay_3Salmon from '../../assets/img/products/remeras/chomba-all-day/salmon/mbchoall-i-41-3e1d32ad3d7fa12bd816631745268572-640-0.jpg';


const products = [
  {
    id: '1',
    featured: true,
    category: 'pantalones',
    tittle: 'Jogger Cargo',
    price: 16.499,
    cuotas: '6 sin interes',
    image: {
      firstView: joggerCargoFirst,
      carrousel_2: joggerCargo_2,
      carrousel_3: joggerCargo_3,
      carrousel_4: joggerCargo_4,
    },
    textAlt: 'pantalon-jogger-cargo-varon',
    description: 'Nuestro Jogger Cargo es un pantalón de gabardina elastizado te permite estar muy cómodo y a la vez estar bien vestido para ir a donde quieras. Tiene dos bolsillos laterales, y dos bolsillos traseros, elástico en la cintura',
    specifications: {
      tela: 'Gabardina con lycra',
      characteristicOne: 'Dos bolsillos laterales y dos bolsillos traseros',
      characteristicTwo: 'Elástico en la cintura y cordón para ajustar de algodón',
      characteristicThree: 'Elástico en los ruedos',
    },
    sizes: {
      S: false,
      M: false,
      L: true,
      XL: false,
      XXL: true,
      XXXL: true,
    },
    color: "black",
  },


  {
    id: '2',
    featured: false,
    category: 'pantalones',
    tittle: 'Jogging All Day',
    price: 14.999,
    cuotas: '6 sin interes',
    image: {
      firstView: joggingAllDayFirstGreen,
      carrousel_2: joggingAllDay_2Green,
      carrousel_3: joggingAllDay_3Green,
      carrousel_4: '',
    },
    textAlt: 'pantalon-jogging-all-day-varon',
    description: 'Nuestro Jogging All Day es uno los más elegidos, por eso lo renovamos para esta temporada. Cuenta con puños en botamangas. Cintura con elástico y cordón para ajuste. Bolsillos con cierres. También tiene una etiqueta grifa de marca en pierna delantera. Pensamos en tu look y en tu comodidad.',
    specifications: {
      tela: 'Composición según variante: 85% Algodón 15% Poliéster - 75% Algodón 25% Poliéster',
      characteristicOne: 'Tejido frisa liviana',
      characteristicTwo: '',
      characteristicThree: '',
    },
    sizes: {
      S: true,
      M: false,
      L: true,
      XL: false,
      XXL: true,
      XXXL: false,
    },
    color: "green",
  },


  {
    id: '3',
    featured: true,
    category: 'pantalones',
    tittle: 'Jogging Fundamental',
    price: 13.999,
    cuotas: '6 sin interes',
    image: {
      firstView: joggingFundamentalFirst,
      carrousel_2: joggingFundamental_2,
      carrousel_3: joggingFundamental_3,
      carrousel_4: '',
    },
    textAlt: 'pantalon-jogging-fundamental-varon',
    description: 'Pantalón jogging con puños en botamangas. Cintura con elástico. Bolsillos delanteros. Etiqueta grifa de marca en pierna delantera.',
    specifications: {
      tela: 'Composición según variante: 85% Algodón sustentable 15% Poliéster - 75% Algodón 25% Poliéster',
      characteristicOne: 'Tejido frisa liviana ',
      characteristicTwo: '',
      characteristicThree: '',
    },
    sizes: {
      S: false,
      M: true,
      L: false,
      XL: true,
      XXL: true,
      XXXL: false,
    },
    color: "grey",
  },


  {
    id: '4',
    featured: false,
    category: 'pantalones',
    tittle: 'Jogging All Day',
    price: 14.999,
    cuotas: '6 sin interes',
    image: {
      firstView: joggingAllDayFirstGrey,
      carrousel_2: joggingAllDay_2Grey,
      carrousel_3: joggingAllDay_3Grey,
      carrousel_4: '',
    },
    textAlt: 'pantalon-jogging-all-day-varon',
    description: 'Nuestro Jogging All Day es uno los más elegidos, por eso lo renovamos para esta temporada. Cuenta con puños en botamangas. Cintura con elástico y cordón para ajuste. Bolsillos con cierres. También tiene una etiqueta grifa de marca en pierna delantera. Pensamos en tu look y en tu comodidad.',
    specifications: {
      tela: 'Composición según variante: 85% Algodón 15% Poliéster - 75% Algodón 25% Poliéster',
      characteristicOne: 'Tejido frisa liviana ',
      characteristicTwo: '',
      characteristicThree: '',
    },
    sizes: {
      S: true,
      M: true,
      L: true,
      XL: true,
      XXL: true,
      XXXL: true,
    },
    color: "grey",
  },

  {
    id: '5',
    featured: true,
    category: 'remeras',
    tittle: 'Fundamental Neutral',
    price: 5.999,
    cuotas: '6 sin interes',
    image: {
      firstView: fundamentalNeutralFirstWhite,
      carrousel_2: fundamentalNeutral_2White,
      carrousel_3: fundamentalNeutral_3White,
      carrousel_4: '',
    },
    textAlt: 'remera-fundamental-neutral-varon',
    description: 'Nuestra remera Fundamental Neutral pertenece a la linea Essential, los basicos nunca pueden faltar en un guardaropas y éste no es la excepción.  Su corte es Slim Fit para que puedas lucirte en cada ocasión y realizada con algodón sustentable (Certificacion BCI) siendo que somos una marca comprometida con el medio ambiente. ',
    specifications: {
      tela: 'Algodón liso',
      characteristicOne: 'Ajuste regular',
      characteristicTwo: 'Calce más al cuerpo',
      characteristicThree: '100% Algodón sustentable',
    },
    sizes: {
      S: true,
      M: false,
      L: true,
      XL: false,
      XXL: true,
      XXXL: true,
    },
    color: "white",
  },

  {
    id: '6',
    featured: false,
    category: 'remeras',
    tittle: 'Fundamental Neutral',
    price: 5.999,
    cuotas: '6 ',
    image: {
      firstView: fundamentalNeutralFirstBlack,
      carrousel_2: fundamentalNeutral_2Black,
      carrousel_3: fundamentalNeutral_3Black,
      carrousel_4: '',
    },
    textAlt: 'remera-fundamental-neutral-varon',
    description: 'Nuestra remera Fundamental Neutral pertenece a la linea Essential, los basicos nunca pueden faltar en un guardaropas y éste no es la excepción.  Su corte es Slim Fit para que puedas lucirte en cada ocasión y realizada con algodón sustentable (Certificacion BCI) siendo que somos una marca comprometida con el medio ambiente. ',
    specifications: {
      tela: 'Algodón liso',
      characteristicOne: 'Ajuste regular',
      characteristicTwo: 'Calce más al cuerpo',
      characteristicThree: '100% Algodón sustentable',
    },
    sizes: {
      S: true,
      M: false,
      L: true,
      XL: false,
      XXL: true,
      XXXL: true,
    },
    color: "black",
  },

  {
    id: '7',
    featured: true,
    category: 'remeras',
    tittle: 'Remera Apply',
    price: 6.999,
    cuotas: '6 ',
    image: {
      firstView: applyFirstYellow,
      carrousel_2: apply_2Yellow,
      carrousel_3: apply_3Yellow,
      carrousel_4: '',
    },
    textAlt: 'remera-apply-varon',
    description: 'La remera Apply te mantiene cómodo con un diseño clásico tradicional. Confeccionada con suave algodón sustentable, que te brinda una sensación súper suave al tacto. Cuenta con un pequeño aplique en el pecho, de mangas cortas y cuello redondo, ideal para usarla en todo momento.',
    specifications: {
      tela: '100% Algodón sustentable.',
      characteristicOne: 'Remera basica con aplique bordado',
      characteristicTwo: '',
      characteristicThree: '',
    },
    sizes: {
      S: true,
      M: true,
      L: true,
      XL: true,
      XXL: true,
      XXXL: true,
    },
    color: "yellow",
  },

  {
    id: '8',
    featured: false,
    category: 'remeras',
    tittle: 'Chomba All Day',
    price: 14.999,
    cuotas: '6 ',
    image: {
      firstView: chombaAllDayFirstSalmon,
      carrousel_2: chombaAllDay_2Salmon,
      carrousel_3: chombaAllDay_3Salmon,
      carrousel_4: '',
    },
    textAlt: 'chomba-all-day-varon',
    description: 'Chomba mangas cortas . Cartera con botones en delantero. La All Day es una de las chombas más pedidas que nos encargamos de ajustarlo para cada temporada. ¿Qué esperas?',
    specifications: {
      tela: '50% Algodón - 50% Poliéster',
      characteristicOne: 'Etiqueta grifa de marca en delantero.',
      characteristicTwo: '',
      characteristicThree: '',
    },
    sizes: {
      S: true,
      M: true,
      L: true,
      XL: false,
      XXL: true,
      XXXL: true,
    },
    color: "salmon",
  },
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
