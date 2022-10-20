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
      <div className="card m-3 tarjeta" id={product.id} onClick={handleNavigate}>
         <img src={product.image} className="card-img-top p-3" style={{height:'50vh'}}  alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
          </div>
      </div>
</>
  )
}


export default Item

