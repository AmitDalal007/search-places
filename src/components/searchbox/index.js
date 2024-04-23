import React, { useState, useEffect } from 'react';

const SearchBox = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleShortcut = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === '/') {
        inputRef.current.focus();
      }
    };

    document.addEventListener('keydown', handleShortcut);

    return () => {
      document.removeEventListener('keydown', handleShortcut);
    };
  }, []);

  const inputRef = React.createRef();

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSearch(query);
    }
  };

  return (
    <div className='search-box-container'>
      <input
        ref={inputRef}
        className='search-box-input'
        type="text"
        placeholder="Start searching"
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <span className='shortcut'>Ctrl + /</span>
    </div>
  );
};

export default SearchBox;
