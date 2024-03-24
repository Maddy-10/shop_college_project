import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const ProductDetails = () => {
  const params = useParams();
  const [products, setProducts] = useState([]);
  const [productdata, setProductdata] = useState(null);
  const [qty,setQty]=useState(1);
  const [limit,setLimit]=useState(false);
  const navigate =useNavigate();


  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await fetch("http://localhost/shopserver/api/products.php");
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        if (data.productData && Array.isArray(data.productData)) {
          setProducts(data.productData);
          // setLoading(false);
        } else {
          throw new Error('Invalid data format');
        }
      } catch (error) {
        console.error('Error fetching products:', error);
        // setLoading(false);
      }
    };
    getProduct();
  }, []);
  useEffect(() => {
    if (params.id && products.length > 0) {
      const foundItem = products.find(product => product.p_id === params.id);
      setProductdata(foundItem);
    }
  }, [params.id, products]);

  const qtyIn = (e) => {
    e.preventDefault();
    const limit = productdata.p_stock;
    if(qty<=limit)
    {
      setQty(qty+1)
    }
    else{
      setLimit(true);
    }
  }
  const qtyDec = (e) => {
    e.preventDefault();
    setQty(qty-1);
    setLimit(false)
  }

  return (
    <div>
       <div className="container">
        <div className="formbdr border border-primary p-5 m-2 rounded">
          {/* {msg && (
            <p className="border bg-success text-light fw-semibold fs-5 rounded">
              Product Added Successfully...!
            </p>
          )} */}
          <h2 className="display-5 mb-5">Confirm Your Order</h2>
          {productdata && <form onSubmit={()=>console.log("Submited")}>
            <div className="row">
              <div className="col-md-6">
                <input
                  type="text"
                  name="p_name"
                  className="form-group w-100 rounded mt-4 form-control"
                  value={productdata.p_name}
                  disabled
                  //value={p_name}
                  //onChange={(e) => setP_name(e.target.value)}
                />
                <div className='d-flex justyfy-content-between w-100'>
                <label className='mt-4'>Price :</label>
                <input
                  type="number"
                  name="p_price"
                  className="form-group w-50 rounded  mt-4 form-control"
                  value={productdata.p_price}
                  disabled
                 // value={p_price}
                 // onChange={(e) => setP_price(e.target.value)}
                />
                </div>
              </div>
              <div className="col-md-6">
                <div className='d-flex  '>
                <button className="btn btn-secondary" onClick={qtyIn}>+</button>
                <input
                  type="number"
                  name="p_stock"
                  className="form-group w-25 rounded mt-4 form-control"
                  placeholder="Product Quantity"
                  value={qty}
                  disabled
                 // value={p_stock}
                 // onChange={(e) => setP_stock(e.target.value)}
                />
                <button className="btn btn-secondary " onClick={qtyDec}>-</button>
                {limit&&<p className='text-danger'>Reached Stock Limit...!</p>}
                </div>
                <input
                  type="text"
                  className="form-group rounded mt-4 ml-5 form-control"
                  disabled
                  value={`Total : ${productdata.p_price*qty}`}
                 // onChange={(e) => setP_img(e.target.files[0])}
                />
              </div>
              <div className="col-md-12">
                {/* <textarea
                  name="p_descrip"
                  cols="30"
                  rows="5"
                  placeholder="Product Description"
                 // value={p_descrip}
                 // onChange={(e) => setP_descrip(e.target.value)}
                  className="mt-4 w-100 rounded"
                ></textarea> */}
                <button
                  type="submit"
                  className="btn btn-outline-success w-100 mt-4"
                  onClick={()=>navigate('/shipment')}
                >
                  <b>Buy Now</b>
                </button>
              </div>
            </div>
          </form>}
        </div>
      </div>
    </div>
  )
}

export default ProductDetails