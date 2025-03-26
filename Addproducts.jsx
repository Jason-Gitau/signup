import { useState } from "react"

import axios from "axios"

const Addproducts=()=>{
    const[name,setname]=useState("")
    const[description,setDescription]=useState("")
    const[quantity,setQuantity]=useState("")
    

    const[loading,setLoading]=useState("")
    const[error,setError]=useState("")
    const[success,setSuccess]=useState("")

    const submit=async(e)=>{
        e.preventDefault()
       
        try {
            setLoading("Please wait...")
            const data= new FormData()
            data.append("name",name)
            data.append("description",description)
            data.append("quantity",quantity)
            

            const response=await axios.post("http://modcom2.pythonanywhere.com/api/add_product",data)
            setLoading("")
            setSuccess(response.data.message)
            
        } catch (error) {
            setLoading(""); // Assuming this is clearing any loading state
        
            if (error.response) {
                console.log("Error response:", error.response);
                console.log("HTTP Status Code:", error.response.status);
                if (error.response.data && error.response.data.message) {
                    setError(`${error.response.data.message}`);
                } else {
                    setError(`Error: ${error.response.status} - An error occurred.`);
                }
            }
            
            
            
            // If no response was received (e.g., network error)
            else if (error.request) {
                console.log("Error request:", error);
                setError("No response received from server. Please check your network connection.");
            }
            // For any other type of error (e.g., issues in the code or unexpected exceptions)
            else if (error.request) {
                console.log("No response from server:", error.request);
                setError("No response received from server. Please check your network connection.");
            }
            else {
                console.log("General error:", error);
                setError(`Error: ${error.message || "An unexpected error occurred."}`);
            }
        }
        
    }

    return(
        <div>
            <div className="row justify-content-center mt-4">
               {loading && <h1 className="text-info">{loading}</h1>}
               {error && <h1 className="text-danger">{error}</h1>}
               {success && <h1 className="text-success">{success}</h1>}
               

                <form action="" className="card shadow col-md-6 p-4" onSubmit={submit}>
                <h1 className="text-center">Add products</h1>
                
                    <label htmlFor="">Product name</label><br/>
                    <input type="text"  className="form-control mb-4" onChange={(e)=>setname(e.target.value)}/><br/>
                    {/* bind productname */}
                    {name}
                    <label htmlFor="">Description</label><br/>
                    <input type="textarea" className="form-control mb-4"onChange={(e)=>setDescription(e.target.value)}/><br/>
                    {description}
                    <label htmlFor="">Quantity</label><br/>
                    <input type="number" className="form-control mb-4"onChange={(e)=>setQuantity(e.target.value)}/><br/>
                    {quantity}
                    <button type="submit" className="btn btn-primary w-100">Add product</button>
                   

                </form>
            </div>
        </div>
    )
}
export default Addproducts