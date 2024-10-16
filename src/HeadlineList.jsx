import React, { useState } from 'react';

const initialHeadlines = [
  { id: 1, title: "New AI Breakthrough in Natural Language Processing", bookmarked: false },
  { id: 2, title: "SpaceX Successfully Launches 60 More Starlink Satellites", bookmarked: false },
  { id: 3, title: "Global Efforts to Combat Climate Change Intensify", bookmarked: false },
];

const HeadlineList = () => {
  const [headlines, setHeadlines] = useState(initialHeadlines);

  const toggleBookmark = (id) => {
    setHeadlines(headlines.map(headline => 
      headline.id === id ? { ...headline, bookmarked: !headline.bookmarked } : headline
    ));
  };

  return (
    <div className="headline-list">
      <h2>Today's Headlines</h2>
      {headlines.map(headline => (
        <div key={headline.id} className="headline-item">
          <span>{headline.title}</span>
          <button 
            onClick={() => toggleBookmark(headline.id)}
            className={`bookmark-button ${headline.bookmarked ? 'bookmarked' : ''}`}
          >
            {headline.bookmarked ? '★' : '☆'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default HeadlineList;