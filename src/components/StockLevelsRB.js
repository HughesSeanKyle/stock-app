import React from 'react';
import { Container, Table, Form } from 'react-bootstrap';

const StockLevelsRB = () => {
	return (
		<Container className="d-flex justify-content-center pb-3">
			<Form className="border mt-5 pb-3 shadow bg-white rounded w-75">
				<h5 className="d-flex justify-content-start px-4 my-3">Stock Levels</h5>
				<Container className="mb-3 px-4">
					<Table striped bordered hover variant="dark">
						<thead>
							<tr>
								<th className="text-primary" scope="col">
									Product 1
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th scope="row">QTY</th>
								<td>7</td>
							</tr>
							<tr>
								<th scope="row">QTY average price</th>
								<td>R2350.00</td>
							</tr>
						</tbody>
					</Table>
					<Table striped bordered hover variant="dark">
						<thead>
							<tr>
								<th className="text-primary" scope="col">
									Product 2
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th scope="row">QTY</th>
								<td>9</td>
							</tr>
							<tr>
								<th scope="row">QTY average price</th>
								<td>R1600.50</td>
							</tr>
						</tbody>
					</Table>
					<Table striped bordered hover variant="dark">
						<thead>
							<tr>
								<th className="text-primary" scope="col">
									Product 3
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th scope="row">QTY</th>
								<td>7</td>
							</tr>
							<tr>
								<th scope="row">QTY average price</th>
								<td>R7000.00</td>
							</tr>
						</tbody>
					</Table>
				</Container>
			</Form>
		</Container>
	);
};

export default StockLevelsRB;
