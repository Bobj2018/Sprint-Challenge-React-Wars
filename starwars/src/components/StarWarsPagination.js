import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

function StarWarsPagination({ pages, changePage }) {
	function createPagination(arg) {
		let pagination = [];

		// Outer loop to create parent
		for (let i = 1; i <= arg; i++) {
			pagination.push(i);
		}
		return pagination;
	}

	let pagination = createPagination(pages);
	console.log(pagination);

	return (
		<Pagination size="sm" aria-label="Page navigation example">
			<PaginationItem>
				<PaginationLink first href="#" />
			</PaginationItem>
			<PaginationItem>
				<PaginationLink previous href="#" />
			</PaginationItem>

			{pagination.map((page) => {
				return (
					<PaginationLink
						href="#"
						onClick={() => {
							console.log('Clicker');

							changePage({ page });
						}}
					>
						{page}
					</PaginationLink>
				);
			})}

			<PaginationItem>
				<PaginationLink next href="#" />
			</PaginationItem>
			<PaginationItem>
				<PaginationLink last href="#" />
			</PaginationItem>
		</Pagination>
	);
}

export default StarWarsPagination;
