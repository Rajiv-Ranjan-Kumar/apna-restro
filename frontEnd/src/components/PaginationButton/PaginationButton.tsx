import React from 'react';
import './PaginationButton.scss';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onNext: () => void;
  onPrevious: () => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onNext, onPrevious }) => {
  return (
    <div className="pagination">
      
      <button onClick={onPrevious} disabled={currentPage === 1} className="pagination-btn">
        Previous
      </button>

      <span className="pagination-info"> Page {currentPage} of {totalPages} </span>

      <button onClick={onNext} disabled={currentPage === totalPages} className="pagination-btn">
        Next
      </button>

    </div>
  );
};

export default Pagination;
