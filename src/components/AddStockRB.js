import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const AddStockRB = () => {
	return (
		<Container className="d-flex justify-content-center">
			<Form className="border mt-5 shadow bg-white rounded w-75">
				<h5 className="d-flex justify-content-start px-4 my-3">Add Stock</h5>
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
				<Form.Group className="mb-3 px-4" controlId="addStock.ControlInput1">
					<Form.Label className="d-flex justify-content-start">
						Items Received
					</Form.Label>
					<Form.Control type="number" placeholder="Qty of items" />
				</Form.Group>
				<Form.Group className="mb-3 px-4" controlId="addStock.ControlInput2">
					<Form.Label className="d-flex justify-content-start">
						Price per item received
					</Form.Label>
					<Form.Control type="number" placeholder="Price per item" />
				</Form.Group>
				<Form.Group className="mb-3 px-4" controlId="addStock.ControlButton">
					<Button className="w-100" variant="primary">
						Add Stock
					</Button>{' '}
				</Form.Group>
			</Form>
		</Container>
	);
};

export default AddStockRB;
