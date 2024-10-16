import React, { useState } from 'react';
import { Auth } from 'aws-amplify';

const OnboardingComponent = () => {
  const [name, setName] = useState('');
  const [zipCode, setZipCode] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await Auth.currentAuthenticatedUser();
      console.log('User info submitted:', { name, zipCode });
      // Here you would typically send this data to your backend
      alert('User information saved!');
    } catch (error) {
      console.error('Error saving user information:', error);
      alert('Error saving user information. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="user-info-form">
      <h2>Complete Your Profile</h2>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="zipCode">Zip Code:</label>
        <input
          type="text"
          id="zipCode"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
          pattern="[0-9]{5}"
          title="Five digit zip code"
          required
        />
      </div>
      <button type="submit">Save Information</button>
    </form>
  );
};

export default OnboardingComponent;