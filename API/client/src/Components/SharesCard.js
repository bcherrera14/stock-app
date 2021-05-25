import React from 'react';

const SharesCard = () => {
	return (
		<div className="card ml-5 mr-5 mb-4">
			<div className="d-flex">
				<div className="d-flex flex-column mr-auto m-3">
					<h4>Stock Name</h4>
					<button type="button" className="btn btn-secondary btn-sm mt-2">
						Sell
					</button>
				</div>
				<div className="d-flex flex-column m-3 shares-data">
					<div className="d-flex justify-content-between">
						<span className="mr-auto">Current Value</span> <strong>$5,000.00</strong>
					</div>
					<div className="d-flex justify-content-between">
						<span className="mr-auto">Day's Gain</span> <strong>$219.00</strong>
					</div>
					<div className="d-flex justify-content-between">
						<span>Total Shares</span> <strong>100</strong>
					</div>
					<div className="d-flex justify-content-between">
						<span>List Price</span> <strong>$6.35</strong>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SharesCard;
