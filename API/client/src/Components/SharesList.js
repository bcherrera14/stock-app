import axios from 'axios';
import React from 'react';
import SharesCard from './SharesCard';

const SharesList = ({ shares, currentPrices }) => {
	console.log(currentPrices);
	const sharesCards = shares.map((stock) => {
		console.log(currentPrices[stock.symbol]);
		const currentPrice = currentPrices[stock.symbol];
		return <SharesCard key={stock.stock_id} stock={stock} currentPrice={currentPrice} />;
	});
	return <div className="d-flex flex-column align-items-center">{sharesCards}</div>;
};

export default SharesList;
