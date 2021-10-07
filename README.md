# Carrito de Compra con React Hooks

El proyecto fue creado por **Emmanuel Carmona** durante el Curso de **React Js** de la plataforma [Coderhouse](https://www.coderhouse.com), dictado por **Horacio Gutierrez**. El curso forma parte de la etapa final de la **carrera Desarrollo Front End** del año 2021. 

<div align="center">
    <a target="_blank" href="public/img-readme/index-1.jpg"><img src=public/img-readme/index-1-th.jpg width="300px" alt="Index 1 App"></a>
    <a target="_blank" href="public/img-readme/index-2.jpg"><img src=public/img-readme/index-2-th.jpg width="300px" alt="Index 1 App"></a>
    <a target="_blank" href="public/img-readme/detail.jpg"><img src=public/img-readme/detail-th.jpg width="300px" alt="Index 1 App"></a>
</div>
<div align="center">
    <a target="_blank" href="public/img-readme/filtro-1.jpg"><img src=public/img-readme/filtro-1-th.jpg width="300px" alt="Index 1 App"></a>
    <a target="_blank" href="public/img-readme/filtro-2.jpg"><img src=public/img-readme/filtro-2-th.jpg width="300px" alt="Index 1 App"></a>
    <a target="_blank" href="public/img-readme/filtro-3.jpg"><img src=public/img-readme/filtro-3-th.jpg width="300px" alt="Index 1 App"></a>
</div>
<div align="center">
    <a target="_blank" href="public/img-readme/cartFloat.jpg"><img src=public/img-readme/cartFloat-th.jpg width="300px" alt="Index 1 App"></a>
    <a target="_blank" href="public/img-readme/cart.jpg"><img src=public/img-readme/cart-th.jpg width="300px" alt="Index 1 App"></a>
    <a target="_blank" href="public/img-readme/formulario-pedido.jpg"><img src=public/img-readme/formulario-pedido-th.jpg width="300px" alt="Index 1 App"></a>
</div>

## Flujo de Compra y Descripción Componentes.

La aplicación desarrollada consiste en una Tienda con Carrito de Compras que utiliza como principal herramienta los **Hooks** de Estado y Contexto de ReactJS. Se obtienen los productos de una base de datos y se los visualiza en una grilla. Cada Item tiene además un link para acceder a un detalle del producto seleccionado y agregarlo al carrito. 
La App tiene, ademas un **NavBar.js** con un filtro de categorías de productos y un **CartWidget.js** que nos muestra si el carrito tiene productos y su cantidad total a través de un elemento *badge* de Bootstrap. 

El flujo de compra de la App consiste en un **ItemListContainer.js** que obtiene los productos de una *Base de Datos Firestore*. Un **ItemList.js** que distribuye esos objetos en una grilla con un método *map* a la vez que envia los props a los respectivos componentes **Item.js** que se visualizan en pantalla. El componente **ItemDetalContainer.js** hace lo propio seleccionando por *Id* el producto que el usuario elige (a traves de un botón/link) y mostrando el deltalle de dicho producto en el componente **ItemDetail.js**. Tanto ItemDetail.js como Item.js incorporan el componente **ItemCount.js** que permite disminuir y agregar la cantidad de un mismo producto que se quiera agregar al carrito. 

Todos los productos agregados por el usuario en el carrito se almacena en el **CartContex.js** para poder ser consultado desde distintos componentes. *CartContext.js* tiene una serie de métodos que también serán utilizados en distintos componente de la App, como el propio *Agregar al Carrito*, *Vacial el Carrito*, *Borrar un Item* o *Calcular el Precio Total*. 

Finalmente, hay dos componentes, **Cart.js** y **CartFloat.js**, que visualizan el carrito obtenido del componete *CartContext.js*. *CartFloat* es un carrito que aparece flotando en el *CartWidget.js* cuando hacemos hover en él. Permite, al igual que *Cart.js*, borrar productos del carrito. *Cart.js* es el carrito principal, donde se procede al checkout que carga el componente **BuyerForm.js** con un Formulario que nos permite recibir los datos del usuario, junto al pedido, para ser almacenado en una colección de Firestore. 

## Librerias y Frameworks

Para el desarrollo de la aplicación se utilizó [Create React App](https://create-react-app.dev). La maquetación se hizo con la libreria [Bootstrap 5](https://getbootstrap.com/docs/5.1/getting-started/introduction/). Los productos, a modo de ejemlplo, se sacaron de la Api [Fake Store Api](https://fakestoreapi.com/) pero luego se cargaron en una colección de la base de datos [Firebase Firestore](https://firebase.google.com/docs/web/setup) de Google.

## Instalación y Customización de la App

Para empezar a utilizar esta App se la debe clonar. Una vez hecho esto, se debe ir a alguna consola como GitBash o Cmder, acceder al directorio de la App y ejecutar el comando *npm start*. Esto ejecutara automaticamente un servidor local con la direccion URL *localhost:3000* en el navegador predeterminado. O bien se puede acceder a ese URL manualmente, una vez inicializada la App en la consola (y siempre y cuando siga ejecutandose). La App también dispone de un versionador Git Local con una rama principal llamada main.

Para cambiar los productos del carrito se podría crear una base de datos en **Firestore** y modificar la variable *firebaseConfig* del archivo **firebase.js** con los datos de configuración provistos en su consola. Una vez hecho eso y creada una colección de Firestore propia, se debe modificar el nombre de la colección "productos" en ItemListContainer y en ItemDetailContainer, actualmente referida como *firestore.collection("productos")*. 

Los estilos *CSS* están implementados de una hoja de estilos con lenguaje *SASS*. El diseño se basa en dos colores, principal y secundario, y un fondo blanco. Al principo de la hoja de estilos están ubicadas las variables mas importantes. Al modificar las variables *$colorPrimario* y *$colorSecundario* se puede modificar sencillamente los colores de todo el diseño. Lo mismo ocurre con la fuente *Yaldevi* que se encuentra en la variable *$font*. Al cambiar el valor de dicha variable por el de otra fuente importada y los valores de las variables *$font-regular* y *$font-bold* por los que correspondan, se podrá cambiar facilmente el estilo de fuente de todo la App.

## Convenciones

La convención utilizada para organizar los distintos elementos de cada componente fue lo siguiente: Primero se importaron, en la parte superior, todas las funciones, hooks o componentes que van a ser utlizados. Ya dentro del componente se colocaron, em la parte superior, la aplicacion de los hooks *useState* o *useContext* y las funciones *destructuring* que asignan variables dichos hooks. Seguido a eso todas las definiciones de variables restantes necesitadas. Luego se escribieron funciones a ser utilizadas en el componente. Se trató, en general, de que cada linea de codigo asincrónica esté ubicada en el orden en que la aplicación las ejecuta por lo que los Hooks *useEffect* se ubicaron al final de cada componente. ras esto se dió paso al *retorno* del componente con el correspondiente lenguaje *JSX*. Y finalmente la exportación del componente. 

Se usó principalmente el estilo camelCase con palabras del idioma español, salvo contadas excepciones em inglés, que corresponden a consignas del curso en el que fue realizada la App. 

La libreria *Bootstrap* se utilizó princpalmente para la maquetación por grilas y columnas, el Formulario y la validación Front End, el spinner de carga y los efectos de algunos botones cuyo color fue modificado por una hoja de estilos propia. 

## Mejoras para hacer

Algunos cambios sugeridos para futuras versiones pueden ser el de hacer responsive el *navBar* ya que no se visualiza bien en dispositivos móviles. Se puede implementar un *menú hamburguesa* para las categorias. Además se podría incorporar un logo en imagen junto al titulo o en reemplazo de este de ser necesario. En el Cart se puede incluir una sección de pago y facturación a través de alguna API, para complementar o reemplazar el formulario de pedido/orden. Y, por último, hacer que al concretarse el pedido, disminuya el stock de los productos adquiridos en la colección de productos de Firestore.