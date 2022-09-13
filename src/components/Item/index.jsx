import React from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'



const Item = ({product}) => {

const navigate = useNavigate();

const handleNavigate = () => {
  navigate(`/detail/${product.id}`)
}

  return (
<>
{/* <div>
      <h1>{product.title}</h1>
      <img src = {product.image} alt={product.id} width={250}/>
      </div> */}


      <div className="card m-3 tarjeta" id={product.id} onClick={handleNavigate}>
         <img src={product.image} className="card-img-top p-3" style={{height:'50vh'}}  alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
              {/* <button className="btn btn-primary m-1 w-100" onClick={handleNavigate}>Comprar</button> */}
          </div>
      </div>

</>
  )
}


export default Item

