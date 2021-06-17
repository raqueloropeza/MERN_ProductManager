import React, {useState} from 'react';
import {navigate} from '@reach/router';
import Form from './Form';
import axios from 'axios';

const NewProduct = (props) => {
    const [form, setForm] = useState({
        "title": " ",
        'price': ' ',
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
                    "title": '',
                    'price': '',
                    'description': ''
                })
                })
            
            .catch(err => console.log(err));
    }

    return(
        <div>
            <Form form={form} setForm= {setForm} onChangeHandler={onChangeHandler} onSubmitHandler={onSubmitHandler}></Form>
        </div>
    )
}

export default NewProduct;