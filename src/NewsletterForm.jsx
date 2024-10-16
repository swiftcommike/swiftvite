import React, { useState } from 'react';

const newsletters = [
  { id: 1, name: 'Daily Tech News' },
  { id: 2, name: 'Weekly Developer Digest' },
  { id: 3, name: 'Monthly Industry Trends' },
];

const NewsletterForm = ({ user }) => {
  const [subscriptions, setSubscriptions] = useState([]);

  const handleSubscriptionChange = (e) => {
    const newsletterId = parseInt(e.target.value);
    if (e.target.checked) {
      setSubscriptions([...subscriptions, newsletterId]);
    } else {
      setSubscriptions(subscriptions.filter(id => id !== newsletterId));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`User ${user.username} subscribed to:`, subscriptions);
    // Here you would typically send this data to your backend
    alert('Subscriptions updated!');
  };

  return (
    <form onSubmit={handleSubmit} className="newsletter-form">
      <h2>Subscribe to Newsletters</h2>
      {newsletters.map(newsletter => (
        <div key={newsletter.id} className="newsletter-option">
          <input
            type="checkbox"
            id={`newsletter-${newsletter.id}`}
            value={newsletter.id}
            onChange={handleSubscriptionChange}
          />
          <label htmlFor={`newsletter-${newsletter.id}`}>{newsletter.name}</label>
        </div>
      ))}
      <button type="submit">Update Subscriptions</button>
    </form>
  );
};

export default NewsletterForm;