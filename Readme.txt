# Zithara Database Setup

## Introduction
This README provides instructions for setting up the Zithara database, including creating the necessary database and table, as well as inserting sample data.

## Setup Instructions

### 1. Create Database
- Create a database named "zithara_db".

### 2. Create Table
- Create a table named "customers" using the following schema:
  ```sql
  CREATE TABLE customers (
      sno SERIAL PRIMARY KEY,
      "customer name" VARCHAR(100),
      age INTEGER,
      phone VARCHAR(20),
      location VARCHAR(100),
      created_at TIMESTAMP WITH TIME ZONE
  );
3. Insert Sample Data
Insert sample data into the "customers" table using the following SQL query:
sql
Copy code
INSERT INTO customers ("customer name", age, phone, location, created_at)
VALUES
    -- Insert sample records here...
;
Sample Data
Here is some sample data to insert into the "customers" table:

INSERT INTO customers ("customer name", age, phone, location, created_at)
VALUES
    ('John Doe', 30, '1234567890', 'New York', CURRENT_TIMESTAMP),
    ('Jane Smith', 25, '9876543210', 'Los Angeles', CURRENT_TIMESTAMP),
    ('Alice Johnson', 35, '5551234567', 'Chicago', CURRENT_TIMESTAMP),
    ('Bob Brown', 40, '9998887777', 'Houston', CURRENT_TIMESTAMP),
    ('Emily Davis', 28, '1112223333', 'San Francisco', CURRENT_TIMESTAMP),
    ('Michael Wilson', 45, '4445556666', 'Miami', CURRENT_TIMESTAMP),
    ('Sarah Lee', 32, '7778889999', 'Seattle', CURRENT_TIMESTAMP),
    ('David Martinez', 38, '2223334444', 'Atlanta', CURRENT_TIMESTAMP),
    ('Olivia Taylor', 27, '6667778888', 'Denver', CURRENT_TIMESTAMP),
    ('Ethan Anderson', 42, '3334445555', 'Dallas', CURRENT_TIMESTAMP),
    -- Add more dummy records here...
    ('Grace Clark', 29, '5554443333', 'Boston', CURRENT_TIMESTAMP),
    ('Liam White', 33, '2221110000', 'Philadelphia', CURRENT_TIMESTAMP),
    ('Sophia Harris', 31, '9998887777', 'Phoenix', CURRENT_TIMESTAMP),
    ('Noah Martin', 36, '7776665555', 'San Antonio', CURRENT_TIMESTAMP),
    ('Isabella Thompson', 26, '4443332222', 'San Diego', CURRENT_TIMESTAMP),
    ('James Garcia', 39, '1110009999', 'Austin', CURRENT_TIMESTAMP),
    ('Mia Martinez', 34, '8887776666', 'Jacksonville', CURRENT_TIMESTAMP),
    ('Benjamin Robinson', 43, '5554443333', 'Charlotte', CURRENT_TIMESTAMP),
    ('Charlotte Lewis', 28, '2221110000', 'San Jose', CURRENT_TIMESTAMP),
    -- Add more dummy records here...
    ('William Walker', 37, '9998887777', 'Indianapolis', CURRENT_TIMESTAMP),
    ('Ava Hall', 32, '7776665555', 'San Francisco', CURRENT_TIMESTAMP),
    ('Alexander Young', 30, '4443332222', 'Columbus', CURRENT_TIMESTAMP),
    ('Avery Rodriguez', 35, '1110009999', 'Fort Worth', CURRENT_TIMESTAMP),
    ('Harper Wright', 27, '8887776666', 'Detroit', CURRENT_TIMESTAMP),
    ('Daniel Hernandez', 38, '5554443333', 'El Paso', CURRENT_TIMESTAMP),
    ('Scarlett Scott', 31, '2221110000', 'Memphis', CURRENT_TIMESTAMP),
    ('Matthew Green', 39, '9998887777', 'Baltimore', CURRENT_TIMESTAMP),
    ('Madison Adams', 29, '7776665555', 'Boston', CURRENT_TIMESTAMP),
    ('Henry Baker', 36, '4443332222', 'Seattle', CURRENT_TIMESTAMP),
    -- Add more dummy records here...
    ('Amelia Perez', 33, '1110009999', 'Denver', CURRENT_TIMESTAMP),
    ('Liam Cook', 40, '8887776666', 'Washington', CURRENT_TIMESTAMP),
    ('Evelyn Bailey', 28, '5554443333', 'Nashville', CURRENT_TIMESTAMP),
    ('Samuel Rivera', 37, '2221110000', 'Milwaukee', CURRENT_TIMESTAMP),
    ('Elizabeth Cox', 34, '9998887777', 'Las Vegas', CURRENT_TIMESTAMP),
    ('Michael Brooks', 41, '7776665555', 'Portland', CURRENT_TIMESTAMP),
    ('Victoria Reed', 26, '4443332222', 'Louisville', CURRENT_TIMESTAMP),
    ('Joseph Ward', 38, '1110009999', 'Oklahoma City', CURRENT_TIMESTAMP),
    ('Penelope Coleman', 30, '8887776666', 'Tucson', CURRENT_TIMESTAMP),
    -- Add more dummy records here...
    ('Andrew Cooper', 39, '5554443333', 'Atlanta', CURRENT_TIMESTAMP),
    ('Chloe Richardson', 29, '2221110000', 'Albuquerque', CURRENT_TIMESTAMP),
    ('William Lopez', 42, '9998887777', 'Fresno', CURRENT_TIMESTAMP),
    ('Natalie Perez', 31, '7776665555', 'Sacramento', CURRENT_TIMESTAMP),
    ('James Howard', 40, '4443332222', 'Long Beach', CURRENT_TIMESTAMP),
    ('Ella Ross', 27, '1110009999', 'Kansas City', CURRENT_TIMESTAMP),
    ('David Ward', 36, '8887776666', 'Mesa', CURRENT_TIMESTAMP),
    ('Avery Evans', 32, '5554443333', 'Virginia Beach', CURRENT_TIMESTAMP),
    ('Grace Bailey', 41, '2221110000', 'Colorado Springs', CURRENT_TIMESTAMP),
    -- Add more dummy records here...
    ('Oliver Torres', 33, '9998887777', 'Raleigh', CURRENT_TIMESTAMP),
    ('Lily Torres', 42, '7776665555', 'Omaha', CURRENT_TIMESTAMP),
    ('Lucas Peterson', 28, '4443332222', 'Miami', CURRENT_TIMESTAMP),
    ('Sophia Morris', 43, '1110009999', 'Tulsa', CURRENT_TIMESTAMP),
    ('Mason Foster', 34, '8887776666', 'Oakland', CURRENT_TIMESTAMP),
    ('Evelyn Reed', 29, '5554443333', 'Cleveland', CURRENT_TIMESTAMP),
    ('Jackson Watson', 44, '2221110000', 'Minneapolis', CURRENT_TIMESTAMP),
    ('Isabella Fisher', 35, '9998887777', 'Wichita', CURRENT_TIMESTAMP),
    -- Add more dummy records here...
    ('Alexander Bell', 30, '7776665555', 'Arlington', CURRENT_TIMESTAMP),
    ('Ella Powell', 45, '4443332222', 'New Orleans', CURRENT_TIMESTAMP),
    ('Ethan Stewart', 31, '1110009999', 'Bakersfield', CURRENT_TIMESTAMP),
    ('Amelia Richardson', 36, '8887776666', 'Tampa', CURRENT_TIMESTAMP),
    ('Jacob Turner', 32, '5554443333', 'Honolulu', CURRENT_TIMESTAMP)
;

4. Execute SQL Queries
Run the above SQL queries in your PostgreSQL database management tool or command-line interface to set up the database and insert sample data.

5.Run Server: Run the server application to start the Customer Management System. The server will be running on port 3000.

Features
View Customers: Display a list of all customers with their details.
Search Customers: Search for specific customers by name or location.
Pagination: Navigate through multiple pages of customer data.
Add New Customer: Add a new customer to the database.
Update Customer: Modify the details of an existing customer.
Delete Customer: Remove a customer from the database.
Technologies Used
Frontend: React.js
Backend: Node.js, Express.js
Database: PostgreSQL
Styling: Bootstrap