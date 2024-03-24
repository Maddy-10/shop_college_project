import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../../context/ShopContext';

export default function Shipment() {
    const { user, setUser } = useContext(ShopContext);
    useEffect(() => {
        const User = localStorage.getItem("user");
        if (User) {
          setUser(User);
        }
      }, []);
  return (
    <div>
        <div className="container">
            <h1 className='display-5'>Shipping Details</h1>
            <form action="" className='mt-5'>
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-md-5">
                        <input type="text" className='form-control mt-4' value={user} disabled />
                        <input type="number" className='form-control mt-4 w-50' placeholder='Mobile number' />
                    </div>
                    <div className="col-md-5">
                    <input type="number" className='form-control mt-4' placeholder='Mobilenumber' />
                    <input type="number" className='form-control mt-4 w-50' placeholder='Mobilenumber' />
                    </div>
                    <div className="col-1">
                        
                    </div>
                </div>
                <div className='m-5'>
                <button className='btn btn-primary' onClick={(e)=>{
                    e.preventDefault()
                    alert('Order Placed...! \n\nThankyou For Shopping :-) \n\nVisit Again..!')
                }}>Checkout</button>
                </div>
            </form>
        </div>
    </div>
  )
}
