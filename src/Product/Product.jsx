import React from 'react'
import { incrAction,decrAction } from '../redux/product/product.action'
import { useDispatch,useSelector} from 'react-redux'
const Product = () => {
 let dispatch=useDispatch()
    let incrHandler=()=>{
      dispatch(incrAction())
    }
    let decrHandler=()=>{
        dispatch(decrAction())
    }

    let prod_obj=useSelector((state)=>{
            return state
    })
  return (
    <div>
      <h2>Prod Component.....</h2>
      <hr/>
      <pre>{JSON.stringify(prod_obj)}</pre>
      <pre>{JSON.stringify (prod_obj.qty)}</pre>
      <button  className="btn btn-danger" onClick={incrHandler}>INCRE</button>
            {prod_obj.qty   }
      <button className="btn btn-primary" onClick={decrHandler}>DECRE</button>
    </div>
  )
}

export default Product
