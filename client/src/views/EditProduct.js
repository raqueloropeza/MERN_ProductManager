import React, {useState, useEffect} from 'react';
import {navigate} from '@reach/router';
import axios from 'axios';
import Form from '../components/Form';

const EditProduct = (props)=>{
    const [form, setForm] = useState({
        "title": "",
        'price': '',
        'description': ''
    });

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${props.id}`)
            .then(res=>setForm(res.data.product))
            .catch(err=>console.log(err))
    }, [props.id])

    const onChangeHandler = (event) =>{
        setForm({
            ...form, 
            [event.target.name]: event.target.value
        })
    }

    const onSubmitHandler = (event) =>{
        event.preventDefault();
        axios.put(`http://localhost:8000/api/products/update/${props.id}`, form)
            .then(res =>{ 
                console.log(res);
                if(res.data.products);
                props.setLoaded(false)
                navigate("/")
                })
            
            .catch(err => console.log(err));
    }

    
    return (
        <div>
        <h1 className="display-3 mt-5 mb-5 d-flex justify-content-center">Update {form.title}</h1>
        <Form form={form} setForm= {setForm} onChangeHandler={onChangeHandler} onSubmitHandler={onSubmitHandler} />
        </div>
    )
}

export default EditProduct;