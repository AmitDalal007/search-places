import React from 'react';

const Table = ({ data, loading }) => {
  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Place Name</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan="3">Loading...</td>
            </tr>
          ) : data?.data?.length ? (
            data?.data.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.country}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No result found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
