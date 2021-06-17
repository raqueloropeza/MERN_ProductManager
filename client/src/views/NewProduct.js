import React, {useState} from 'react';
import {navigate} from '@reach/router';
import axios from 'axios';
import Form from '../components/Form';

const NewProduct = (props) =>{
    const [form, setForm] = useState({
        "title": "",
        'price': '',
        'description': ''
    });

    const onChangeHandler = (event) =>{
        setForm({
            ...form, 
            [event.target.name]: event.target.value
        })
    }

    const onSubmitHandler = (event) =>{
        event.preventDefault();
        axios.post("http://localhost:8000/api/products/new", form)
            .then(res =>{ 
                console.log(res);
                if(res.data.products);
                props.setLoaded(false)
                setForm({
                    "title": "",
                    'price': '',
                    'description': ''
                })
                })
            
            .catch(err => console.log(err));
    }

    return (
        <div>
            <h1>Hey I'm new Product</h1>
            <Form></Form>
        </div>
    )
}

export default NewProduct;