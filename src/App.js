import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import ItemListContainer from './componentes/ItemListContainer';
import CustomProvider from './componentes/CartContext';
import NavBar from './componentes/NavBar';
import Cart from './componentes/Cart';
import Footer from './componentes/Footer'


const App = () => {
    return (
        <>
            <BrowserRouter>
                <CustomProvider>
                    <NavBar />
                    <main>
                        <Switch>
                            <Route path="/" component={ItemListContainer} exact />
                            <Route path="/productos/:categoria" component={ItemListContainer} />
                            <Route path="/item/:id" component={ItemDetailContainer} />
                            <Route path="/carrito" component={Cart} />
                        </Switch>
                    </main>
                    <Footer />
                </CustomProvider>
            </BrowserRouter>
        </>
    )
}

export default App