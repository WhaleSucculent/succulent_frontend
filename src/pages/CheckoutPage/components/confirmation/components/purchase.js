import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import { connect } from 'react-redux';

export const Purchase = ({ price, tag, productIds, searchQuery, children }) => {
	const handleBuy = () => {
		fetch('https://succulentwhales.azurewebsites.net/api/checkout/payment-api', {
			method: 'POST',
			headers: {
			  'Content-Type': 'application/json',
			},
			body: JSON.stringify({
			  totalAmount: parseFloat(price).toFixed(2),
			  cancelRoute: window.location.pathname,
			  productIds: productIds,
			  searchQuery: searchQuery,
			  currentRoute: '/',//window.location.pathname,
			}),
		  })
		.then((res) => res.json())
		.then((json) => {
			window.open(json.url, '_self');
		});
	}
	return (
    <>
      {children ? (
        React.cloneElement(children, { onClick: handleBuy })
      ) : (
        <Button onClick={handleBuy}>
          PURCHASE
        </Button>
      )}
    </>
  );
}

Purchase.propTypes = {
  price: PropTypes.number,
  productIds: PropTypes.shape([]),
  searchQuery: PropTypes.string,
  children: PropTypes.node,
};

const PurchaseWithForwardedRef = React.forwardRef((props, ref) => (
	<Purchase {...props} />
));

const mapStateToProps = store => ({
	searchQuery: store.checkout.searchQuery,
});

export default connect(mapStateToProps)(PurchaseWithForwardedRef);