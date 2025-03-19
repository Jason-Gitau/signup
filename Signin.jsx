import { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

const Signin=()=>{

    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    
    const [loading,setLoading]=useState("")
    const [error,setError]=useState("")
    const[success,setSuccess]=useState("")

    const submit=async(e)=>{
        e.preventDefault()
        setLoading('please wait...')

        try {
            const data= new FormData()
            data.append("email",email)
            data.append("password",password)


            const response= await axios.post("http://254jasonmbugua.pythonanywhere.com/api/signin",data)
            setSuccess(response.data.message)
            setLoading("")
        } catch (error)  {
            setLoading("");
            if (error.response) {
              // The request was made and the server responded with a status code
              // that falls out of the range of 2xx
              console.log("Response error", error.response);
              setError(`Error: ${error.response.data.message || 'Unknown error'}`);
            } else if (error.request) {
              // The request was made but no response was received
              console.log("Request error", error.request);
              setError("No response received from server");
            } else {
              // Something happened in setting up the request that triggered an error
              console.log("General error", error.message);
              setError(`Error: ${error.message}`);
            }
        }
    }



    return(
        <div className="row  justify-content-center mt-4">
            <div className="card shadow col-md-6 p-4">
                <h1>sign in</h1>
               {/* Conditionally render loading, error, and success messages */}
               {loading && <h1 className="text-info">{loading}</h1>}
               {error && <h1 className="text-danger">{error}</h1>}
               {success && <h1 className="text-success">{success}</h1>}
                <form onSubmit={submit}>
                    <input type="email" placeholder="Enter your Email"  required className="form control w-100" onChange={(e)=>setEmail(e.target.value)}/>
                    {/* bind */}
                    {email}
                     <br/> <br/>
                     
                    <input type="password" placeholder="Enter your password" required className="form control w-100" onChange={(e)=>setPassword(e.target.value)} /> 
                    {/* bind */}
                    {password}
                    <br/><br/>
                    <button type="submit" className="btn btn-info w-100"> Sign in</button><br/>
                    <p>Don't have an account  ? <Link to={"/signup"}>Sign up</Link></p>
                </form>

            </div> 

        </div>
    )
}
export default Signin;