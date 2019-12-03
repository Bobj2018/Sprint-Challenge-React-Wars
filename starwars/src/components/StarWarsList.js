import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import StarWarsCard from './StarWarsCard';
import StarWarsPagination from './StarWarsPagination';
import { Container, Row, Spinner } from 'reactstrap';

function StarWarsList() {
	const [ person, setPerson ] = useState([]);
	const [ pages, setPages ] = useState(1);
	const [ curPage, setCurPage ] = useState(1);

	const changePage = (arg) => {
		console.log('Changing');
		console.log(arg.page);

		setCurPage(arg.page);
	};
	const didUpdate = () => {
		Axios.get(`https://swapi.co/api/people/?page=${curPage}`)
			.then((res) => {
				console.clear();
				console.log('Current', curPage);

				console.log(res.data);
				setPerson(res.data.results);
				const totalPages = Math.round(res.data.count / res.data.results.length);
				console.log(totalPages);
				setPages(totalPages);
			})
			.catch((err) => console.log('Error: ', err));
	};

	useEffect(didUpdate, [ curPage ]);

	if (person.length !== 0) {
		return (
			<Container>
				<StarWarsPagination changePage={changePage} pages={pages} style={{ margin: '0 auto' }} />
				<Row>
					{person.map((data) => {
						return (
							<StarWarsCard
								name={data.name}
								height={data.height}
								mass={data.mass}
								hairColor={data.hair_color}
								skinColor={data.skin_color}
								eyeColor={data.eye_color}
								birthYear={data.birth_year}
								gender={data.gender}
							/>
						);
					})}
				</Row>
			</Container>
		);
	} else {
		return (
			<Container>
				<Row>
					<Spinner style={{ margin: '0 auto', width: '3rem', height: '3rem' }} type="grow" />
				</Row>
			</Container>
		);
	}
}

export default StarWarsList;
