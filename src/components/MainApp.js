
// MainApp.js
import React, { useState, useEffect } from 'react';
import CustomerTable from './CustomerTable';
import SearchBar from './SearchBar';
import Pagination from './Pagination';
import axios from 'axios'; // Import Axios library for making HTTP requests
import './styles.css';

const MainApp = () => {
  const [customers, setCustomers] = useState([]); // State to hold customer data
  const [filteredCustomers, setFilteredCustomers] = useState([]); // State to hold filtered customer data
  const [currentPage, setCurrentPage] = useState(1); // State to track current page
  const [searchTerm, setSearchTerm] = useState(''); // State to hold search term
  
  useEffect(() => {
    // Fetch data from backend when component mounts
    fetchData();
  }, []);

  // Function to fetch data from backend
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/records'); // same as URL with your backend endpoint
      setCustomers(response.data); // Set customer data
      setFilteredCustomers(response.data); // Set filtered customer data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Handle search input change
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const filteredData = customers.filter(customer =>
      customer.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
      customer.location.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredCustomers(filteredData);
    setCurrentPage(1); // Reset current page when search term changes
  };

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Pagination logic - adjust according to your needs
  const customersPerPage = 20;
  const totalPages = Math.ceil(filteredCustomers.length / customersPerPage);
  const indexOfLastCustomer = currentPage * customersPerPage;
  const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;
  const currentCustomers = filteredCustomers.slice(indexOfFirstCustomer, indexOfLastCustomer);

  return (
    <div className="main-container">
      <h1>Zithara Technologies - Customer Data</h1>
      <div className="search-container">
        <SearchBar handleSearch={handleSearch} />
      </div>
      <div className="table-container">
        <CustomerTable customers={currentCustomers} />
      </div>
      <div className="pagination-container">
        <Pagination currentPage={currentPage} totalPages={totalPages} handlePageChange={handlePageChange} />
      </div>
    </div>
  );
};

export default MainApp;
