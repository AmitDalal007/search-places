import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBox from './components/searchbox/index';
import Table from './components/table/index';
import Pagination from './components/pagination/index';
import LimitInput from './components/limitInput/index';
import './App.css';

const App = () => {
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${query}&limit=${limit}&offset=${(currentPage - 1) * limit}`,
          {
            headers: {
              'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
              'x-rapidapi-key': process.env.REACT_APP_API_KEY,
            },
          }
        );
        setData(response.data);
        setLinks(response.data.links);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [query, limit, currentPage]);

  const handleSearch = (value) => {
    setQuery(value);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleLimitChange = (value) => {
    setLimit(value);
    setCurrentPage(1); // Reset to first page when limit changes
  };

  return (
    <div className="container">
      <SearchBox onSearch={handleSearch} />
      <Table data={data} loading={loading} />

      <div className="pagination-container">
        {!loading && data?.data?.length ?
          <Pagination links={links} limit={limit} onPageChange={handlePageChange} /> : <div />}
        <LimitInput onChange={handleLimitChange} />
      </div>
    </div>
  );
};

export default App;
