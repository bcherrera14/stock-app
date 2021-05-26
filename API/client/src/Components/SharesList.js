import axios from 'axios';
import React from 'react';
import SharesCard from './SharesCard';

const SharesList = ({ shares }) => {
	const sharesCards = shares.map((stock) => {
		return <SharesCard key={stock.stock_id} stock={stock} />;
	});
	return <div className="d-flex flex-column">{sharesCards}</div>;
};

export default SharesList;
