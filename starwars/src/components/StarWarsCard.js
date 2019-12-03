import React from 'react';
import { Card, CardHeader, CardBody, CardText, Col } from 'reactstrap';

function StarWarsCard({ name, height, mass, hairColor, skinColor, eyeColor, birthYear, gender }) {
	return (
		<Col xs="6" md="4" lg="3">
			<Card>
				<CardHeader>{name}</CardHeader>
				<CardBody>
					<CardText>Height: {height}</CardText>
					<CardText>Mass: {mass}</CardText>
					<CardText>Hair Color: {hairColor}</CardText>
					<CardText>Skin Color: {skinColor}</CardText>
					<CardText>Eye Color: {eyeColor}</CardText>
					<CardText>Birth Year: {birthYear}</CardText>
					<CardText>Gender: {gender}</CardText>
				</CardBody>
			</Card>
		</Col>
	);
}

export default StarWarsCard;
