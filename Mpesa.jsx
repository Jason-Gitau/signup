import React from "react"
import { useLocation } from "react-router-dom"
import { useState } from "react"
import axios from "axios"


const Mpesa=()=>{
    const{product}=useLocation().state||{}
    const[phone,setPhone]=useState("")

    // states
    const[loading,setLoading]=useState('')
    const[error,setError]=useState("")
    const[success,setSuccess]=useState("")
    // function to make payment
    const submit =async(e)=>{
        e.preventDefault()
        setLoading("please wait as we process")

        try {
            const data=new FormData()
            data.append("amount",product.product_cost)
            data.append("phone",phone)

            const response =await axios.post("http://modcom2.pythonanywhere.com/api/mpesa_payment",data)
            setLoading("")
            setSuccess("successfull payment")
        } catch (error) {
            setLoading('')
            setError(`an error occured:${error}`)
            
        }
    }
     
    // image apth
    const image_path = "http://modcom2.pythonanywhere.com/static/images/";


    return(
        <div className="card shadow p-4 m-4">
            <img src={image_path+ product?.product_photo} alt="" style={{width :"50%",height:'50%'}} />
            <h2>{product?.product_name}</h2>
            <h5 className="text-info">{product.product_description}</h5>
            <h1 className="text-danger">{product.product_cost} Ksh</h1>
            {/*mpesa form  */}
            <form onSubmit={submit}>
                {loading}<br/>
                {error}<br/>
                {success}<br/>
                <input type="number" placeholder="enter phone 254xxxxxxxx" className="forn-control m-2" onChange={(e)=>setPhone(e.target.value)} required/><br/>
                {phone}<br/>
                <button className="btn btn-dark" >Pay Now</button>
            </form>

        </div>
    )
}
export default Mpesa