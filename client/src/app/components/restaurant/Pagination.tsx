import { PaginationData } from "@/types/types";
import React from "react";

function Pagination({
  restaurantsPerPage,
  totalRestaurants,
  paginate,
  currentPage,
}: PaginationData) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalRestaurants / restaurantsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="join">
      {pageNumbers.map((number) => (
        <input
          key={number}
          className={`join-item btn btn-square ${
            number === currentPage ? "active" : ""
          }`}
          type="radio"
          name="options"
          aria-label={`${number}`}
          onClick={() => paginate(number)}
          defaultChecked={number === currentPage}
        />
      ))}
    </div>
  );
}

export default Pagination;
