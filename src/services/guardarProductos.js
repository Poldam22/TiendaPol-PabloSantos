import { collection, addDoc } from "firebase/firestore";
import { db } from '../firebase/config';

const AlgoritmoGuardoAutomatico = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const productos = await response.json( );
    
productos.forEach(async producto => {
    
    const docRef = await addDoc(collection(db, "products"), {
      title: producto.title,
      category: producto.category,
      description: producto.description,
      image: producto.image,
      price: producto.price,
      stock: 20
    });
    (docRef.id);
});
  } catch (error) {
    console.log(error);
  }
}

export default AlgoritmoGuardoAutomatico