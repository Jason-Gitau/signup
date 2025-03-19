import { useEffect, useState } from "react"
import axios from "axios"



const Getproducts=()=>{
    // 3 states 
    const[loading,setLoading]=useState('')
    const[error,setError]=useState('')
    const[products,setProducts]=useState([])

    // function to get products
    const getproducts=async()=>{
        setLoading("please wait...")

        try {
            const response =await axios.get("http://modcom2.pythonanywhere.com/api/get_product_details")
            setLoading('')
            setProducts(response.data)
        } catch (error) {
            setLoading("")
            setError(error.message)
            
        }
    }
    useEffect( ()=>{
        getproducts()

    },[]


    )
    console.log(products)

    const image_path = "http://modcom2.pythonanywhere.com/static/images/";

                                                                                                                                                                                                                                                                                                                                                               
    return(
        <div className="row container-fluid">
            <h1 className="text-center">Get products</h1>
            {/* mapping */}
            {products.map(product=>( 


            <div className="col-md-3 justify-content-center mt-4">
                <div className="card shadow p-4">
                    {/* image goe s here  */}
                    <img src={image_path + product.product_photo} alt=""/>

                    <div className="card-body">
                        <h5 className="text-info">{product.product_name}</h5>
                        <p className="text-muted">{product.product_description}</p>
                        <b className="text-warning">{product.product_cost}</b><br/>
                        <button className="btn btn-dark w-100 mt-2">purchase now</button>

                    </div>

                </div>

            </div>

             ))}
            {/* end of mapping */}
        </div>
    );
}

export default Getproducts