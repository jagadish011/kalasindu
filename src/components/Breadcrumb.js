import React from 'react';
import { Link } from 'react-router-dom';
import './Breadcrumb.css';

const Breadcrumb = ({ items }) => {
  return (
    <nav className="breadcrumb">
      {items.map((item, index) => (
        <span key={index}>
          {item.link ? (
            <Link to={item.link}>{item.label}</Link>
          ) : (
            <span>{item.label}</span>
          )}
          {index < items.length - 1 && ' > '}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumb;
