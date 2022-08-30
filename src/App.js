import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';

function App() {

  return (
    <>
      <ItemListContainer greeting={'Hola! Bienvenidos a nuestra app!'}/>
      <NavBar/>
    </>
  );
}

export default App;
