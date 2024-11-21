"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import React from "react";
import "./pages.css";

function Home({ customers, products, totalPrice }) {
  const sortedCustomers = customers.sort(
    (a, b) => new Date(b.purchased_date) - new Date(a.purchased_date)
  );

  // Define the 12 months of the year (using index-based mapping)
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Initialize chart data with all months set to 0 initially
  const chartData = months.map((month) => ({
    month,
    total_spend: 0,
  }));

  // Loop through customers and sum up the total spending for each month
  customers.forEach((customer) => {
    const purchaseDate = new Date(customer.purchased_date);
    const purchaseMonth = purchaseDate.getMonth(); // Get month index (0 = Jan, 1 = Feb, ..., 11 = Dec)

    // Add the customer's spending to the corresponding month's total spend
    chartData[purchaseMonth].total_spend +=
      parseFloat(customer.total_spend) || 0;
  });

  // Prepare the recent customers for the table
  const recentCustomers = sortedCustomers.slice(0, 5);

  const sortedSpend = customers.sort((a, b) => b.total_spend - a.total_spend);
  const sortedPurchase = sortedSpend.slice(0, 5);

  return (
    <>
      <div className="dashBoard">
        <div className="chart-container">
          <h1>Customer Chart</h1>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" /> {/* X-axis will display month names */}
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="total_spend" // The y-axis will show the total spending for each month
                stroke="#8884d8"
                fill="#8884d8"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

      
        <div className="totalCard">
          <h4 className="totalProduct">
            Total No. of Products = {products.length}
          </h4>
          <h4 className="totalcustomer">
            Total No. of Customers = {customers.length}
          </h4>
        </div>



        <div className="sorted_total">


          <div className="customer-pages">
            <div className="card-wrapper">
              {recentCustomers.length === 0 ? (
                <div>No customers available</div>
              ) : (
                <table className="home-customer-table">
                  <thead>
                    <h2>Recent Customers</h2>
                    <tr>
                      <th>Name</th>
                      <th>Join Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentCustomers.map((customer, index) => (
                      <tr key={index}>
                        <td>{customer.customer_name}</td>
                        <td>
                          {new Date(
                            customer.purchased_date
                          ).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>



          <div className="customer-pages">
            <div className="card-wrapper">
              {sortedPurchase.length === 0 ? (
                <div>No customers available</div>
              ) : (
                <table className="home-customer-table">
                  <thead>
                    <h2>Highest Purchased</h2>
                    <tr>
                      <th>Name</th>
                      <th>Purchased</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sortedPurchase.map((customer, index) => (
                      <tr key={index}>
                        <td>{customer.customer_name}</td>
                        <td>{customer.total_spend}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>

          
        </div>
      </div>
    </>
  );
}

export default Home;
