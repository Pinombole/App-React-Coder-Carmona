import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './componentes/ItemListContainer';
import NavBar from "./componentes/NavBar";

const App = () => {
    return (
        <>
            <NavBar />
            <ItemListContainer saludo="Bienvenidos a Tienda Loca" />
        </>
    )
}

export default App