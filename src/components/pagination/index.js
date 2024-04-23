import React, { useState } from 'react';

const Pagination = ({ links, limit, onPageChange }) => {
  const [pageNumber, setPageNumber] = useState(1);

  const handlePageClick = (href) => {
    const page = parseInt(new URL(href, window.location.origin).searchParams.get('offset')) / limit + 1;
    onPageChange(page);
    setPageNumber(page)
  };

  const firstLink = links.find(link => link.rel === 'first');
  const prevLink = links.find(link => link.rel === 'prev');
  const nextLink = links.find(link => link.rel === 'next');
  const lastLink = links.find(link => link.rel === 'last');

  return (
    <div className="pagination">
      <button
        onClick={() => handlePageClick(firstLink ? firstLink.href : null)}
        disabled={!firstLink}
      >
        First
      </button>
      <button
        onClick={() => handlePageClick(prevLink ? prevLink.href : null)}
        disabled={!prevLink}
      >
        Prev
      </button>

      <button
      >
        {pageNumber}
      </button>

      <button
        onClick={() => handlePageClick(nextLink ? nextLink.href : null)}
        disabled={!nextLink}
      >
        Next
      </button>
      <button
        onClick={() => handlePageClick(lastLink ? lastLink.href : null)}
        disabled={!lastLink}
      >
        Last
      </button>
    </div>
  );
};

export default Pagination;
