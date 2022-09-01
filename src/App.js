import ItemCount from './components/ItemCounter';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';

function App() {

  const agregarAlCarrito = (cantidad) => {
    alert(`Se agrego la cantidad ${cantidad} al carrito`);
  }

  return (
    <>
      <ItemListContainer greeting={'Hola! Bienvenidos a nuestra app!'}/>
      <NavBar/>
      <ItemCount initial={1} stock= {5} onAdd={agregarAlCarrito}/>
    </>
      
      );
    }
    

export default App;
