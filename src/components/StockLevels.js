import React from 'react';

const StockLevels = () => {
	return (
		<div className="container d-flex justify-content-center pb-3">
			<form className="border mt-5 shadow bg-white rounded w-75">
				<div className="container pt-3">
					<h5 className="d-flex justify-content-start px-4 mb-3">
						Stock Levels
					</h5>
					<div className="form-group px-4">
						<table className="table table-dark">
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
						</table>
					</div>
					<div className="form-group px-4">
						<table className="table table-dark">
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
						</table>
					</div>
					<div className="form-group px-4 pb-1">
						<table className="table table-dark">
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
						</table>
					</div>
				</div>
			</form>
		</div>
	);
};

export default StockLevels;
