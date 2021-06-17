import React, {useState, useEffect} from 'react';
import NewProduct from '../components/NewProduct';
import AllProducts from '../components/AllProducts';
import axios from 'axios';
import { navigate } from '@reach/router';


const Main = (props)=>{

    const [products, setProducts] = useState([])

    const Remove = productId => {
        setProducts(products.filter(product => product._id !== productId))
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(res => {setProducts(res.data.products);
                props.setLoaded(true);
            })
            .catch(err => console.log(err) )
    }, [props.loaded])
    
    const onDeleteHandler =(id)=> {
        axios.delete(`http://localhost:8000/api/products/delete/${id}`)
        .then(res => {
            console.log(res);
            props.setLoaded(false);
        })
        .catch(err => console.log(err))
    }
    return (
        <div>
            <NewProduct loaded={props.loaded} setLoaded={props.setLoaded}/>
            <AllProducts loaded={props.loaded} setLoaded={props.setLoaded} products={products} setProducts={setProducts} onDeleteHandler={onDeleteHandler} Remove={Remove}/>
        </div>
    )
}

export default Main;