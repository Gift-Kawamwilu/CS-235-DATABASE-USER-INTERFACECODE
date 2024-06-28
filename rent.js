function initializePayPalButtons() {
    paypal.Buttons({
        createOrder: function(data, actions) {
            return actions.order.create({
                purchase_units: [{
                    amount: {
                        value: '10.00' // Replace with the actual amount
                    }
                }]
            });
        },
        onApprove: function(data, actions) {
            return actions.order.capture().then(function(details) {
                alert('Transaction completed by ' + details.payer.name.given_name);
                redirectToTransaction('PayPal');
            });
        },
        onError: function(err) {
            console.error('PayPal Checkout error', err);
            alert('An error occurred during the PayPal transaction.');
        }
    }).render('#paypal-button-container');
}
