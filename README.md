# Wave | Fake E-Commers | Patricio Silverii

Wave es una tienda de ropa falsa desarrollada con ReactJS.
En este proyecto elegí implementar SASS por la funcionalidad que permiten los mixins y las variables para definir los estilos del sitio.
También utilice Firebase como base de datos NoSQL.

## Descargá este proyecto en tu PC
Para descargar los paquetes escribí en la consola
```bash
npm install
```

#### SASS
Para ejecutar el pre-procesador de CSS
```bash
npm run watch-css
```

## Organización de carpetas

```bash
src/
├── app
│   └── api
│   │   └── firebaseApi.js
│   └── firebase.js
│   └──Layout.js
│   └──Router.js
│
├── components
│   │
│   └──ComponentName.js
│   └──ComponentName.js
│   └──ComponentName.js
│   └──...
│
├── containers
│   │
│   └── ItemDetailContainer.js
│   └── ItemListContainer.js
│
├── context
│   │
│   └── CartProvider.js
│
├── styles
│   │
│   └── css
│   │   └── App.css
│   └── scss
│       └── components
│       │   └── _componentName.scss
│       │   └── _componentName.scss
│       │   └── _componentName.scss
│       │   └── ...
│       │
│       └──global
│       │  └── _grids.scss
│       │  └── _productClass.scss
│       │
│       └──sass
│       │  └── _mixins.scss
│       │
│       └──variables
│       │  └── _variables.scss
│       │  
│       └──App.scss
│
├──views
│   │
│   └── Categories.js
│   └── Home.js
│
├── App.js
└── index.js
```

## Demo
### Navbar y catálogo
![](https://github.com/PSilverii/wave-react/blob/master/readme__img/gif_navbarCatalogo.gif)

### Detalle del producto

![](https://github.com/PSilverii/wave-react/blob/master/readme__img/gif_detalleProducto.gif)

### CartContext

#### Agregar y eliminar datos del contexto
![](https://github.com/PSilverii/wave-react/blob/master/readme__img/gif_agregaEliminaContext.gif)

#### Agregar dos objetos iguales al context no los duplica, sino que suma las cantidades.
![](https://github.com/PSilverii/wave-react/blob/master/readme__img/gif_agregaNoDuplica.gif)


### Formulario de compra

![](https://github.com/PSilverii/wave-react/blob/master/readme__img/gif_orderForm.gif)
