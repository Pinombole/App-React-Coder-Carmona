import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import ItemListContainer from './componentes/ItemListContainer';
import NavBar from "./componentes/NavBar";

const App = () => {
    return (
        <>
            <NavBar />
            <ItemDetailContainer />
            <ItemListContainer />
        </>
    )
}

export default App