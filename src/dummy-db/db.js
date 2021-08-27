const stockLevelsReducer = () => {
	return [
		{
			productOne: {
				qty: null,
				qtyPriceAverage: null,
			},
			productTwo: {
				qty: null,
				qtyPriceAverage: null,
			},
			productThree: {
				qty: null,
				qtyPriceAverage: null,
			},
		},
	];
};

const addStockReducer = () => {
	return {
		selectedProduct: null,
		itemsReceived: null,
		pricePerItemReceived: null,
	};
};

const removeStockReducer = () => {
	return {
		selectedProduct: null,
		customerEmail: null,
		itemsBought: null,
	};
};

// Will need to somehow push customer e-mail into an array to check
// If purchases were made
