import React from 'react'
import axios from 'axios'

const onDeleteHandler =(props)=> {
    axios.delete(`http://localhost:8000/api/products/delete/${props.id}`)
    .then(res => {
        props.successCallback();
        console.log(res);
        props.setLoaded(false);
    })
    .catch(err => console.log(err))

    return(
        <div>
            <h1>{props.id}</h1>
            <div className = "col-sm-1">
                <button className= "d-inline-flex p-2  justify-content-center btn btn-dark" onClick={onDeleteHandler}>Delete</button>
            </div>
        </div>
    )}
export default onDeleteHandler;