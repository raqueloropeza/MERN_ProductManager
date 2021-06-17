import React from 'react';
import {Link} from '@reach/router';
import Delete from './Delete';


const AllProducts = (props) =>{
    
    
    return (
        <div>
            <h2 className="display-3 mt-5 mb-5 d-flex justify-content-center">All Products:</h2>
                {
                    props.products.map((product, key)=>{
                        return(
                        <div className="row mb-3 justify-content-center border-bottom border-dark">
                            <div className= "col-sm-2">
                                <h3 className="display-5" key={key}><Link to ={`/products/${product._id}`}>{product.title}</Link></h3>
                            </div>
                            <div className = "col-sm-1">
                            <button className= "d-inline-flex p-2  justify-content-center btn btn-dark" onClick={() => props.onDeleteHandler(product._id)}>Delete</button>
                            </div>
                            <div className = "col-sm-1">
                                <button className="d-inline-flex p-2 btn btn-light"> <Link to ={`/products/update/${product._id}`}>Edit</Link></button>
                            </div>
                        
                        
                        </div>)
                        
                            

                    })
                }
        </div>
    )
}

export default AllProducts;