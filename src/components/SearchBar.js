// // SearchBar.js

// import React from 'react';

// const SearchBar = ({ handleSearch }) => {
//   return (
//     <div>
//       <input type="text" placeholder="Search by Name or Location" onChange={handleSearch} />
//     </div>
//   );
// };

// export default SearchBar;


// SearchBar.js

import React from 'react';

const SearchBar = ({ handleSearch }) => {
  return (
    <div>
      <input type="text" placeholder="Search by Name or Location" onChange={handleSearch} />
    </div>
  );
};

export default SearchBar;
