import React, { useState } from 'react';
import './form-component.css';

const cardData = [
  { name: 'Harshith', img: 'hii' },
  { name: 'Kasi', img: 'hii' },
  { name: 'Damu', img: 'hii' },
  { name: 'Ashok', img: 'hii' },
  { name: 'Nitish', img: 'hii' },
];

function FormSelector() {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [showFields, setShowFields] = useState<number | null>(null);

  // Split cards into two rows: 3 on top, 2 on bottom
  const topRow = cardData.slice(0, 3);
  const bottomRow = cardData.slice(3);

  // Handle card click with delayed form field reveal
  const handleCardClick = (idx: number, isExpanded: boolean) => {
    if (isExpanded) {
      setExpanded(null);
      setShowFields(null);
    } else {
      setExpanded(idx);
      setShowFields(null);
      setTimeout(() => setShowFields(idx), 1100); // match animation duration
    }
  };

  // Render a card (expanded or not)
  const renderCard = (card: { name: string; img: string }, idx: number) => {
    const isExpanded = expanded === idx;
    return (
      <div
        className={`form-card${isExpanded ? ' expanded' : ''}`}
        key={card.name}
        onClick={() => handleCardClick(idx, isExpanded)}
        style={{ cursor: 'pointer' }}
      >
        <div className="form-top">
          <img src={card.img} alt={card.name} style={{ width: '80%', height: '80%', objectFit: 'cover', borderRadius: '12px' }} />
        </div>
        <div className="form-bottom">
          {card.name}
        </div>
        {isExpanded && showFields === idx && (
          <div className="form-fields fade-in">
            <input className="form-input" placeholder="Sample Input 1" />
            <input className="form-input" placeholder="Sample Input 2" />
            <button className="form-submit">Submit</button>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="container">
      <div className="form-flex">
        {/* If a card is expanded, show it above, others below */}
        {expanded === null ? (
          <>
            <div className="form-row">
              {topRow.map((card, i) => renderCard(card, i))}
            </div>
            <div className="form-row">
              {bottomRow.map((card, i) => renderCard(card, i + 3))}
            </div>
          </>
        ) : (
          <>
            <div className="form-row form-row-single">
              {renderCard(cardData[expanded], expanded)}
            </div>
            <div className="form-row">
              {cardData.map((card, i) =>
                i !== expanded ? renderCard(card, i) : null
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default FormSelector;