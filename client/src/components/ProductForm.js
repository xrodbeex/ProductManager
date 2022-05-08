import React, { useEffect, useState } from 'react'
import axios from 'axios';
const ProductForm = () => {
    const [myTitle, setMyTitle ] = useState("");
    const [myPrice, setMyPrice ] = useState("");
    const [myDesc, setMyDesc ] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/product", {
            myTitle,
            myPrice,
            myDesc
        })
            .then(res=>{
                console.log(res);
                console.log(res.data);
            )
            .catch(err=>console.log(err))
    }
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title</label><br/>
                <input type="text" onChange= {(e)=>setMyTitle(e.target.value)}/>
            </p>
            <p>
                <label>Price</label>
                <input type="text" onChange = {(e) =>setMyPrice(e.target.value)}/>
            </p>
            <p>
                <label>Description</label>
                <input type="text" onChange = {(e) => setMyDesc(e.target.value)}/>
            </p>
        </form>
    )
}

export default ProductForm;