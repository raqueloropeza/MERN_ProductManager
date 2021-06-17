import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const SingleProduct = (props) =>{
    const [product, setProduct] =useState({})

    const onDeleteHandler =(id)=> {
        axios.delete(`http://localhost:8000/api/products/delete/${id}`)
        .then(res => {
            console.log(res);
            navigate("/")
        })
        .catch(err => console.log(err))
    }
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${props.id}`)
            .then(res=>setProduct(res.data.product))
            .catch(err=>console.log(err))
    }, [props.id])
    return(
        <div>
            <h1 className="display-3 mt-5 mb-5 d-flex justify-content-center"> {product.title}</h1>
            <h3 className="display-5 mb-5 d-flex justify-content-center">Price: ${product.price}</h3>
            <h3 className="display-5 mb-5 d-flex justify-content-center">Description: {product.description}</h3>
            <div className="row mb-3 justify-content-center">
                <button className ="btn btn-dark" onClick={() => onDeleteHandler(product._id)}>Delete</button>
            </div>


        </div>
    )
}

export default SingleProduct;