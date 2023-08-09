import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './payment.css';

const PaymentPage = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');
  const [error, setError] = useState('');
  const [isPaymentEnabled, setIsPaymentEnabled] = useState(false);

  const handleCardNumberChange = (e) => {
    const newCardNumber = e.target.value;
    setCardNumber(newCardNumber);
    setIsPaymentEnabled(validatePaymentForm(newCardNumber, expiryDate, cvv));
  };

  const handleExpiryDateChange = (e) => {
    const newExpiryDate = e.target.value;
    setExpiryDate(newExpiryDate);
    setIsPaymentEnabled(validatePaymentForm(cardNumber, newExpiryDate, cvv));
  };

  const handleCVVChange = (e) => {
    const newCVV = e.target.value;
    setCVV(newCVV);
    setIsPaymentEnabled(validatePaymentForm(cardNumber, expiryDate, newCVV));
  };

  const validatePaymentForm = (cardNumber, expiryDate, cvv) => {
    const cardNumberPattern = /^[0-9]{16}$/;
    const cvvPattern = /^[0-9]{3}$/;
    const expiryDatePattern = /^(0[1-9]|1[0-2])\/[0-9]{2}$/;

    return (
      cardNumberPattern.test(cardNumber) &&
      cvvPattern.test(cvv) &&
      expiryDatePattern.test(expiryDate)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!isPaymentEnabled) {
      setError('Please fill out the payment details correctly.');
      return;
    }

    // Simulate payment processing logic
    console.log('Card Number:', cardNumber);
    console.log('Expiry Date:', expiryDate);
    console.log('CVV:', cvv);

    // Clear the input fields and error after successful submission
    setCardNumber('');
    setExpiryDate('');
    setCVV('');
    setError('');
  };

  return (
    <div style={{marginTop:"20px"}}>
    <div className="payment-container">
      <h2>Payment Page</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label><b>Card Number: </b></label>
          <input type="text" value={cardNumber} onChange={handleCardNumberChange} />
        </div>
        <div>
          <label style={{marginLeft:"18px"}}><b>Expiry Date: </b></label>
          <input type="text" placeholder='(MM/YY)' value={expiryDate} onChange={handleExpiryDateChange} />
        </div>
        <div>
          <label style={{marginLeft:"68px"}}><b>CVV: </b></label>
          <input type="text" value={cvv} onChange={handleCVVChange} />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit" >Make Payment</button>
        <br />
        <Link to="/">Cancel and go back</Link>
      </form>
    </div>
    </div>
  );
};

export default PaymentPage;
