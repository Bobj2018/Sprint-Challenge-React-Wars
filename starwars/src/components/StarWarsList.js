import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import StarWarsCard from './StarWarsCard';
import { Container, Row, Spinner } from 'reactstrap';

function StarWarsList() {
	const [ person, setPerson ] = useState([]);
	const didUpdate = () => {
		Axios.get('https://swapi.co/api/people/')
			.then((res) => {
				console.log(res.data.results);
				setPerson(res.data.results);
			})
			.catch((err) => console.log('Error: ', err));
	};

	useEffect(didUpdate, person);

	if (person.length !== 0) {
		return (
			<Container>
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
