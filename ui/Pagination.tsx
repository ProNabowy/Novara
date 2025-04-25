"use client";
import React from "react";

interface PaginationProps {
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
}

const getPageNumbers = (currentPage: number, totalPages: number) => {
	const pageNumbers: (number | string)[] = [];

	if (totalPages <= 7) {
		// If total pages is 7 or less, show all pages
		for (let i = 1; i <= totalPages; i++) {
			pageNumbers.push(i);
		}
	} else {
		// Always show first page
		pageNumbers.push(1);

		if (currentPage <= 3) {
			// If current page is near the start
			pageNumbers.push(2, 3, 4, "...", totalPages);
		} else if (currentPage >= totalPages - 2) {
			// If current page is near the end
			pageNumbers.push(
				"...",
				totalPages - 3,
				totalPages - 2,
				totalPages - 1,
				totalPages
			);
		} else {
			// If current page is in the middle
			pageNumbers.push(
				"...",
				currentPage - 1,
				currentPage,
				currentPage + 1,
				"...",
				totalPages
			);
		}
	}

	return pageNumbers;
};

const Pagination: React.FC<PaginationProps> = ({
	currentPage,
	totalPages,
	onPageChange,
}) => {
	const pageNumbers = getPageNumbers(currentPage, totalPages);

	const handlePageChange = (page: number) => {
		if (page >= 1 && page <= totalPages) {
			onPageChange(page);
		}
	};

	return (
		<div className="mt-6 flex items-center justify-center gap-2">
			<button
				onClick={() => handlePageChange(currentPage - 1)}
				disabled={currentPage === 1}
				className={`rounded-md px-3 py-1 ${
					currentPage === 1
						? "cursor-not-allowed bg-gray-200 text-gray-500"
						: "bg-white text-gray-700 hover:bg-gray-100"
				} border border-gray-300`}
			>
				Previous
			</button>

			{pageNumbers.map((pageNumber, index) => (
				<button
					key={index}
					onClick={() =>
						typeof pageNumber === "number"
							? handlePageChange(pageNumber)
							: null
					}
					disabled={pageNumber === "..."}
					className={`rounded-md px-3 py-1 ${
						pageNumber === currentPage
							? "bg-blue-600 text-white"
							: pageNumber === "..."
								? "cursor-default bg-white text-gray-500"
								: "bg-white text-gray-700 hover:bg-gray-100"
					} border border-gray-300`}
				>
					{pageNumber}
				</button>
			))}

			<button
				onClick={() => handlePageChange(currentPage + 1)}
				disabled={currentPage === totalPages}
				className={`rounded-md px-3 py-1 ${
					currentPage === totalPages
						? "cursor-not-allowed bg-gray-200 text-gray-500"
						: "bg-white text-gray-700 hover:bg-gray-100"
				} border border-gray-300`}
			>
				Next
			</button>
		</div>
	);
};

export default Pagination;
