import React, { useState } from 'react';

const LimitInput = ({ onChange }) => {
  const [limit, setLimit] = useState('');

  const handleChange = (e) => {
    let value = parseInt(e.target.value);
    
    // Check if value is a number
    if (isNaN(value)) {
      value = '';
    } else {
      // Ensure value is within the range [1, 10]
      value = Math.min(Math.max(value, 1), 10);
    }

    setLimit(value);
    onChange(value);
  };

  return (
    <input
      className='limit-input'
      type="number"
      min="1"
      max="10"
      value={limit}
      onChange={handleChange}
      placeholder="Enter limit"
    />
  );
};

export default LimitInput;
