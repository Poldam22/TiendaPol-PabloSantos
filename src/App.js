import NavBar from './components/NavBar';
import ItemDetailContainer from './containers/ItemDetailCounteiner';
import ItemListContainer from './containers/ItemListContainer';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NotFound from './components/NotFound';
import CartContainer from './containers/CartContainer';
import Provedor from './context/ProvedorCart';
// import { useEffect } from 'react';
// import AlgoritmoGuardoAutomatico from './services/guardarProductos';


function App() {

  // useEffect(()=>{
  //   console.log('una sola vez');
  //   AlgoritmoGuardoAutomatico()
  // }, [])

  return (
   <Provedor>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
        <Route path='/cart' element={<CartContainer/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
   </Provedor>

    
      
      );
    }
    

export default App;
