import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const RemoveStockRB = () => {
	return (
		<Container className="d-flex justify-content-center">
			<Form className="border mt-5 shadow bg-white rounded w-75">
				<h5 className="d-flex justify-content-start px-4 my-3">Remove Stock</h5>
				<Form.Group className="mb-3 px-4">
					<Form.Label className="d-flex justify-content-start">
						Select a Product Code
					</Form.Label>
					<Form.Select aria-label="Default select example">
						<option>--Select--</option>
						<option value="1">Product 1</option>
						<option value="2">Product 2</option>
						<option value="3">Product 3</option>
					</Form.Select>
				</Form.Group>
				<Form.Group className="mb-3 px-4" controlId="removeStock.ControlInput1">
					<Form.Label className="d-flex justify-content-start">
						Buyer Email Address
					</Form.Label>
					<Form.Control type="email" placeholder="Buyer Email" />
				</Form.Group>
				<Form.Group className="mb-3 px-4" controlId="removeStock.ControlInput2">
					<Form.Label className="d-flex justify-content-start">
						Items Bought
					</Form.Label>
					<Form.Control type="number" placeholder="Price per item" />
				</Form.Group>
				<Form.Group className="mb-3 px-4" controlId="removeStock.ControlButton">
					<Button className="w-100" variant="dark">
						Remove Stock
					</Button>{' '}
				</Form.Group>
			</Form>
		</Container>
	);
};

export default RemoveStockRB;
