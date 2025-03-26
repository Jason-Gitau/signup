import React from 'react';
import { BrowserRouter as Router,Route,Routes, Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="container mt-5">
      {/* Header */}
      <header className="text-center mb-4">
        <h1 className="display-4">Inventory Management Dashboard</h1>
      </header>

      {/* Inventory Overview Section */}
      <section className="mb-5">
        <h2 className="mb-4">Inventory Overview</h2>
        <div className="row text-center">
          <div className="col-md-4 mb-3">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Total Products</h5>
                <p className="card-text">200</p> {/* Dynamically render this value */}
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Total Stock Value</h5>
                <p className="card-text">$12,500</p> {/* Dynamically render this value */}
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Low Stock Items</h5>
                <p className="card-text">12</p> {/* Dynamically render this value */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Activity Section */}
      <section className="mb-5">
        <h2 className="mb-4">Recent Activities</h2>
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead className="thead-dark ">
              <tr>
                <th>Transaction</th>
                <th>Date</th>
                <th>Quantity</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Added Stock</td>
                <td>2025-03-20</td>
                <td>50</td>
                <td>$2,500</td>
              </tr>
              <tr>
                <td>Sold Item</td>
                <td>2025-03-19</td>
                <td>20</td>
                <td>$1,000</td>
              </tr>
           
            </tbody>
          </table>
        </div>
      </section>

      {/* Quick Actions Section */}

      <section className="mb-5">
        <h2 className="mb-4">Quick Actions</h2>
        <div className="d-flex justify-content-center">
        <Link to={'/addproducts'} className='btn btn-info mx-2'>Add New Product</Link>
        <Link to={'/inventory'} className='btn btn-info mx-2'>See Inventory</Link>
        <Link to={'/updatingproducts'} className='btn btn-info mx-2'>Update Products</Link>
         
          
          
        </div>
      </section>

      {/* Low Stock Section */}
      <section className="mb-5">
        <h2 className="mb-4">Low Stock Products</h2>
        <ul className="list-group">
          <li className="list-group-item">kettle - 5 units remaining</li>
          <li className="list-group-item">Buckets - 3 units remaining</li>
          <li className="list-group-item">Cups- 1 unit remaining</li>
          {/* Dynamically list low stock products */}
        </ul>
      </section>
    </div>
  );
};

export default Dashboard;
