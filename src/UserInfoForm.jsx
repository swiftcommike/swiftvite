import React, { useState } from 'react';

const UserInfoForm = ({ user, onSubmit }) => {
  const [name, setName] = useState('');
  const [zipCode, setZipCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, zipCode });
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

export default UserInfoForm;