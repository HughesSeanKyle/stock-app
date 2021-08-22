import React from 'react';

const AddStock = () => {
	return (
		<div className="container d-flex justify-content-center">
			<form className="border mt-5 shadow bg-white rounded w-75">
				<div className="container pt-3">
					<h5 className="d-flex justify-content-start px-4 mb-3">Add Stock</h5>
					<div className="form-group px-4">
						<div className="input-group-prepend">
							<label className="input-group-text" htmlFor="inputGroupSelect01">
								Select a product code
							</label>
						</div>
						<select className="custom-select" id="inputGroupSelect01">
							<option defaultValue="1">Product 1</option>
							<option value="2">Product 2</option>
							<option value="3">Product 3</option>
						</select>
					</div>
					<div className="form-group px-4">
						<label className="d-flex justify-content-start">
							Items received
						</label>
						<input
							type="email"
							className="form-control"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
						/>
					</div>
					<div className="form-group px-4">
						<label className="d-flex justify-content-start">
							Price per item received
						</label>
						<input
							type="email"
							className="form-control"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
						/>
					</div>
					<div className="form-group d-flex justify-content-center pb-2">
						<button className="btn btn-primary w-100 mx-4" type="button">
							Add Stock
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default AddStock;
