import React, { useRef } from 'react'

const  Reg = () => {

    let btnRef=useRef()
    let acceptTC = (event)=>{
        console.log(event.target.checked)
       
        if(event.target.checked ===true){
            btnRef.current.disabled  = false
        }
        else{
            btnRef.current.disabled  = true
        }
 }
  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-4">
                <h2>Registration component</h2>
                <from>
                    <div className='form-group'>
                        <input className='form-control' type="text" placeholder='User Nme'/>
                    </div>

                    <div className='form-group'>
                        <input className='form-control' type="text" placeholder='mobile'/>
                    </div>
                    <div>
                        <input className='form-check' type="checkbox" onChange={acceptTC}/>Please accept T&C
                    </div>
                    <input type="submit"  value="Regester"className='btn btn-primary' disabled ref={btnRef}/>
                    
                    </from>
            </div>
        </div>

      
    </div>
  )
}

export default  Reg
