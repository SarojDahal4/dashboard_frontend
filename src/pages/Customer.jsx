import React from "react";
import "./pages.css"; // Ensure this CSS file is linked to the component

function Customer({ customers }) {
  return (
    <>
      <div className="customer-page">
        <h1>Customer Details</h1>
        <div className="card-wrapper">
          {customers.length === 0 ? (
            <div>No customers available</div>
          ) : (
            <table className="customer-table">
              <thead>
                <tr>
                  
                  <th>Name</th>
                  <th>C. Number</th>
                  <th>Phone Number</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((customer) => (
                  <tr key={customer.id}>
                    
                    <td>{customer.customer_name}</td>
                    <td>{customer.customer_number}</td>
                    <td>{customer.customer_ph_number}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
}

export default Customer;
