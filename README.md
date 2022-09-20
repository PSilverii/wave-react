# Wave | Fake E-Commers | Patricio Silverii

Wave es una tienda de ropa falsa desarrollada con ReactJS.
En este proyecto elegí implementar SASS por la funcionalidad que permiten los mixins y las variables para definir los estilos del sitio.

# Pre-entrega del proyecto final

La consigna de esta entrega es configurar la navegabilidad de la app.
La ruta de mi componente Router es '/src/app/Router.js'
En este proyecto existen dos componentes llamados Home.js y Categories.js, que se encuentran en '/src/views/...', cuya funcionalidad es contener otros componentes para crear vistas diferentes en el sitio.
```javascript
const Home = () => {
  return (
    <>
    <FirstViewIndex />
    <FeaturedProducts />
    <Banner />
    </>
  )
}
```


```javascript
const Categories = () => {
  return (
    <>
      <ViewsHeader />
      <section className="categories">
        <FilterDesktop />
        <ItemListContainer />
      </section>
    </>
  )
}
```

Además añadí otro componente global que se encuentra en '/src/app/Layout.js' que renderiza los componentes globales del sitio
```javascript
const Layout = () => {
  return (<>
    <NavBar />
    <main>
      <Outlet />
    </main>
    < Footer />
  </>
  )
}
```

Por lo que no cumplo extrictamente con lo solicitado, explico por un lado la consigna, y por otro las modificaciónes que hice en este proyecto.

### Rutas a configurar

-Consigna
'/' navega a <ItemListContainer />
'/category/:id' <ItemListContainer />
'/item/:id' navega a <ItemDetailContainer />

-Modificaciónes en este proyecto
'/' navega a <Home /> en '/src/views/Home.js'
'/category/:id' navega a <Categories /> en '/src/views/Categories.js'
''/item/:id' navega a <ItemDetailContainer /> /* No hice cambios respecto a la consigna */

Entonces mi componente Router queda de la siguiente manera
```javascript
const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/category/:categoryId" element={<Categories />} />
            <Route path="/details/:detailsId" element={<ItemDetailContainer />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
```

# GIF 
![]