import React, {useState} from 'react';
import {navigate} from '@reach/router';
import axios from 'axios';

const Form = (props) => {

    return (
        <div className="container d-flex justify-content-lg-center">
        <form onSubmit = {props.onSubmitHandler}>
        <div className = "row">
            <div className = "col-sm-3">
                <label className ="font-weight-bold" htmlFor= "title">Title: </label>
            </div>
            <div className = "col-sm-9">
                <input className="form-control" type = "text" name= "title" placeholder="title" onChange={props.onChangeHandler} value={props.form.title}></input>
            </div>
            </div>
        <div className = "row">
            <div className = "col-sm-3">
                <label className ="font-weight-bold" htmlFor= "price">Price: </label>
            </div>
            <div className = "col-sm-9">
                <input className="form-control" type = "number" name= "price" onChange={props.onChangeHandler} value= {props.form.price} placeholder="price"></input>
            </div>
        </div>
        <div className = "row">
            <div className = "col-sm-3">
                <label className ="font-weight-bold" htmlFor= "description">Description: </label>
            </div>
            <div className = "col-sm-9">
                <input className="form-control" type = "text" name= "description" onChange={props.onChangeHandler}  placeholder="description" value={props.form.description}></input>
            </div>
        </div>
        <div className = "row mt-3 d-flex justify-content-center">
            <div className = "col-sm-4">
                <input type = "submit" value= "Submit"></input>
            </div>
        </div>
        
        </form>
    </div>
    )
}

export default Form;