// // CustomerTable.js

// import React from 'react';

// const CustomerTable = ({ customers }) => {
//   return (
//     <div>
//       <h2>Customer Table</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Customer Name</th>
//             <th>Age</th>
//             <th>Phone</th>
//             <th>Location</th>
//             <th>Created At</th>
//           </tr>
//         </thead>
//         <tbody>
//           {customers.map((customer, index) => (
//             <tr key={index}>
//               <td>{customer.name}</td>
//               <td>{customer.age}</td>
//               <td>{customer.phone}</td>
//               <td>{customer.location}</td>
//               <td>{customer.created_at}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default CustomerTable;


// CustomerTable.js

import React from 'react';

const CustomerTable = ({ customers }) => {
  return (
    <div>
      <h2>Customer Table</h2>
      <table>
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Age</th>
            <th>Phone</th>
            <th>Location</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={index}>
              <td>{customer.name}</td>
              <td>{customer.age}</td>
              <td>{customer.phone}</td>
              <td>{customer.location}</td>
              <td>{new Date(customer.created_at).toLocaleDateString()}</td>
              <td>{new Date(customer.created_at).toLocaleTimeString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerTable;
