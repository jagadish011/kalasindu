import React from 'react';

function SlideItem({ image, name, description, isActive, onClick }) {
  return (
    <div className={`item ${isActive? 'active' : ''}`} style={{ backgroundImage: `url(${image})` }} onClick={onClick}>
      <div className="content">
        <div className="name">{name}</div>
        <div className="des">{description}</div>
        <button>See More</button>
      </div>
    </div>
  );
}

export default SlideItem;
