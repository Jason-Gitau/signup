
import { Link, useNavigate } from "react-router-dom";
import Signin from "./Signin";
const Navbar = () => {

 
  return (
    <section className="container row">
      <div className="col-md-12">
        <nav className="navbar navbar-expand-md navbar-light bg-light">
        <Link to="/dashboard" className="navbar-brand">

<b className="text-danger" style={{fontSize: "20px"}}>Inventory<span className="text-info">Manager</span></b>

</Link>
          <button
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarcollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
 
          <div className="collapse navbar-collapse" id="navbarcollapse">
            <div className="navbar-nav">
         
              <Link to="/inventory" className="nav-link">
              Inventory
              </Link>
               
 
                <Link to="/addproducts" className="nav-link">
                Add Products
              </Link>

              <Link to="/aboutapp" className="nav-link">
                About app
              </Link>
              
            </div>
            <div className="ms-auto">
             
              <div className="navbar-nav ml-auto">
             
                  <Link to="/signin" className="btn btn-outline-primary me-2">Sign In</Link>
                  <Link to="/signup" className="btn btn-primary ">Sign Up</Link>
 
            </div>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
};
 
export default Navbar;
