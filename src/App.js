import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import ItemListContainer from './componentes/ItemListContainer';
import NavBar from './componentes/NavBar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = () => {
    return (
        <>
            <BrowserRouter>

                <NavBar />

                <Switch>
                    <Route path="/" component={ItemListContainer} exact />
                    <Route path="/productos/:categoria" component={ItemListContainer} />
                    <Route path="/item/:id" component={ItemDetailContainer} />
                </Switch>

            </BrowserRouter>
        </>
    )
}

export default App