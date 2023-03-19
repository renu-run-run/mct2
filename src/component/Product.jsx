import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
const Product = () => {
   
    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
            console.log(response)
            setProduct(await response.json());
            console.log(product);
            setLoading(false);
        }
        getProduct();
        // eslint-disable-next-line
    },[id]);

    const Loading = () => {
        return(
            <>
              Loading...
            </>
        )
    }
    const ShowProduct = () => {
        return(
            <>
            
            <div className="col-md-6">
                <img src={product.images} alt={product.title} height="400px" width="400px"/>
                <div className="col-md-6">
                  <h1 className="display-5">{product.title}</h1>
                </div>    
            </div>
           
              
            </>
        )
    }
    
    return(
        <div>
            <div className="container">
              <div className="row">
                {loading ? <Loading/> : <ShowProduct/>}
              </div>
            </div>
        </div>
    )
}

export default Product;