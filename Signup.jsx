import { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"


const Signup=()=>{
    // initialize state here
    const[username,setUsername] =useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[phone,setPhone]=useState("")

    // we want to have  3 states for possting data
    const [loading,setLoading]=useState("")
    const [error,setError]=useState("")
    const[success,setSuccess]=useState("")

    // we want to have a function that posts data 
    // our sign up will contain the following data
    // username,password,email,phone
    const  submit=async(e)=>{
        // we want to prevent the browser from reloading
        e.preventDefault()
        // console.log("Posting data")
        // we want to have a try and catch 
        try {
            // this works if we manage to post
            setLoading("please wait while we post data")
            // get the user inputs from the form
            // we are going to use form data and append
            // username,password,email,form 
            const data =new FormData()
            data.append("username",username)
            data.append("password",password)
            data.append("email",email)
            data.append("phone",phone)

            // now we can post the data
            // we use axios package
            // it come with http requests methods such as post get delete
            const response =await axios.post("https://modcom2.pythonanywhere.com/api/signup",data)
            // console.log(response)
            setSuccess(response.data.message)
            setLoading("")

        } catch (error) {
            // this works if there is an error eg network error
            setLoading("")
            setError(error.message)
            
        }
    }

    return(
        <div className="row justify-content-center mt-4"> 
        
            <div className="card shadow col-md-6 p-4">
                <h1 className="text-center">Sign up</h1>
                {/* bind loading */}
              <h1 className="text-info">{loading}</h1>
              {/* bind success */}
              <h1 className="text-success">{success}</h1>
              {/* bind error */}
              <h1 className="text-danger">{error}</h1>
                <form onSubmit={submit}>
                    <input type="text" placeholder="Enter username" className="form-control "onChange={(e)=>setUsername(e.target.value)}/><br/>
                    {/* bind username  */}
                    {username}
                    <input type="email" placeholder="Enter email" className="form-control" onChange={(e)=>setEmail(e.target.value)}/><br/>
                    {/* bind email */}
                    {email}
                    <input type="password" placeholder="Enter password" className="form-control" onChange={(e)=>setPassword(e.target.value)}/><br/>
                    {/* bind password */}
                    {password}
                    <input type="number" placeholder="Enter phone" className="form-control" onChange={(e)=>setPhone(e.target.value)}/><br/>
                    {/* bind phone */}
                    {phone}

                    <button type="input "className="btn btn-primary w-100">Sign up</button><br />
                    <p>Already have an account ? <Link to="/signin">Sign in</Link></p>
                </form>
            </div>

            
        
        
        
        
        
        
        
        </div>
    )
}
export default Signup